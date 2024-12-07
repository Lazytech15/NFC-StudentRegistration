import React, { useState, useRef, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getFirestore, doc, getDoc, addDoc, 
  collection, serverTimestamp 
} from 'firebase/firestore';
import { 
  getStorage, ref, uploadBytes, getDownloadURL 
} from 'firebase/storage';
import styles from './StudentRegistration.module.css';

const firebaseConfig = {
    apiKey: "AIzaSyC8tDVbDIrKuylsyF3rbDSSPlzsEHXqZIs",
    authDomain: "online-attendance-21f95.firebaseapp.com",
    databaseURL: "https://online-attendance-21f95-default-rtdb.firebaseio.com",
    projectId: "online-attendance-21f95",
    storageBucket: "online-attendance-21f95.appspot.com",
    messagingSenderId: "756223518392",
    appId: "1:756223518392:web:5e8d28c78f7eefb8be764d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const StatusModal = ({ message, type, isProcessing }) => {
  if (!message) return null;
  
  const getStatusClass = () => {
    switch (type) {
      case 'warning':
        return styles.statusWarning;
      case 'error':
        return styles.statusError;
      case 'success':
        return styles.statusSuccess;
      default:
        return styles.statusInfo;
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={`${styles.status} ${getStatusClass()} ${isProcessing ? styles['animate-pulse'] : ''}`}>
          {message}
        </div>
      </div>
    </div>
  );
};

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    course: '',
    campus: '',
    studentId: '',
  });
  const [selfie, setSelfie] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [status, setStatus] = useState('');
  const [nfcReader, setNfcReader] = useState(null);
  const [statusType, setStatusType] = useState('info');
  
  const fileInputRef = useRef(null);

  const updateStatus = (message, type = 'info') => {
    setStatus(message);
    setStatusType(type);
  };

  useEffect(() => {
    // Cleanup function to abort NFC reader when component unmounts
    return () => {
      if (nfcReader) {
        nfcReader.abort();
      }
    };
  }, [nfcReader]);

  const handleSelfie = (e) => {
    const file = e.target.files[0];
    setSelfie(file);
  };

  const uploadSelfie = async () => {
    if (!selfie) return null;
    setStatus('Uploading selfie...');
    const safeEmail = formData.email.replace(/[@.]/g, '_');
    const storageRef = ref(storage, `users/${safeEmail}/profile/${selfie.name}`);
    const snapshot = await uploadBytes(storageRef, selfie);
    return await getDownloadURL(snapshot.ref);
  };

  const writeNfcAndSave = async () => {
    if (!('NDEFReader' in window)) {
      throw new Error('NFC not supported on this device');
    }

    try {
      setIsSaving(true);
      setStatus('Waiting for NFC tag...');
      
      const ndef = new NDEFReader();
      setNfcReader(ndef);
      await ndef.scan();

      return new Promise((resolve, reject) => {
        // Using once to ensure the event listener only fires once
        const handleReading = async ({ serialNumber }) => {
          try {
            setStatus('Checking NFC authorization...');
            const isAuthorized = await checkNfcAuthorization(serialNumber);
            if (!isAuthorized) {
              reject(new Error('Unauthorized NFC tag'));
              return;
            }

            setStatus('Uploading data...');
            const selfieUrl = await uploadSelfie();
            const registrationData = {
              ...formData,
              nfcSerialNumber: serialNumber,
              selfieUrl,
              createdAt: serverTimestamp()
            };

            setStatus('Saving to database...');
            const docRef = await addDoc(collection(db, 'RegisteredStudent'), registrationData);

            setStatus('Writing to NFC tag...');
            try {
              await ndef.write({
                records: [{
                  recordType: "text",
                  data: new TextEncoder().encode(docRef.id)
                }]
              });
              
              setStatus('Verifying NFC write...');
              await verifyNfcWrite(docRef.id, ndef);
              
            } catch (writeError) {
              console.error('NFC Write Error:', writeError);
              setStatus('Attempting alternative write method...');
              try {
                await navigator.nfc.push({
                  type: "NDEF",
                  records: [{
                    type: "text/plain",
                    payload: docRef.id
                  }]
                });
              } catch (fallbackError) {
                console.error('Fallback NFC Write Error:', fallbackError);
                setStatus('NFC write failed, but registration saved');
              }
            }

            // Remove the event listener after successful processing
            ndef.addEventListener("reading", handleReading, { once: true });
            resolve(docRef.id);
          } catch (error) {
            ndef.removeEventListener("reading", handleReading);
            reject(error);
          }
        };

        ndef.addEventListener("reading", handleReading, { once: true });
      });
    } catch (error) {
      updateStatus(error.message, 'error');
      throw error;
    }
  };

  const verifyNfcWrite = async (expectedId, existingReader) => {
    // Use the existing reader instead of creating a new one
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('Verification timeout'));
      }, 5000);
  
      existingReader.addEventListener("reading", ({ message }) => {
        clearTimeout(timeout);
        const verified = message.records.some(record => 
          record.recordType === "text" && 
          new TextDecoder().decode(record.data) === expectedId
        );
        
        if (!verified) {
          reject(new Error('NFC write verification failed'));
        } else {
          resolve();
        }
      }, { once: true });
    });
  };

  const checkNfcAuthorization = async (serialNumber) => {
    try {
      const docRef = doc(db, 'Toregistered', serialNumber);
      const docSnap = await getDoc(docRef);
      return docSnap.exists();
    } catch (error) {
      console.error('NFC Authorization Check Error:', error);
      return false;
    }
  };

  const resetForm = () => {
    setFormData({
      studentName: '',
      email: '',
      course: '',
      campus: '',
      studentId: ''
    });
    setSelfie(null);
    setStatus('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!('NDEFReader' in window)) {
      updateStatus('NFC is not supported on this device', 'warning');
      return;
    }

    if (!window.confirm('Approach NFC tag to complete registration')) return;

    try {
      const docId = await writeNfcAndSave();
      updateStatus('Registration completed successfully!', 'success');
      setTimeout(() => {
        updateStatus('');
        resetForm();
      }, 3000);
    } catch (error) {
      console.error('Registration Error:', error);
      updateStatus(`Registration failed: ${error.message}`, 'error');
    } finally {
      setIsSaving(false);
      if (nfcReader) {
        nfcReader.abort();
        setNfcReader(null);
      }
    }
  };

  return (
    <div className={styles.container}>
      <h1>Student Registration</h1>
      
      {/* Status Modal */}
      {(!('NDEFReader' in window) || status) && (
        <StatusModal 
          message={!('NDEFReader' in window) ? 'NFC is not supported on this device' : status}
          type={!('NDEFReader' in window) ? 'warning' : statusType}
          isProcessing={isSaving}
        />
      )}
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Student Name"
          value={formData.studentName}
          onChange={(e) => setFormData({...formData, studentName: e.target.value})}
          required
          disabled={isSaving}
        />
        
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
          disabled={isSaving}
        />
        
        <input
          type="text"
          placeholder="Course"
          value={formData.course}
          onChange={(e) => setFormData({...formData, course: e.target.value})}
          required
          disabled={isSaving}
        />

        <input
          type="text"
          placeholder="Student ID"
          value={formData.studentId}
          onChange={(e) => setFormData({...formData, studentId: e.target.value})}
          required
          disabled={isSaving}
        />
        
        <select
          value={formData.campus}
          onChange={(e) => setFormData({...formData, campus: e.target.value})}
          required
          disabled={isSaving}
        >
          <option value="">Select Campus</option>
          <option value="Cainta Campus">Cainta Campus</option>
          <option value="Antipolo Campus">Antipolo Campus</option>
          <option value="San Mateo Campus">San Mateo Campus</option>
          <option value="Binangonan Campus">Binangonan Campus</option>
          <option value="Sumulong Campus">Sumulong Campus</option>
          <option value="Taytay Campus">Taytay Campus</option>
          <option value="Angono Campus">Angono Campus</option>
          <option value="Cogeo Campus">Cogeo Campus</option>
        </select>
        
        {!selfie ? (
          <>
            <input 
              type="file"
              ref={fileInputRef}
              onChange={handleSelfie}
              accept="image/*"
              capture="user"
              style={{display: 'none'}}
              disabled={isSaving}
            />
            <button 
              type="button"
              onClick={() => fileInputRef.current.click()}
              className={styles.selfieButton}
              disabled={isSaving}
            >
              Take Selfie
            </button>
          </>
        ) : (
          <p>Selfie Captured: {selfie.name}</p>
        )}
        
        <button 
          type="submit"
          className={`${styles.submitButton} ${isSaving ? 'animate-pulse' : ''}`}
          disabled={!formData.studentId || !selfie || isSaving || !('NDEFReader' in window)}
        >
          {isSaving ? 'Processing...' : 'Complete Registration with NFC'}
        </button>
      </form>
    </div>
  );
};

export default StudentRegistration;
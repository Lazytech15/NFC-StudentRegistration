import React, { useState, useRef, useEffect } from 'react';
import { initializeApp } from 'firebase/app';

import { 
  getFirestore, doc, getDoc, addDoc, 
  collection, serverTimestamp, updateDoc 
} from 'firebase/firestore';

import { 
  getStorage, ref, uploadBytes, getDownloadURL 
} from 'firebase/storage';

import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    sendEmailVerification 
  } from 'firebase/auth';

import styles from './teacherregistration.module.css';
import Buttons from '../Button/Button.module.css';

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
const auth = getAuth(app);

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

const TeacherRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    campus: '',
    teacherId: '',
    upass: ''
  });

  const [selfie, setSelfie] = useState(null);
  const [uploadOption, setUploadOption] = useState('capture');
  const [isSaving, setIsSaving] = useState(false);
  const [status, setStatus] = useState('');
  const [nfcReader, setNfcReader] = useState(null);
  const [statusType, setStatusType] = useState('info');
  const [nfcSerialNumber, setNfcSerialNumber] = useState(null);
  
  const fileInputRef = useRef(null);
  const existingImageInputRef = useRef(null);

  const updateStatus = (message, type = 'info') => {
    setStatus(message);
    setStatusType(type);
  };

  useEffect(() => {
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

  const handleUploadOptionChange = (option) => {
    setUploadOption(option);
    setSelfie(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (existingImageInputRef.current) existingImageInputRef.current.value = '';
  };

  const uploadSelfie = async () => {
    if (!selfie) return null;
    setStatus('Uploading selfie...');
    const safeEmail = formData.email.replace(/[@.]/g, '_');
    const storageRef = ref(storage, `users/${safeEmail}/profile/${selfie.name}`);
    const snapshot = await uploadBytes(storageRef, selfie);
    return await getDownloadURL(snapshot.ref);
  };

  const registerWithFirebaseAuth = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        formData.email, 
        formData.upass
      );
      
      await sendEmailVerification(userCredential.user);
      
      return userCredential.user;
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          throw new Error('Email is already registered');
        case 'auth/invalid-email':
          throw new Error('Invalid email format');
        case 'auth/weak-password':
          throw new Error('Password is too weak. Use a stronger password');
        default:
          throw error;
      }
    }
  };

  const scanNfcTag = async () => {
    if (!('NDEFReader' in window)) {
      throw new Error('NFC not supported on this device');
    }

    try {
      setStatus('Waiting for NFC tag...');
      const ndef = new NDEFReader();
      setNfcReader(ndef);
      await ndef.scan();

      const serialNumber = await new Promise((resolve, reject) => {
        const handleReading = async (event) => {
          try {
            const nfcSerialNumber = event.serialNumber;
            
            // Check NFC authorization
            const isAuthorized = await checkNfcAuthorization(nfcSerialNumber);
            if (!isAuthorized) {
              reject(new Error('Unauthorized NFC tag'));
              return;
            }

            ndef.removeEventListener("reading", handleReading);
            resolve(nfcSerialNumber);
          } catch (error) {
            reject(error);
          }
        };

        ndef.addEventListener("reading", handleReading);

        setTimeout(() => {
          ndef.removeEventListener("reading", handleReading);
          reject(new Error('NFC tag read timeout'));
        }, 30000);
      });

      setNfcSerialNumber(serialNumber);
      updateStatus('NFC tag detected successfully', 'success');
      return serialNumber;
    } catch (error) {
      updateStatus(error.message, 'error');
      throw error;
    } finally {
      if (nfcReader) {
        nfcReader.abort();
        setNfcReader(null);
      }
    }
  };

  const completeRegistration = async () => {
    try {
      setIsSaving(true);
      setStatus('Authenticating user...');
      
      // Register user with Firebase Authentication
      const firebaseUser = await registerWithFirebaseAuth();
      
      // Upload selfie
      const selfieUrl = await uploadSelfie();
      const position = "Teacher";
      const registrationData = {
        ...formData,
        nfcSerialNumber,
        currentnfcId: '',
        selfieUrl,
        position,
        firebaseUserId: firebaseUser.uid,
        createdAt: serverTimestamp()
      };
  
      // Save to Firestore
      setStatus('Saving to database...');
      const docRef = await addDoc(collection(db, 'RegisteredTeacher'), registrationData);
  
      // Update the document with its own ID
      await updateDoc(docRef, { currentNfcId: docRef.id });

      setStatus('Writing to NFC tag...');
      const ndef = new NDEFReader();
      await ndef.write({
        records: [{
          recordType: "text",
          data: new TextEncoder().encode(docRef.id)
        }]
      });
  
      return docRef.id;
    } catch (error) {
      updateStatus(error.message, 'error');
      throw error;
    } finally {
      setIsSaving(false);
    }
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
      name: '',
      email: '',
      campus: '',
      teacherId: '',
      upass: ''
    });
    setSelfie(null);
    setStatus('');
    setNfcSerialNumber(null);
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

    try {
      // First, scan NFC tag
      await scanNfcTag();

      // Confirm before proceeding
      if (!window.confirm('Do you want to complete the registration?')) {
        setNfcSerialNumber(null);
        return;
      }

      // Then complete registration
      const docId = await completeRegistration();
      updateStatus('Registration completed successfully! Please check your email for verification.', 'success');
      
      setTimeout(() => {
        updateStatus('');
        resetForm();
      }, 5000);
    } catch (error) {
      console.error('Registration Error:', error);
      updateStatus(`Registration failed: ${error.message}`, 'error');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Teacher Registration</h1>

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
          placeholder="Teacher Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
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
          placeholder="Teacher ID"
          value={formData.teacherId}
          onChange={(e) => setFormData({...formData, teacherId: e.target.value})}
          required
          disabled={isSaving}
        />

        <input
          type="text"
          placeholder="Password"
          value={formData.upass}
          onChange={(e) => setFormData({...formData, upass: e.target.value})}
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

        <div className={styles.uploadOptionContainer}>
          <label>
            <input
              type="radio"
              name="uploadOption"
              value="capture"
              checked={uploadOption === 'capture'}
              onChange={() => handleUploadOptionChange('capture')}
              disabled={isSaving}
            />
            Capture Selfie
          </label>
          <label>
            <input
              type="radio"
              name="uploadOption"
              value="upload"
              checked={uploadOption === 'upload'}
              onChange={() => handleUploadOptionChange('upload')}
              disabled={isSaving}
            />
            Upload Existing Image
          </label>
        </div>
        
        {/* Conditional rendering based on upload option */}
        {uploadOption === 'capture' ? (
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
              className={Buttons.buttons}
              disabled={isSaving}
            >
              Take Profile Picture
            </button>
          </>
        ) : (
          <>
            <input 
              type="file"
              ref={existingImageInputRef}
              onChange={handleSelfie}
              accept="image/*"
              style={{display: 'none'}}
              disabled={isSaving}
            />
            <button 
              type="button"
              onClick={() => existingImageInputRef.current.click()}
              className={Buttons.buttons}
              disabled={isSaving}
            >
              Upload Existing Image
            </button>
          </>
        )}
        
        {/* Show selected image name if image is selected */}
        {selfie && (
          <p>
            Selected Image: {selfie.name} 
            <button 
              type="button" 
              onClick={() => setSelfie(null)}
              className={styles.clearImageButton}
              disabled={isSaving}
            >
              Clear
            </button>
          </p>
        )}
        
        <button 
          type="submit"
          className={`${Buttons.buttons} ${isSaving ? 'animate-pulse' : ''}`}
          disabled={!formData.teacherId || !selfie || isSaving || !('NDEFReader' in window)}
        >
          {nfcSerialNumber ? 'Complete Registration' : 'Scan NFC Tag'}
        </button>
      </form>
    </div>
  );
};

export default TeacherRegistration;
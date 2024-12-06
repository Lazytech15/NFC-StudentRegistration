import React, { useState, useRef } from 'react';
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
  
  const fileInputRef = useRef(null);

  const handleSelfie = (e) => {
    const file = e.target.files[0];
    setSelfie(file);
  };

  const uploadSelfie = async () => {
    if (!selfie) return null;
    const safeEmail = formData.email.replace(/[@.]/g, '_');
    const storageRef = ref(storage, `users/${safeEmail}/profile/${selfie.name}`);
    const snapshot = await uploadBytes(storageRef, selfie);
    return await getDownloadURL(snapshot.ref);
  };

  const writeNfcAndSave = async () => {
    // Check for NFC Web API support
    if (!('NDEFReader' in window)) {
      throw new Error('NFC not supported on this device');
    }

    try {
      setIsSaving(true);
      const ndef = new NDEFReader();
      await ndef.scan();

      return new Promise((resolve, reject) => {
        ndef.addEventListener("reading", async ({ serialNumber }) => {
          try {
            const isAuthorized = await checkNfcAuthorization(serialNumber);
            if (!isAuthorized) {
              reject(new Error('Unauthorized NFC tag'));
              return;
            }

            const selfieUrl = await uploadSelfie();
            const registrationData = {
              ...formData,
              nfcSerialNumber: serialNumber,
              selfieUrl,
              createdAt: serverTimestamp()
            };

            const docRef = await addDoc(collection(db, 'RegisteredStudent'), registrationData);

            // Check if NDEFWriter is available before writing
            if ('NDEFWriter' in window) {
              const writer = new NDEFWriter();
              await writer.write({
                records: [{ recordType: "text", data: docRef.id }]
              });
            } else {
              console.warn('NDEFWriter not supported, skipping NFC tag writing');
            }

            resolve(docRef.id);
          } catch (error) {
            reject(error);
          }
        });
      });
    } catch (error) {
      throw error;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check NFC support before confirming
    if (!('NDEFReader' in window)) {
      alert('NFC is not supported on this device');
      return;
    }

    if (!window.confirm('Approach NFC tag to complete registration')) return;

    try {
      const docId = await writeNfcAndSave();
      alert(`Registration successful! Document ID: ${docId}`);
      
      setFormData({
        studentName: '',
        email: '',
        course: '',
        campus: '',
        studentId: ''
      });
      setSelfie(null);
    } catch (error) {
      console.error('Registration Error:', error);
      alert('Registration failed: ' + error.message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Student Registration</h1>
      
      {!('NDEFReader' in window) && (
        <div style={{color: 'red', marginBottom: '15px'}}>
          NFC is not supported on this device
        </div>
      )}
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Student Name"
          value={formData.studentName}
          onChange={(e) => setFormData({...formData, studentName: e.target.value})}
          required
        />
        
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
        
        <input
          type="text"
          placeholder="Course"
          value={formData.course}
          onChange={(e) => setFormData({...formData, course: e.target.value})}
          required
        />
        
        <select
          value={formData.campus}
          onChange={(e) => setFormData({...formData, campus: e.target.value})}
          required
        >
          <option value="">Select Campus</option>
          <option value="Main">Main Campus</option>
          <option value="North">North Campus</option>
          <option value="Online">Online Campus</option>
        </select>

        <input
          type="text"
          placeholder="Student ID"
          value={formData.studentId}
          onChange={(e) => setFormData({...formData, studentId: e.target.value})}
          required
        />
        
        {!selfie ? (
          <>
            <input 
              type="file"
              ref={fileInputRef}
              onChange={handleSelfie}
              accept="image/*"
              capture="user"
              style={{display: 'none'}}
            />
            <button 
              type="button"
              onClick={() => fileInputRef.current.click()}
              className={styles.selfieButton}
            >
              Take Selfie
            </button>
          </>
        ) : (
          <p>Selfie Captured: {selfie.name}</p>
        )}
        
        <button 
          type="submit"
          className={styles.submitButton}
          disabled={!formData.studentId || !selfie || isSaving || !('NDEFReader' in window)}
        >
          {isSaving ? 'Saving...' : 'Complete Registration with NFC'}
        </button>
      </form>
    </div>
  );
};

export default StudentRegistration;
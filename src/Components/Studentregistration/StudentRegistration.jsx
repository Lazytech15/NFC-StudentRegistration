import React, { useState, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  doc, 
  getDoc, 
  addDoc, 
  collection, 
  serverTimestamp 
} from 'firebase/firestore';
import { 
  getStorage, 
  ref, 
  uploadBytes, 
  getDownloadURL 
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
  const [nfcSerial, setNfcSerial] = useState(null);
  const [studentId, setStudentId] = useState(null);
  const [selfie, setSelfie] = useState(null);
  const [isNfcScanning, setIsNfcScanning] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    course: '',
    campus: ''
  });

  const nfcRef = useRef(null);
  const fileInputRef = useRef(null);
  const studentIdRef = useRef(null);

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

  const writeNfcTag = async (documentId) => {
    if ('NDEFWriter' in window) {
      try {
        const writer = new NDEFWriter();
        await writer.write({
          records: [{ recordType: "text", data: documentId }]
        });
        alert('Document ID written to NFC tag successfully');
      } catch (error) {
        alert('NFC Write Error: ' + error);
      }
    } else {
      alert('Web NFC writing not supported');
    }
  };

  const readNfcTag = async () => {
    if ('NDEFReader' in window) {
      try {
        setIsNfcScanning(true);
        const ndef = new NDEFReader();
        await ndef.scan();
        
        ndef.addEventListener("reading", async ({ serialNumber }) => {
          setIsNfcScanning(false);
          const isAuthorized = await checkNfcAuthorization(serialNumber);
          
          if (isAuthorized) {
            setNfcSerial(serialNumber);
          } else {
            alert('NFC tag is not authorized');
          }
        });
      } catch (error) {
        setIsNfcScanning(false);
        alert('NFC Error: ' + error);
      }
    } else {
      alert('Web NFC not supported');
    }
  };

  const handleStudentIdScan = (e) => {
    const file = e.target.files[0];
    setStudentId(file);
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!window.confirm('Confirm registration?')) return;

    try {
      const selfieUrl = await uploadSelfie();

      const registrationData = {
        ...formData,
        nfcSerialNumber: nfcSerial,
        studentId: studentId ? studentId.name : null,
        selfieUrl,
        createdAt: serverTimestamp()
      };

      const docRef = await addDoc(collection(db, 'RegisteredStudent'), registrationData);
      
      // Prompt to write document ID to NFC tag
      if (window.confirm('Approach NFC tag to write document ID')) {
        await writeNfcTag(docRef.id);
      }
      
      alert(`Registration Complete! Document ID: ${docRef.id}`);
      
      // Reset form
      setNfcSerial(null);
      setStudentId(null);
      setSelfie(null);
      setFormData({
        studentName: '',
        email: '',
        course: '',
        campus: ''
      });

    } catch (error) {
      console.error('Registration Error:', error);
      alert('Registration failed');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Student Registration</h1>
      
      {!nfcSerial ? (
        <button 
          onClick={readNfcTag} 
          className={styles.nfcButton}
          disabled={isNfcScanning}
        >
          {isNfcScanning ? 'Scanning...' : 'Scan NFC Tag'}
        </button>
      ) : (
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
          
          {!studentId ? (
            <>
              <input 
                type="file" 
                ref={studentIdRef}
                onChange={handleStudentIdScan}
                accept="image/*"
                capture="environment"
                style={{display: 'none'}}
              />
              <button 
                type="button" 
                onClick={() => studentIdRef.current.click()}
                className={styles.scanButton}
              >
                Scan Student ID
              </button>
            </>
          ) : (
            <p>Student ID: {studentId.name}</p>
          )}
          
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
            disabled={!studentId || !selfie}
          >
            Register
          </button>
        </form>
      )}
    </div>
  );
};

export default StudentRegistration;
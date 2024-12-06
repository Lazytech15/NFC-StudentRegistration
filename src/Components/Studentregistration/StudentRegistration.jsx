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
import { BarcodeScannerComponent } from "@zxing/browser";
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
  const [barcodeData, setBarcodeData] = useState(null);
  const [selfie, setSelfie] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [nfcDocId, setNfcDocId] = useState(null);
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    course: '',
    campus: ''
  });

  const fileInputRef = useRef(null);
  const scannerRef = useRef(null);

  const handleScan = async (result) => {
    if (result) {
      setBarcodeData(result.text);
      setIsScanning(false);
      if (scannerRef.current) {
        await scannerRef.current.stop();
      }
    }
  };

  const startScanning = async () => {
    setIsScanning(true);
    if (scannerRef.current) {
      try {
        await scannerRef.current.start();
      } catch (err) {
        console.error('Scanner Error:', err);
        alert('Failed to start scanner');
        setIsScanning(false);
      }
    }
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

  const writeNfcTag = async (documentId) => {
    if ('NDEFWriter' in window) {
      try {
        const writer = new NDEFWriter();
        await writer.write({
          records: [{ recordType: "text", data: documentId }]
        });
        return true;
      } catch (error) {
        console.error('NFC Write Error:', error);
        return false;
      }
    } else {
      alert('Web NFC writing not supported');
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!window.confirm('Proceed with registration?')) return;

    try {
      const selfieUrl = await uploadSelfie();

      const registrationData = {
        ...formData,
        barcodeData,
        selfieUrl,
        createdAt: serverTimestamp()
      };

      const docRef = await addDoc(collection(db, 'RegisteredStudent'), registrationData);
      setNfcDocId(docRef.id);
      
      alert('Please tap NFC tag to complete registration');
      
      const nfcWriteSuccess = await writeNfcTag(docRef.id);
      
      if (nfcWriteSuccess) {
        alert('Registration complete!');
        // Reset form
        setBarcodeData(null);
        setSelfie(null);
        setNfcDocId(null);
        setFormData({
          studentName: '',
          email: '',
          course: '',
          campus: ''
        });
      } else {
        alert('NFC write failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration Error:', error);
      alert('Registration failed');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Student Registration</h1>
      
      {!barcodeData ? (
        <div>
          {isScanning && (
            <BarcodeScannerComponent
              ref={scannerRef}
              onResult={handleScan}
              constraints={{
                facingMode: 'environment'
              }}
            />
          )}
          <button 
            onClick={startScanning}
            className={styles.scanButton}
            disabled={isScanning}
          >
            {isScanning ? 'Scanning...' : 'Scan Student ID'}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <p>Student ID: {barcodeData}</p>
          
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
            disabled={!selfie}
          >
            Register
          </button>
        </form>
      )}
    </div>
  );
};

export default StudentRegistration;
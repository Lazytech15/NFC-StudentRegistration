import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  query, 
  where, 
  getDocs 
} from "firebase/firestore";

import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut, 
  GoogleAuthProvider, 
  signInWithPopup,
  deleteUser 
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8tDVbDIrKuylsyF3rbDSSPlzsEHXqZIs",
  authDomain: "online-attendance-21f95.firebaseapp.com",
  databaseURL: "https://online-attendance-21f95-default-rtdb.firebaseio.com",
  projectId: "online-attendance-21f95",
  storageBucket: "online-attendance-21f95.appspot.com",
  messagingSenderId: "756223518392",
  appId: "1:756223518392:web:5e8d28c78f7eefb8be764d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
const db = getFirestore(app);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [nfcSupported, setNfcSupported] = useState(false);
  const [nfcReader, setNfcReader] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if NFC is supported
    const checkNFCSupport = async () => {
      if ('NDEFReader' in window) {
        try {
          const reader = new window.NDEFReader();
          await reader.scan();
          setNfcSupported(true);
          setNfcReader(reader);
          
          // Set up NFC reading handler
          reader.onreading = async ({ message, serialNumber }) => {
            try {
              const role = await checkUserRoleByNFC(message);
              
              if (role) {
                localStorage.setItem('userRole', role);
                navigate('/dashboard');
              } else {
                setError('NFC card is not registered in the system.');
              }
            } catch (err) {
              console.error('Error processing NFC card:', err);
              setError('Failed to process NFC card.');
            }
          };
          
          reader.onerror = (error) => {
            console.error('NFC read error:', error);
            setError('Error reading NFC card.');
          };
          
        } catch (err) {
          console.error('Error setting up NFC:', err);
          setNfcSupported(false);
        }
      } else {
        setNfcSupported(false);
      }
    };

    checkNFCSupport();

    // Cleanup function
    return () => {
      if (nfcReader) {
        // Clean up NFC reader if necessary
        nfcReader.removeAllListeners?.();
      }
    };
  }, []);

  const checkUserRoleByNFC = async (nfcId) => {
    try {
      // Check in RegisteredAdmin collection
      const adminQuery = query(
        collection(db, "RegisteredAdmin"),
        where("currentnfcId", "==", nfcId)
      );
      const adminSnapshot = await getDocs(adminQuery);
      if (!adminSnapshot.empty) {
        return 'admin';
      }

      // Check in RegisteredTeacher collection
      const teacherQuery = query(
        collection(db, "RegisteredTeacher"),
        where("currentnfcId", "==", nfcId)
      );
      const teacherSnapshot = await getDocs(teacherQuery);
      if (!teacherSnapshot.empty) {
        return 'teacher';
      }

      // Check in RegisteredStudent collection
      const studentQuery = query(
        collection(db, "RegisteredStudent"),
        where("currentnfcId", "==", nfcId)
      );
      const studentSnapshot = await getDocs(studentQuery);
      if (!studentSnapshot.empty) {
        return 'student';
      }

      return null;
    } catch (error) {
      console.error("Error checking user role by NFC:", error);
      return null;
    }
  };

  const checkUserRole = async (userEmail) => {
    try {
      // Check in RegisteredAdmin collection
      const adminQuery = query(
        collection(db, "RegisteredAdmin"),
        where("email", "==", userEmail)
      );
      const adminSnapshot = await getDocs(adminQuery);
      if (!adminSnapshot.empty) {
        return 'admin';
      }

      // Check in RegisteredTeacher collection
      const teacherQuery = query(
        collection(db, "RegisteredTeacher"),
        where("email", "==", userEmail)
      );
      const teacherSnapshot = await getDocs(teacherQuery);
      if (!teacherSnapshot.empty) {
        return 'teacher';
      }

      // Check in RegisteredStudent collection
      const studentQuery = query(
        collection(db, "RegisteredStudent"),
        where("email", "==", userEmail)
      );
      const studentSnapshot = await getDocs(studentQuery);
      if (!studentSnapshot.empty) {
        return 'student';
      }

      return null;
    } catch (error) {
      console.error("Error checking user role:", error);
      return null;
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const role = await checkUserRole(userCredential.user.email);
      
      if (role) {
        localStorage.setItem('userRole', role);
        navigate('/dashboard');
      } else {
        await signOut(auth);
        alert('Access denied. You are not registered as an admin, teacher, or student.');
        setError('Access denied. Please contact your administrator.');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const role = await checkUserRole(result.user.email);
      
      if (role) {
        localStorage.setItem('userRole', role);
        navigate('/dashboard');
      } else {
        await signOut(auth);
        alert('Access denied. You are not registered as an admin, teacher, or student.');
        setError('Access denied. Please contact your administrator.');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_card}>
        <h1 className={styles.login_title}>Login</h1>
        
        {nfcSupported && (
          <div className={styles.nfc_status}>
            <p>NFC is enabled. Tap your card to login.</p>
          </div>
        )}
        
        <form onSubmit={handleEmailLogin} className={styles.login_form}>
          <div className={styles.form_group}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.login_input}
            />
          </div>
          
          <div className={styles.form_group}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.login_input}
            />
          </div>
          
          {error && (
            <div className={styles.error_message}>
              {error}
            </div>
          )}
          
          <button 
            type="submit" 
            className={styles.login_button}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className={styles.divider}>
          <span>Or continue with</span>
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading}
          className={styles.google_button}
        >
          <svg className={styles.google_icon} viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
            />
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
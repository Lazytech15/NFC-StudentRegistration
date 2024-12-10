import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Dashboard.module.css';
import { 
  User, 
  LayoutDashboard, 
  Calendar, 
  Archive, 
  Users, 
  Cpu, 
  FolderOpen, 
  LogOut,
  ClipboardList,
  Menu,
  X 
} from 'lucide-react';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC8tDVbDIrKuylsyF3rbDSSPlzsEHXqZIs",
  authDomain: "online-attendance-21f95.firebaseapp.com",
  databaseURL: "https://online-attendance-21f95-default-rtdb.firebaseio.com",
  projectId: "online-attendance-21f95",
  storageBucket: "online-attendance-21f95.appspot.com",
  messagingSenderId: "756223518392",
  appId: "1:756223518392:web:5e8d28c78f7eefb8be764d"
};

import { getAuth, signOut } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Sidebar = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => { 
    const unsubscribe = auth.onAuthStateChanged(async (user) => { 
      setCurrentUser(user); 
      if (user) { const email = user.email; 
        const userData = await fetchUserData(email); 
        setUserData(userData);
        navigate('/dashboard', { state: { userData } });
      } 
    }); 
    return () => unsubscribe(); 
  }, []);
  
  const fetchUserData = async (email) => { 
    try { 
      // Check in RegisteredAdmin collection 
      const adminQuery = query( collection(db, "RegisteredAdmin"), where("email", "==", email) ); 
      const adminSnapshot = await getDocs(adminQuery); 
      if (!adminSnapshot.empty) { 
        return adminSnapshot.docs[0].data(); 
      } // Check in RegisteredTeacher collection 
      const teacherQuery = query( collection(db, "RegisteredTeacher"), where("email", "==", email) ); 
      const teacherSnapshot = await getDocs(teacherQuery); 
      if (!teacherSnapshot.empty) { 
        return teacherSnapshot.docs[0].data(); 
      } // Check in RegisteredStudent collection 
      const studentQuery = query( collection(db, "RegisteredStudent"), where("email", "==", email) ); 
      const studentSnapshot = await getDocs(studentQuery); 
      if (!studentSnapshot.empty) { 
        return studentSnapshot.docs[0].data(); 
      } return null; 
      } catch (error) { 
        console.error("Error fetching user data:", error); 
        return null; 
      } 
    };

    const handleCreateEventClick = () => {
      if (userData) {
        navigate('/dashboard/create-event', { state: { userData } });
        setIsOpen(false); // Close sidebar on mobile after navigation
      }
    };

    const handleDashboardClick = () => { 
      setIsOpen(false); 
      navigate('/dashboard', { state: { userData } }); 
    };

    const handleFileManagerClick = () => { 
      setIsOpen(false); 
      // logFileManagerClick(); 
      navigate('/dashboard/file-manager', { state: { userData } 
      }); 
    };
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    const handleSignOut = async () => { const auth = getAuth();
      // Initialize navigate 
      try { 
        await signOut(auth); 
        console.log('User signed out successfully'); 
        navigate('/login'); 
        // Redirect to login page 
        } catch (error) 
        { 
          console.error('Error signing out:', error);
        } 
      };

  // Mock data - replace with actual data
  const students = [
    "Alice Smith",
    "Bob Johnson",
    "Carol Williams",
    "David Brown",
    "Eve Davis"
  ];

  const teachers = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Davis"
  ];

  const scanners = [
    "Scanner-001",
    "Scanner-002",
    "Scanner-003"
  ];

  return (
    <>
      <button className={styles.hamburgerBtn} onClick={toggleSidebar}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
      <div className={styles.profileSection}>
        {currentUser && userData && (
          <>
            <div className={styles.avatar}>
              <img src={currentUser.photoURL || userData.selfieUrl} alt="Profile" />
            </div>
            <div className={styles.userInfo}>
              <h3>{userData.name}</h3>
              <p>{currentUser.email}</p>
              <br />
              <span>{userData.position}</span>
            </div>
          </>
        )}
      </div>


      {/* Navigation Items */}
      <nav className={styles.navigation}>
      <ul className={styles.navList}>
          <li className={styles.navItem}> 
            <div className={styles.navLink} onClick={handleDashboardClick}> 
              <LayoutDashboard size={20} /> 
              <span>Dashboard</span> 
              </div> 
          </li>

          <li className={styles.navItem}>
            <div onClick={handleCreateEventClick} className={styles.navLink} style={{ cursor: 'pointer' }} >
              <Calendar size={20} />
              <span>Create Event</span>
            </div>
          </li>

          <Link to="/dashboard/event-list" className={styles.navLink} onClick={() => setIsOpen(false)}>
          <ClipboardList size={20} />
            <span>Event List</span>
          </Link>

          <li className={styles.navItem}>
            <a href="#" className={styles.navLink} onClick={() => setIsOpen(false)}>
              <Archive size={20} />
              <span>Archive</span>
            </a>
          </li>

          <li className={styles.navItem}>
            <a href="#" className={styles.navLink} onClick={() => setIsOpen(false)}>
              <Users size={20} />
              <span>Registered Students</span>
            </a>
            <ul className={styles.dropdown}>
              {students.map((student, index) => (
                <li key={index} className={styles.dropdownItem}>
                  {student}
                </li>
              ))}
            </ul>
          </li>

          <li className={styles.navItem}>
            <a href="#" className={styles.navLink} onClick={() => setIsOpen(false)}>
              <Users size={20} />
              <span>Registered Teacher</span>
            </a>
            <ul className={styles.dropdown}>
              {teachers.map((teacher, index) => (
                <li key={index} className={styles.dropdownItem}>
                  {teacher}
                </li>
              ))}
            </ul>
          </li>

          <li className={styles.navItem}>
            <Link to="/dashboard/teacher-registration" className={styles.navLink} onClick={() => setIsOpen(false)}>
              <Users size={20} />
              <span>Teacher Registration</span>
            </Link>
          </li>

          <li className={styles.navItem}>
            <Link to="/dashboard/student-registration" className={styles.navLink} onClick={() => setIsOpen(false)}>
              <Users size={20} />
              <span>Student Registration</span>
            </Link>
          </li>

          <li className={styles.navItem}>
            <Link to="/dashboard/nfc-reader" className={styles.navLink} onClick={() => setIsOpen(false)}>
              <Cpu size={20} />
              <span>NFC Reader</span>
            </Link>
          </li>

          <li className={styles.navItem}>
            <a href="#" className={styles.navLink} onClick={() => setIsOpen(false)}>
              <Cpu size={20} />
              <span>ESP32 NFC Scanners</span>
            </a>
            <ul className={styles.dropdown}>
              {scanners.map((scanner, index) => (
                <li key={index} className={styles.dropdownItem}>
                  {scanner}
                </li>
              ))}
            </ul>
          </li>

          <li className={styles.navItem}> 
              <div className={styles.navLink} onClick={handleFileManagerClick}> 
                <FolderOpen size={20} /> 
                <span>File Manager</span> 
              </div> 
            </li>

        </ul>
      </nav>

      {/* Logout Button */}
      <button className={styles.logoutBtn} onClick={handleSignOut}>
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </div>
    {isOpen && <div className={styles.overlay} onClick={toggleSidebar} />}
    </>
  );
};

export default Sidebar;
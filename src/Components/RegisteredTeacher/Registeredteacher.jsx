import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Users } from 'lucide-react';
import styles from './Registeredteacher.module.css';

const RegisteredTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRegisteredTeachers = async () => {
      try {
        const db = getFirestore();
        const teachersSnapshot = await getDocs(collection(db, "RegisteredTeacher"));
        const teachersList = teachersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setTeachers(teachersList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching registered teachers:", error);
        setError("Failed to load teachers");
        setLoading(false);
      }
    };

    fetchRegisteredTeachers();
  }, []);

  if (loading) {
    return <div className={styles.loadingContainer}>Loading teachers...</div>;
  }

  if (error) {
    return <div className={styles.errorContainer}>{error}</div>;
  }

  return (
    <div className={styles.registeredUsersContainer}>
      <div className={styles.header}>
        <Users size={24} />
        <h2>Registered Teachers</h2>
      </div>

      <div className={styles.tableContainer}>
      <table className={styles.usersTable}>
        <thead>
          <tr>
            <th>Teacher ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>NFC CARD</th>
            <th>Campus</th>
            <th>Date Added</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.teacherId}</td>
              <td>{teacher.name}</td>
              <td>{teacher.email}</td>
              <td>{teacher.currentnfcId}</td>
              <td>{teacher.campus}</td>
              <td>{new Date(teacher.createdAt * 1000).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      {teachers.length === 0 && (
        <div className={styles.noUsersContainer}>
          No registered teachers found.
        </div>
      )}
    </div>
  );
};

export default RegisteredTeachers;
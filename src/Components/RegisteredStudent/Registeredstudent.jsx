import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Users } from 'lucide-react';
import styles from './Registeredstudent.module.css';

const RegisteredStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRegisteredStudents = async () => {
      try {
        const db = getFirestore();
        const studentsSnapshot = await getDocs(collection(db, "RegisteredStudent"));
        const studentsList = studentsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setStudents(studentsList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching registered students:", error);
        setError("Failed to load students");
        setLoading(false);
      }
    };

    fetchRegisteredStudents();
  }, []);

  if (loading) {
    return <div className={styles.loadingContainer}>Loading students...</div>;
  }

  if (error) {
    return <div className={styles.errorContainer}>{error}</div>;
  }

  return (
    <div className={styles.registeredUsersContainer}>
      <div className={styles.header}>
        <Users size={24} />
        <h2>Registered Students</h2>
      </div>

      <div className={styles.tableContainer}>
      <table className={styles.usersTable}>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>NFC CARD</th>
            <th>Campus</th>
            <th>Date Added</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.studentId}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.currentnfcId}</td>
              <td>{student.campus}</td>
              <td>{new Date(student.createdAt * 1000).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      {students.length === 0 && (
        <div className={styles.noUsersContainer}>
          No registered students found.
        </div>
      )}
    </div>
  );
};

export default RegisteredStudents;
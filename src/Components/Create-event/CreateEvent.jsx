import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getFirestore, collection, addDoc, updateDoc } from 'firebase/firestore';
import styles from './CreateEvent.module.css';

const CreateEvent = () => {
  // State for form fields
  const location = useLocation();
  const { userData } = location.state || {};
  const db = getFirestore();
  
  // Existing state declarations
  const [eventName, setEventName] = useState('');
  const [entryLimit, setEntryLimit] = useState('unlimited');
  const [maxEntries, setMaxEntries] = useState('');
  const [locations, setLocation] = useState('');
  const [purpose, setPurpose] = useState('event');
  const [selectedEsp32, setSelectedEsp32] = useState('');
  const [status, setStatus] = useState('pending');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');

  // Mock data for ESP32 devices
  const esp32Devices = ['ESP32-001', 'ESP32-002', 'ESP32-003'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Create the event data without the docId
      const eventData = {
        eventName,
        entryLimit,
        maxEntries: entryLimit === 'limited' ? parseInt(maxEntries) : null,
        locations,
        purpose,
        selectedEsp32,
        status,
        startDate,
        startTime,
        endDate,
        endTime,
        creatorNfcId: userData?.currentnfcId || null,
        createdAt: new Date().toISOString(),
        createdBy: userData?.email || null,
        name: userData?.name || null
      };

      const docRef = await addDoc(collection(db, "PendingEvent"), eventData);
      await updateDoc(docRef, { docId: docRef.id });
      console.log("Event created with ID: ", docRef.id);
      alert("Event created successfully!");
      resetForm();
    } catch (error) {
      console.error("Error creating event: ", error);
      alert("Error creating event. Please try again.");
    }
  };
  

  const resetForm = () => {
    setEventName('');
    setEntryLimit('unlimited');
    setMaxEntries('');
    setLocation('');
    setPurpose('event');
    setSelectedEsp32('');
    setStatus('pending');
    setStartDate('');
    setStartTime('');
    setEndDate('');
    setEndTime('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>Create New Event</h2>
        </div>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Event Name</label>
              <input 
                type="text" 
                className={styles.input}
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                placeholder="Enter event name" 
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Entry Limit</label>
              <select 
                className={styles.select}
                value={entryLimit}
                onChange={(e) => setEntryLimit(e.target.value)}
              >
                <option value="unlimited">Unlimited</option>
                <option value="limited">Limited</option>
              </select>
            </div>

            {entryLimit === 'limited' && (
              <div className={styles.formGroup}>
                <label className={styles.label}>Maximum Entries</label>
                <input
                  type="number"
                  className={styles.input}
                  value={maxEntries}
                  onChange={(e) => setMaxEntries(e.target.value)}
                  placeholder="Enter maximum entries"
                />
              </div>
            )}

            <div className={styles.formGroup}>
              <label className={styles.label}>Location</label>
              <input
                type="text"
                className={styles.input}
                value={locations}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Purpose</label>
              <select 
                className={styles.select}
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
              >
                <option value="event">Event Attendance</option>
                <option value="membership">Membership Attendance</option>
                <option value="room">Room Attendance</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>ESP32 Device</label>
              <select 
                className={styles.select}
                value={selectedEsp32}
                onChange={(e) => setSelectedEsp32(e.target.value)}
              >
                {esp32Devices.map((device) => (
                  <option key={device} value={device}>
                    {device}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Status</label>
              <select 
                className={styles.select}
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
                <option value="pause">Pause</option>
                <option value="continued">Continued</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Start Date</label>
              <input
                type="date"
                className={styles.input}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Start Time</label>
              <input
                type="time"
                className={styles.input}
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>End Date</label>
              <input
                type="date"
                className={styles.input}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>End Time</label>
              <input
                type="time"
                className={styles.input}
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </div>
          
          <button type="submit" className={styles.button}>
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getFirestore, collection, addDoc, updateDoc } from 'firebase/firestore';
import styles from './CreateEvent.module.css';
import Buttons from '../Button/Button.module.css';

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
                name="Entry Limit"
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
                name="Purpose"
                onChange={(e) => setPurpose(e.target.value)}
              >
                <option value="event" name="Purpose">Event Attendance</option>
                <option value="membership" name="Purpose">Membership Attendance</option>
                <option value="room" name="Purpose">Room Attendance</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>ESP32 Device</label>
              <select 
                className={styles.select}
                value={selectedEsp32}
                name="ESP32 Device"
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
                name="Status"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="pending" name="Status">Pending</option>
                <option value="ongoing" name="Status">Ongoing</option>
                <option value="completed" name="Status">Completed</option>
                <option value="pause" name="Status">Pause</option>
                <option value="continued" name="Status">Continued</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Start Date</label>
              <input
                type="date"
                className={styles.input}
                value={startDate}
                name="Start Date"
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Start Time</label>
              <input
                type="time"
                className={styles.input}
                value={startTime}
                name="Start Time"
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>End Date</label>
              <input
                type="date"
                className={styles.input}
                value={endDate}
                name="End Date"
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>End Time</label>
              <input
                type="time"
                className={styles.input}
                value={endTime}
                name="End Time"
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </div>
          
          <button type="submit" className={Buttons.buttons} name="Create Event Submit">
            <span>Create Event</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
import React, { useState, useEffect } from 'react';
import { getFirestore, collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Edit2, Trash2, ChevronDown, ChevronUp, Image as ImageIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import styles from './Eventlist.module.css'

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);
  const navigate = useNavigate();
  const db = getFirestore();
  const auth = getAuth();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const user = auth.currentUser;
      if (!user) return;
      const eventsRef = collection(db, 'PendingEvent');
      const q = query(eventsRef, where('createdBy', '==', user.email));
      const querySnapshot = await getDocs(q);
      
      const eventsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setEvents(eventsData);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    
    // Check if it's a Firestore Timestamp
    if (timestamp.toDate) {
      return timestamp.toDate().toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
      });
    }
    
    // If it's a regular date string or timestamp
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
  };

  const handleEdit = (eventId) => {
    navigate(`/dashboard/edit-event/${eventId}`);
  };

  const handleDelete = async (eventId) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        await deleteDoc(doc(db, 'events', eventId));
        fetchEvents(); // Refresh the list
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    }
  };

  const toggleExpand = (eventId) => {
    setExpandedCard(expandedCard === eventId ? null : eventId);
  };

  return (
    <div className={styles.event_list_container}>
      <h2>Event List</h2>
      <div className={styles.events_grid}>
        {events.map((event) => (
          <div key={event.id} className={`${styles.event_card} ${expandedCard === event.id ? 'expanded' : ''}`}>
            <div className={styles.card_header} onClick={() => toggleExpand(event.id)}>
            <div className={styles.card_image_container}>
                {event.imageUrl ? (
                  <img 
                    src={event.imageUrl} 
                    alt={event.eventName} 
                    className={styles.card_image} 
                  />
                ) : (
                  <div className={styles.card_image_placeholder}>
                    <ImageIcon size={40} />
                    <span>No Image</span>
                  </div>
                )}
              </div>
              <div className={styles.card_basic_info}>
                <h3>{event.eventName}</h3>
                <p>ID: {event.id}</p>
                <p>Created: {formatDate(event.createdAt)}</p>
              </div>
              {expandedCard === event.id ? <ChevronUp /> : <ChevronDown />}
            </div>

            {expandedCard === event.id && (
              <div className={styles.card_details}>
                <div className={styles.event_info}>
                  <p><strong>Location:</strong> {event.locations}</p>
                  <p><strong>Description:</strong> {event.description}</p>
                  <p><strong>Start Time:</strong> {event.startTime}</p>
                  <p><strong>End Time:</strong> {event.endTime}</p>
                </div>

                <div className={styles.table_container}>
                  <table>
                    <thead>
                      <tr>
                        <th>STUDENT ID</th>
                        <th>STUDENT NAME</th>
                        <th>COURSE</th>
                        <th>CAMPUS</th>
                        <th>DATE</th>
                        <th>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {event.attendees?.map((attendee, index) => (
                        <tr key={index}>
                          <td>{attendee.studentId}</td>
                          <td>{attendee.name}</td>
                          <td>{attendee.course}</td>
                          <td>{attendee.campus}</td>
                          <td>{formatDate(attendee.dateAttended)}</td>
                          <td className="action-buttons">
                            <button onClick={() => handleEdit(event.id)} className={styles.edit_btn}>
                              <Edit2 size={16} />
                            </button>
                            <button onClick={() => handleDelete(event.id)} className={styles.delete_btn}>
                              <Trash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
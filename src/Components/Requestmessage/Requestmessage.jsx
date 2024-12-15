import React, { useState, useEffect } from 'react';
import { Send, X, Paperclip, Mail, Inbox, ExternalLink, Trash } from 'lucide-react';
import styles from './Requestmessage.module.css';
import { getFirestore, collection, query, where, getDocs, addDoc, serverTimestamp, doc, updateDoc, or } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const RequestForm = ({ onClose }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [showCompose, setShowCompose] = useState(false);
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [currentFolder, setCurrentFolder] = useState('inbox');
  const [formData, setFormData] = useState({
    to: '',
    subject: '',
    message: '',
    attachment: null
  });

  const db = getFirestore();
  const auth = getAuth();

  useEffect(() => {
    fetchMessages();
  }, [currentFolder]);

  const fetchMessages = async () => {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) return;
  
      const messagesRef = collection(db, 'Messages');
      let q;
      
      if (currentFolder === 'inbox') {
        q = query(messagesRef, where('sendTo', '==', currentUser.email));
      } else {
        q = query(messagesRef, where('sender', '==', currentUser.email));
      }
      
      const querySnapshot = await getDocs(q);
      
      const fetchedMessages = [];
      querySnapshot.forEach((doc) => {
        fetchedMessages.push({ id: doc.id, ...doc.data() });
      });
  
      // Sort messages by timestamp in descending order
      fetchedMessages.sort((a, b) => b.timestamp?.toMillis() - a.timestamp?.toMillis());
      setMessages(fetchedMessages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };
  
  const handleToread = async (messageId) => {
    try {
      const messageRef = doc(db, 'Messages', messageId);
      await updateDoc(messageRef, {
        read: true
      });
      console.log('Message marked as read');
    } catch (error) {
      console.error('Error updating message:', error);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) return;

      await addDoc(collection(db, 'Messages'), {
        sendTo: formData.to,
        subject: formData.subject,
        message: formData.message,
        sender: currentUser.email,
        timestamp: serverTimestamp(),
        read: false
      });

      // Reset form and fetch updated messages
      setFormData({
        to: '',
        subject: '',
        message: '',
        attachment: null
      });
      setShowCompose(false);
      fetchMessages();
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      attachment: e.target.files[0]
    }));
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate();
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  return (
    <>
      <div className={`${styles.formOverlay} ${isMinimized ? '' : styles.visible}`} onClick={onClose} />
      <div className={`${styles.composeWrapper} ${isMinimized ? styles.minimized : ''}`}>
        {/* Header */}
        <div className={styles.composeHeader}>
          <h2 className={styles.headerTitle}>Messages</h2>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Sidebar */}
          <div className={styles.sidebar}>
            <button 
              className={styles.composeBtn}
              onClick={() => {
                setShowCompose(true);
                setSelectedMessage(null);
              }}
            >
              <Mail /> Compose
            </button>
            <div className={styles.sidebarMenu}>
              <button 
                className={`${styles.menuItem} ${currentFolder === 'inbox' && !showCompose ? styles.active : ''}`}
                onClick={() => {
                  setShowCompose(false);
                  setSelectedMessage(null);
                  setCurrentFolder('inbox');
                }}
              >
                <Inbox /> Inbox ({messages.filter(m => m.sendTo === auth.currentUser?.email).length})
              </button>
              <button 
                className={`${styles.menuItem} ${currentFolder === 'sent' && !showCompose ? styles.active : ''}`}
                onClick={() => {
                  setShowCompose(false);
                  setSelectedMessage(null);
                  setCurrentFolder('sent');
                }}
              >
                <ExternalLink /> Sent ({messages.filter(m => m.sender === auth.currentUser?.email).length})
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className={styles.contentArea}>
            {showCompose ? (
              // Compose Form
              <form onSubmit={handleSubmit} className={styles.composeForm}>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="to"
                    value={formData.to}
                    onChange={handleChange}
                    placeholder="To"
                    className={styles.formInput}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className={styles.formInput}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your request here..."
                    className={styles.messageInput}
                    required
                  />
                </div>

                <div className={styles.formFooter}>
                  <div className={styles.footerActions}>
                    <button type="submit" className={styles.sendButton}>
                      <Send className={styles.sendIcon} />
                      Send
                    </button>
                    
                    <label className={styles.attachButton}>
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className={styles.fileInput}
                      />
                      <Paperclip className={styles.attachIcon} />
                    </label>
                  </div>

                  {formData.attachment && (
                    <span className={styles.attachmentName}>
                      {formData.attachment.name}
                    </span>
                  )}
                </div>
              </form>
            ) : selectedMessage ? (
              // Message View
              <div className={styles.messageView}>
                <div className={styles.messageHeader}>
                  <h3>{selectedMessage.subject}</h3>
                  <span className={styles.messageDate}>{formatDate(selectedMessage.timestamp)}</span>
                </div>
                <div className={styles.messageMeta}>
                  <span>From: {selectedMessage.sender}</span>
                  <span>To: {selectedMessage.sendTo}</span>
                </div>
                <div className={styles.messageBody}>
                  {selectedMessage.message}
                </div>
              </div>
            ) : (
              // Message List
              <div className={styles.messageList}>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`${styles.messageItem} ${!message.read && currentFolder === 'inbox' ? styles.unread : ''}`}
                    onClick={() => {
                      setSelectedMessage(message);
                      if (currentFolder === 'inbox') {
                        handleToread(message.id);
                      }
                    }}                      
                  >
                    <div className={styles.messagePreview}>
                      <span className={styles.sender}>
                        {currentFolder === 'inbox' ? message.sender : message.sendTo}
                      </span>
                      <span className={styles.subject}>{message.subject}</span>
                      <span className={styles.timestamp}>{formatDate(message.timestamp)}</span>
                    </div>
                    <div className={styles.messageSnippet}>
                      {message.message.substring(0, 100)}...
                    </div>
                  </div>
                ))}
                {messages.length === 0 && (
                  <div className={styles.noMessages}>
                    No messages in your {currentFolder}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestForm;
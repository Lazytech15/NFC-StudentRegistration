import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import CreateEvent from './Components/Create-event/CreateEvent';
import StudentRegistration from './Components/Studentregistration/StudentRegistration';
import NFCReader from './Components/NFC-Reader/Nfcreader';
import Login from './Components/Login/Login.jsx';
import EventList from './Components/Eventlist/Eventlist.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="create-event" element={<CreateEvent />} />
          <Route path="student-registration" element={<StudentRegistration />} />
          <Route path="nfc-reader" element={<NFCReader />} />
          <Route path="event-list" element={<EventList />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import CreateEvent from './Components/Create-event/CreateEvent';
import StudentRegistration from './Components/Studentregistration/StudentRegistration';
import NFCReader from './Components/NFC-Reader/Nfcreader';
import Login from './Components/Login/Login.jsx';
import EventList from './Components/Eventlist/Eventlist.jsx'; // Add this import

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to dashboard */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Main routes */}
        <Route path="/login" element={<Login />} />
        {/* Nested routes within Dashboard */}
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="create-event" element={<CreateEvent />} />
          <Route path="student-registration" element={<StudentRegistration />} />
          <Route path="nfc-reader" element={<NFCReader />} />
          <Route path="event-list" element={<EventList />} /> {/* Add this route */}
        </Route>

        {/* Catch all route for 404 */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
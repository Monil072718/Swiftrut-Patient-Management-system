import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import ForgotPassword from './components/auth/ForgotPassword';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import DoctorAppointment from './components/Docoter/DoctorAppointment';

function App() {
  return (
    <Router>
      {/* Uncomment Navbar if you want it on all pages */}
      {/* <Navbar /> */}

      <div className="min-h-screen flex flex-col">
        <Routes>
          {/* Define all routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointment-management" element={<DoctorAppointment  />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

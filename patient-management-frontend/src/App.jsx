import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Login from './components/Admin/auth/Login';
import Signup from './components/Admin/auth/Signup';
import ForgotPassword from './components/Admin/auth/ForgotPassword';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import EditProfile from './pages/Admin/EditProfile';
import ChangePassword from './pages/Admin/ChangePassword';
import Profile from './pages/Admin/Profile';
import PrivacyPolicy from './pages/Admin/PrivacyPolicy';
import TermsCondition from './pages/Admin/TermsCondition';
// import './styles/Navbar.css'; // Import the Navbar CSS

function App() {
  return (
    <Router>
      <Navbar /> {/* Include Navbar on all pages */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />  
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
      </Routes>
    </Router>
  );
}

export default App;

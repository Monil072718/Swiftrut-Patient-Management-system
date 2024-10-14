import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Login from './components/Admin/auth/Login';
import Signup from './components/Admin/auth/Signup';
import ForgotPassword from './components/Admin/auth/ForgotPassword';
import Dashboard from './pages/Dashboard';
import EditProfile from './pages/Admin/EditProfile';
import ChangePassword from './pages/Admin/ChangePassword';
import Profile from './pages/Admin/Profile';
import PrivacyPolicy from './pages/Admin/PrivacyPolicy';
import TermsCondition from './pages/Admin/TermsCondition';
import DoctorAppointment from './components/Docoter/DoctorAppointment';
import SearchResult from './pages/Admin/SearchResult';
import DoctorManagement from './pages/Admin/DoctorManagement';
// import DoctorOnsite from './pages/Admin/DoctorOnSite';
import DoctorOnSite from './pages/Admin/DoctorOnSite';
import AddNewDoctor from './pages/Admin/AddNewDoctor';
import Invoice from './pages/Admin/Invoice';

function App() {
  return (
    <Router>
      {/* <Navbar />  */}
      <Routes>

        {/* Admin */}

        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />  
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
        {/* <Route path="/appointment" element={<DoctorAppointment />} /> */}
        <Route path="/search" element={<SearchResult />} />
        <Route path="/doctormanagement" element={<DoctorManagement />} />
        <Route path="/onsite" element={<DoctorOnSite />} />
        <Route path="/addnewdoctor" element={<AddNewDoctor />} />
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Login from './components/AdminPanel/auth/Login';
import Signup from './components/AdminPanel/auth/Signup';
import ForgotPassword from './components/AdminPanel/auth/ForgotPassword';
import Dashboard from './pages/Dashboard';
import EditProfile from './components/AdminPanel/Admin/EditProfile';
import ChangePassword from './components/AdminPanel/Admin/ChangePassword';
import Profile from './components/AdminPanel/Admin/Profile';
import PrivacyPolicy from './components/AdminPanel/Admin/PrivacyPolicy';
import TermsCondition from './components/AdminPanel/Admin/TermsCondition';
import DoctorAppointment from './components/Docoter/DoctorAppointment';
import SearchResult from './components/AdminPanel/Admin/SearchResult';
import DoctorManagement from './components/AdminPanel/Admin/DoctorManagement';
import DoctorOnSite from './components/AdminPanel/Admin/DoctorOnSite';
import AddNewDoctor from './components/AdminPanel/Admin/AddNewDoctor';
import Invoice from './components/AdminPanel/Admin/Invoice';
import Patient from './components/AdminPanel/PatientManagement/Patient';
import Billing from './components/AdminPanel/BillingAndPayment/Billing';
import CreateBill from './components/AdminPanel/BillingAndPayment/CreateBill';
import PatientAppointment from './components/Patients/PatientAppointment';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        {/* Admin Routes */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/appointment" element={<DoctorAppointment />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/doctormanagement" element={<DoctorManagement />} />
        <Route path="/onsite" element={<DoctorOnSite />} />
        <Route path="/addnewdoctor" element={<AddNewDoctor />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/createbill" element={<CreateBill />} />
        <Route path="/patient-appoitment" element={<PatientAppointment />} />
      </Routes>
    </Router>
  );
}

export default App;

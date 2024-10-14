import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
<<<<<<< HEAD
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
=======
import Login from './components/AdminPanel/auth/Login';
import Signup from './components/AdminPanel/auth/Signup';
import ForgotPassword from './components/AdminPanel/auth/ForgotPassword';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import EditProfile from './components/AdminPanel/Admin/EditProfile';
import ChangePassword from './components/AdminPanel/Admin/ChangePassword';
import Profile from './components/AdminPanel/Admin/Profile';
import PrivacyPolicy from './components/AdminPanel/Admin/PrivacyPolicy';
import TermsCondition from './components/AdminPanel/Admin/TermsCondition';
import Patient from './components/AdminPanel/PatientManagement/Patient';
import Billing from './components/AdminPanel/BillingAndPayment/Billing';
import CreateBill from './components/AdminPanel/BillingAndPayment/CreateBill';


// import './styles/Navbar.css'; // Import the Navbar CSS
>>>>>>> 755819baf30b982a2b4e9a30677b6783161b018b

function App() {
  return (
    <Router>
<<<<<<< HEAD
      {/* <Navbar />  */}
      <Routes>

        {/* Admin */}

=======
      <Routes>
        
>>>>>>> 755819baf30b982a2b4e9a30677b6783161b018b
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />  
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
<<<<<<< HEAD
        {/* <Route path="/appointment" element={<DoctorAppointment />} /> */}
        <Route path="/search" element={<SearchResult />} />
        <Route path="/doctormanagement" element={<DoctorManagement />} />
        <Route path="/onsite" element={<DoctorOnSite />} />
        <Route path="/addnewdoctor" element={<AddNewDoctor />} />
        <Route path="/invoice" element={<Invoice />} />
=======

        <Route path='/patient' element={<Patient/>} />
        <Route path='/billing' element={<Billing/>} />       
        <Route path="/createbill" element={<CreateBill />} />

>>>>>>> 755819baf30b982a2b4e9a30677b6783161b018b
      </Routes>
    </Router>
  );
}

export default App;

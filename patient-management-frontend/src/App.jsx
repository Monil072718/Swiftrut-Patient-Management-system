import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
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
import EditInvoice from './components/AdminPanel/BillingAndPayment/EditInvoice';
import InvoiceThemes from './components/AdminPanel/BillingAndPayment/InvoiceTheme';
import Payment from './components/AdminPanel/BillingAndPayment/Payment';
import EditBill from './components/AdminPanel/BillingAndPayment/EditBill';
import BillDetails from './components/AdminPanel/BillingAndPayment/BillDetails';
import InsuranceClaims from './components/AdminPanel/BillingAndPayment/InsuranceClaims';
import Reporting from './components/AdminPanel/BillingAndPayment/Reporting';  
import OtpVerification from './components/AdminPanel/auth/OtpVerification';


// import './styles/Navbar.css'; // Import the Navbar CSS

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<OtpVerification />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />  
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />}/>

        <Route path='/patient' element={<Patient/>} />
        <Route path='/billing' element={<Billing/>} />       
        <Route path="/EditInvoice" element={<EditInvoice />} />
        <Route path="/invoicethemes" element={<InvoiceThemes />}/> 
        <Route path='/createbill' element={<CreateBill/>} />

        <Route path='/billing/payment' element={<Payment />} />
        <Route path='/editbill' element={<EditBill/>} />
        <Route path="/bill-details/:id" element={<BillDetails />} />
        <Route path="/billing/insurance" element={<InsuranceClaims />} />
        <Route path='/reporting' element={<Reporting />} />

      </Routes>
    </Router>
  );
}

export default App;

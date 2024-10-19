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
import EditInvoice from './components/AdminPanel/BillingAndPayment/EditInvoice';
import InvoiceThemes from './components/AdminPanel/BillingAndPayment/InvoiceTheme';
import Payment from './components/AdminPanel/BillingAndPayment/Payment';
import EditBill from './components/AdminPanel/BillingAndPayment/EditBill';
import BillDetails from './components/AdminPanel/BillingAndPayment/BillDetails';
import InsuranceClaims from './components/AdminPanel/BillingAndPayment/InsuranceClaims';
import Reporting from './components/AdminPanel/BillingAndPayment/Reporting';
import OtpVerification from './components/AdminPanel/auth/OtpVerification';


// import './styles/Navbar.css'; // Import the Navbar CSS
import PatientAppointment from './components/Patients/PatientAppointment';
import PatientEditProfile from './components/Patients/PatientEditProfile';
import PrescriptionPage from './components/Patients/PrescriptionPage';
import TestReportPage from './components/Patients/TestReportPage';
import MedicalHistory from './components/Patients/MedicalHistory';
import AppointmentBookingPage from './components/Patients/AppointmentBookingPage';
import PrescriptionAccessPage from './components/Patients/PrescriptionAccessPage';
import DoctorProfile from './components/DoctorPanel/DoctorProfile';
import DoctorEditProfile from './components/DoctorPanel/DoctorEditProfile';
import DoctorChangePassword from './components/DoctorPanel/DoctorChangePassword';
import DoctorTerms from './components/DoctorPanel/DoctorTerms';
import DoctorPrivacy from './components/DoctorPanel/DoctorPrivacy';
import AppoinmentManagement from './components/DoctorPanel/AppoinmentManagement';

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
        <Route path="/verify-otp" element={<OtpVerification />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />

        <Route path='/patient' element={<Patient />} />
        <Route path='/billing' element={<Billing />} />
        <Route path="/EditInvoice" element={<EditInvoice />} />
        <Route path="/invoicethemes" element={<InvoiceThemes />} />
        <Route path='/createbill' element={<CreateBill />} />

        <Route path='/billing/payment' element={<Payment />} />
        <Route path='/editbill' element={<EditBill />} />
        <Route path="/bill-details/:id" element={<BillDetails />} />
        <Route path="/billing/insurance" element={<InsuranceClaims />} />
        <Route path='/reporting' element={<Reporting />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/doc-appointment" element={<DoctorAppointment />} />
        <Route path="/search" element={<SearchResult />} />

        <Route path="/doctormanagement" element={<DoctorManagement />} />
        <Route path="/onsite" element={<DoctorOnSite />} />
        <Route path="/addnewdoctor" element={<AddNewDoctor />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/createbill" element={<CreateBill />} />


        {/* Doctor Routes */}
        <Route path='appoinmentmanagement' element={<AppoinmentManagement/>} />
        <Route path='/doctorprofile' element={<DoctorProfile />} />
        <Route path='/doctoredit' element={<DoctorEditProfile />} />
        <Route path='/doctorchangepsd' element={<DoctorChangePassword />} />
        <Route path='/doctorterms' element={<DoctorTerms />} />
        <Route path='/doctorprivacy' element={<DoctorPrivacy />} />


        
        {/* patient routes */}
        <Route path="/patient-appoitment" element={<PatientAppointment />} />
        <Route path="/patient-edit" element={<PatientEditProfile />} />
        <Route path="/prescription" element={<PrescriptionPage />} />
        <Route path="/test-report" element={<TestReportPage />} />
        <Route path="/medical-history" element={<MedicalHistory />} />
        <Route path="/patient-appointment" element={<AppointmentBookingPage />} />
        <Route path="/prescription-acess" element={<PrescriptionAccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;

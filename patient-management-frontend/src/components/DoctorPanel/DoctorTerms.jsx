import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Avatar, List, ListItem, ListItemText, ListItemIcon, Drawer, Button, Popover, Typography, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Search as SearchIcon, Notifications as NotificationsIcon, Logout as LogoutIcon, Dashboard as DashboardIcon, Person as DoctorIcon, Group as PatientIcon, Payment as PaymentIcon, BarChart as AnalyticsIcon, Edit as EditIcon, PrivacyTip as PrivacyIcon, Assignment as TermsIcon, Person as PersonIcon, Home as HomeIcon } from '@mui/icons-material';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import BadgeIcon from '@mui/icons-material/Badge';
import DoctorSidebar from './DoctorSidebar';
import DoctorNavbar from './DoctorNavbar';


const DoctorTerms = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        hospitalName: '',
        gender: '',
        city: '',
        state: '',
        country: '',
    });
    const location = useLocation();

    const handleProfileClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <DoctorSidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Navbar */}
                <DoctorNavbar currentPage="Profile Setting" />
                {/* Profile Settings Layout */}
                <div className="px-32 py-24 bg-gray-100 relative before:content-[''] w-full h-2/6" style={{ background: 'linear-gradient(107.38deg, #4C49ED 2.61%, #020067 101.2%)', position: 'relative' }}>
                    {/* Form Section */}
                    <h2 className="text-4xl mb-4 font-semibold text-white">Profile Setting</h2>
                    <div className="p-6  bg-white rounded-3xl shadow-md relative z-1" >

                        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row" >
                            {/* Profile Image Section */}
                            <div className="flex flex-col w-full md:w-1/4 mb-4 md:mb-0"
                                style={{ boxShadow: '1px 0px 0px rgba(0, 0, 0, 0.1)', padding: '20px' }}>

                                {/* Upper Part: Profile Image and Details */}
                                <div className="flex flex-col items-center justify-center flex-1">
                                    <Avatar alt="Profile" src="/assets/img/Profile/profile_2.png" sx={{ width: 200, height: 200 }} />
                                    <Typography variant="h6" style={{ marginTop: '10px', fontFamily: 'Lato', fontWeight: "700"  }} className="text-center text-bold mt-4">Lincoln Philips</Typography>
                                </div>

                                {/* Lower Part: Menu Buttons */}
                                <div className="flex flex-col mt-4 space-y-5 flex-1 justify-start">
                                    <Typography style={{ fontSize: '16px', fontFamily: 'Lato, sans-serif', fontWeight: '600' }}>
                                        Menu
                                    </Typography>
                                    <Link to="/doctorprofile" style={{ textDecoration: 'none' }}>
                                        <Button startIcon={<PersonIcon />} sx={{ backgroundColor: "#f6f8fb", color: "#4F4F4F", fontFamily: 'Lato, sans-serif', borderRadius: '10px', justifyContent: 'flex-start', padding: '8px 20px', color: location.pathname === '/doctorprofile' ? '#0eabeb' : '#4F4F4F', }} className="w-full text-gray1 p-3">
                                            Profile
                                        </Button>
                                    </Link>

                                    {/* Change Password Button */}
                                    <Link to="/doctorchangepsd" style={{ textDecoration: 'none' }}>
                                        <Button startIcon={<EnhancedEncryptionIcon />} sx={{ backgroundColor: "#f6f8fb", color: "#4F4F4F", fontFamily: 'Lato, sans-serif', borderRadius: '10px', justifyContent: 'flex-start', padding: '8px 20px', color: location.pathname === '/doctorchangepsd' ? '#0eabeb' : '#4F4F4F', }} className="w-full text-gray1">
                                            Change Password
                                        </Button>
                                    </Link>
                                    <Link to="/doctorterms" style={{ textDecoration: 'none' }}>
                                        <Button startIcon={<TermsIcon />} sx={{ backgroundColor: "#f6f8fb", color: "#4F4F4F", fontFamily: 'Lato, sans-serif', borderRadius: '10px', justifyContent: 'flex-start', padding: '8px 20px', color: location.pathname === '/doctorterms' ? '#0eabeb' : '#4F4F4F', }} className="w-full text-gray1">
                                            Terms & Conditions
                                        </Button>
                                    </Link>
                                    <Link to="/doctorprivacy" style={{ textDecoration: 'none' }}>
                                        <Button startIcon={<PrivacyIcon />} sx={{ backgroundColor: "#f6f8fb", color: "#4F4F4F", fontFamily: 'Lato, sans-serif', borderRadius: '10px', justifyContent: 'flex-start', padding: '8px 20px', color: location.pathname === '/doctorprivacy' ? '#0eabeb' : '#4F4F4F', }} className="w-full text-gray1">
                                            Privacy Policy
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Form Inputs Section */}
                            <div className="flex-1 mb-3 pl-5">
                                <div className="flex items-center justify-between mb-4">
                                    <Typography variant="h4" sx={{ fontFamily: 'Lato', fontWeight: '600', fontSize: '34px' }}>
                                        Terms & Conditions
                                    </Typography>
                                </div>
                                <div className='text-customGray text-sm  leading-relaxed mb-3 border border-gray-300 p-4 rounded-md'>
                                    <p className='mb-4'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis ante ornare, venenatis tortor sed, fringilla ante. Morbi nec semper justo. Cras eget rhoncus urna, eu fringilla nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pretium eleifend neque, vel blandit erat iaculis id. Etiam ut lectus vitae metus convallis condimentum quis cursus mi. Aenean non varius enim. Pellentesque sit amet interdum sapien. Fusce ac augue erat. Suspendisse sodales est et laoreet fringilla. Duis justo mauris, semper et justo eu, mollis porttitor eros.
                                    </p>
                                    <p className='mb-4'>
                                        Dolor sit amet, consectetur adipiscing elit. Fusce quis ante ornare, venenatis tortor sed, fringilla ante. Morbi nec semper justo. Cras eget rhoncus urna, eu fringilla nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pretium eleifend neque, vel blandit erat iaculis id. Etiam ut lectus vitae metus convallis condimentum quis cursus mi. Aenean non varius enim. Pellentesque sit amet interdum sapien. Fusce ac augue erat. Suspendisse sodales est et laoreet fringilla. Duis justo mauris, semper et justo eu, mollis porttitor eros.
                                    </p>
                                    <p className='mb-4'>
                                        Consectetur adipiscing elit. Fusce quis ante ornare, venenatis tortor sed, fringilla ante. Morbi nec semper justo. Cras eget rhoncus urna, eu fringilla nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pretium eleifend neque, vel blandit erat iaculis id. Etiam ut lectus vitae metus convallis condimentum quis cursus mi. Aenean non varius enim. Pellentesque sit amet interdum sapien. Fusce ac augue erat. Suspendisse sodales est et laoreet fringilla. Duis justo mauris, semper et justo eu, mollis porttitor eros.rat. Suspendisse sodales est et laoreet fringilla. Duis justo mauris, semper et justo eu, mollis porttitor eros.
                                    </p>
                                    <p className='mb-4'>
                                        Consectetur adipiscing elit. Fusce quis ante ornare, venenatis tortor sed, fringilla ante. Morbi nec semper justo. Cras eget rhoncus urna, eu fringilla nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pretium eleifend neque, vel blandit erat iaculis id. Etiam ut lectus vitae metus convallis condimentum quis cursus mi. Aenean non varius enim. Pellentesque sit amet interdum sapien. Fusce ac augue erat. Suspendisse sodales est et laoreet fringilla. Duis justo mauris, semper et justo eu, mollis porttitor eros.rat. Suspendisse sodales est et laoreet fringilla. Duis justo mauris, semper et justo eu, mollis porttitor eros.
                                    </p>

                                    <p className='mb-4'>
                                        Consectetur adipiscing elit. Fusce quis ante ornare, venenatis tortor sed, fringilla ante. Morbi nec semper justo. Cras eget rhoncus urna, eu fringilla nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pretium eleifend neque, vel blandit erat iaculis id. Etiam ut lectus vitae metus convallis condimentum quis cursus mi. Aenean non varius enim. Pellentesque sit amet.
                                    </p>
                                    <p className='mb-4'>
                                        Consectetur adipiscing elit. Fusce quis ante ornare, venenatis tortor sed, fringilla ante. Morbi nec semper justo. Cras eget rhoncus urna, eu fringilla nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pretium eleifend neque, vel blandit erat iaculis id. Etiam ut lectus vitae metus convallis condimentum quis cursus mi. Aenean non varius enim. Pellentesque sit amet.
                                    </p>
                                    <p className='mb-4'>
                                        Consectetur adipiscing elit. Fusce quis ante ornare, venenatis tortor sed, fringilla ante. Morbi nec semper justo. Cras eget rhoncus urna, eu fringilla nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pretium eleifend neque, vel.
                                    </p>
                                </div>


                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorTerms;

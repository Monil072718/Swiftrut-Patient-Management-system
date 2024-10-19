import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Avatar, List, ListItem, ListItemText, ListItemIcon, Drawer, Button, Popover, Typography, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Search as SearchIcon, Notifications as NotificationsIcon, Logout as LogoutIcon, Dashboard as DashboardIcon, Person as DoctorIcon, Group as PatientIcon, Payment as PaymentIcon, BarChart as AnalyticsIcon, Edit as EditIcon, PrivacyTip as PrivacyIcon, Assignment as TermsIcon, Person as PersonIcon, Home as HomeIcon } from '@mui/icons-material';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import BadgeIcon from '@mui/icons-material/Badge';
import DoctorSidebar from './DoctorSidebar';
import DoctorNavbar from './DoctorNavbar';

const DoctorChangePassword = () => {

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
    const navigate = useNavigate();
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
                            <div className="flex flex-col w-full md:w-1/5 mb-4 md:mb-0"
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
                                        Change Password
                                    </Typography>
                                </div>
                                <p className='text-customGray text-sm w-6/12 leading-relaxed mb-3'>
                                    To change your password, please fill in the fields below. Your password must contain at least 8 characters,
                                    it must also include at least one upper case letter, one lower case letter, one number and one special  character.
                                </p>

                                <div className="flex mb-2 gap-4 h-fixed">
                                    <div className="flex flex-col w-6/12 mb-4">
                                        <TextField
                                            type="password" // Make this a password field
                                            fullWidth
                                            name="currentPassword"
                                            value={formData.currentPassword}
                                            onChange={handleInputChange}
                                            placeholder="Enter current password"
                                            label="Current Password"
                                            required
                                            InputLabelProps={{
                                                shrink: true, 
                                                style: {
                                                    textDecoration: 'none', 
                                                    color: 'inherit' 
                                                },
                                            }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col w-6/12 mb-4">
                                        <TextField
                                            type="password" // Make this a password field
                                            fullWidth
                                            name="newPassword"
                                            value={formData.newPassword}
                                            onChange={handleInputChange}
                                            placeholder="Enter new password"
                                            label="New Password"
                                            required
                                            InputLabelProps={{
                                                shrink: true,
                                                style: {
                                                    textDecoration: 'none',
                                                    color: 'inherit'
                                                },
                                            }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col w-6/12 mb-4">
                                        <TextField
                                            type="password" // Make this a password field
                                            fullWidth
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                            placeholder="Confirm new password"
                                            label="Confirm Password"
                                            required
                                            InputLabelProps={{
                                                shrink: true, 
                                                style: {
                                                    textDecoration: 'none',
                                                    color: 'inherit'
                                                },
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end w-6/12 mb-4">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className='w-full'
                                        // onClick={handleChangePassword} // Function to handle password change logic
                                        sx={{
                                            backgroundColor: '#0eabeb',
                                            color: '#fff',
                                            borderRadius: '10px',
                                            padding: '10px 20px',
                                        }}
                                    >
                                        Change Password
                                    </Button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorChangePassword;

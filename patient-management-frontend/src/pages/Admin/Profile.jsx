import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Avatar, List, ListItem, ListItemText, ListItemIcon, Drawer, Button, Popover, Typography, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Search as SearchIcon, Notifications as NotificationsIcon, Logout as LogoutIcon, Dashboard as DashboardIcon, Person as DoctorIcon, Group as PatientIcon, Payment as PaymentIcon, BarChart as AnalyticsIcon, Edit as EditIcon, PrivacyTip as PrivacyIcon, Assignment as TermsIcon, Person as PersonIcon, Home as HomeIcon } from '@mui/icons-material';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';

const Profile = () => {

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

    const menuItems = [
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
        { text: 'Doctor Management', icon: <DoctorIcon /> },
        { text: 'Patient Management', icon: <PatientIcon /> },
        { text: 'Billing and Payment', icon: <PaymentIcon /> },
        { text: 'Reporting and Analytics', icon: <AnalyticsIcon /> },
    ];

    const handleMenuClick = (path) => {
        navigate(path);
    };

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

    const handleEditProfile = () => {
        handleClose(); // Close the popover
        navigate('/edit-profile'); // Navigate to Edit Profile page
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Drawer
                variant="permanent"
                anchor="left"
                sx={{
                    width: 300,
                    '& .MuiDrawer-paper': {
                        width: 300,
                        boxSizing: 'border-box',
                        backgroundColor: 'white',
                        color: '#818194',
                    },
                }}
            >
                {/* Logo */}
                <div className="flex items-center justify-center p-4">
                    <img src="assets/img/logo.png" alt="Logo" className="w-48 h-auto" />
                </div>

                {/* Menu Items */}
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => handleMenuClick(item.path)} // Add this line
                            sx={{
                                cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: '#E5E7EB',
                                    color: '#000',
                                },
                            }}
                        >
                            <ListItemIcon sx={{ color: '#818194', '&:hover': { color: '#000' } }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>

                <div className="mt-auto p-4">
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<LogoutIcon />}
                        className='font-semibold font-lato'
                        sx={{ backgroundColor: '#fdf2f2', color: 'red' }}
                    >
                        Logout
                    </Button>
                </div>
            </Drawer>
            
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Navbar */}
                <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
                    <Toolbar className="flex justify-between items-center">
                        <div className="flex items-center space-x-2 p-2 bg-[#f6f8fb] rounded-full border border-gray-300">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full ">
                                <HomeIcon className="text-gray-500" />
                            </div>
                            <span className="text-gray-400">{'>'}</span>
                            <span className="text-blue">Profile Setting</span>
                        </div>

                        <div className="flex items-center">
                            <div className="flex items-center bg-gray-200 rounded-full mr-4">
                                <InputBase
                                    placeholder="Search..."
                                    startAdornment={<SearchIcon className="mx-2" />}
                                    sx={{ padding: '0.5rem' }}
                                />
                            </div>

                            <IconButton color="inherit">
                                <Badge color="error">
                                    <NotificationsIcon sx={{ color: 'black' }} />
                                </Badge>
                            </IconButton>

                            <IconButton color="inherit" onClick={handleProfileClick}>
                                <Avatar alt="Profile" src="/assets/img/Profile/profile_img.png" />
                            </IconButton>

                            <div className="flex flex-col cursor-pointer">
                                <span className="text-black  font-semibold">Lincoln Philips</span>
                                <span className="text-gray-500 text-sm">Admin</span>
                            </div>

                            <Popover
                                open={Boolean(anchorEl)}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                sx={{ marginTop: '8px' }}
                            >
                                <div className="p-4">
                                    <Typography variant="h6" className="font-semibold">Profile Settings</Typography>
                                    <Typography variant="body2" className="mt-2 cursor-pointer" onClick={handleEditProfile}>Edit Profile</Typography>
                                    <Typography variant="body2" className="mt-2 cursor-pointer" >Change Password</Typography>
                                    <Typography variant="body2" className="mt-2 cursor-pointer">Logout</Typography>
                                </div>
                            </Popover>
                        </div>
                    </Toolbar>
                </AppBar>

                {/* Profile Settings Layout */}
                <div className="px-32 py-24 bg-gray-100 h-full relative before:content-[''] w-full h-2/6" style={{ background: 'linear-gradient(107.38deg, #4C49ED 2.61%, #020067 101.2%)', position: 'relative' }}>
                    {/* Form Section */}
                    <h2 className="text-4xl mb-4 font-semibold text-white">Profile Setting</h2>
                    <div className="p-6  bg-white rounded-3xl shadow-md relative z-1" >

                        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row" >
                            {/* Profile Image Section */}
                            <div className="flex flex-col w-full md:w-1/4 mb-4 md:mb-0"
                                style={{ boxShadow: '1px 0px 0px rgba(0, 0, 0, 0.1)', padding: '20px' }}>

                                {/* Upper Part: Profile Image and Details */}
                                <div className="flex flex-col items-center justify-center flex-1">
                                    <Avatar alt="Profile" src="/assets/img/Profile/profile_img_1.png" sx={{ width: 200, height: 200 }} />
                                    <Typography variant="h6" style={{ marginTop: '10px' }} className="text-center text-bold mt-4">Lincoln Philips</Typography>
                                </div>

                                {/* Lower Part: Menu Buttons */}
                                <div className="flex flex-col mt-4 space-y-5 flex-1 justify-start">
                                    <Typography style={{ fontSize: '16px', fontWeight: '500' }}>
                                        Menu
                                    </Typography>
                                    <Link to="/profile" style={{ textDecoration: 'none' }}>
                                        <Button startIcon={<PersonIcon />} sx={{ backgroundColor: "#f6f8fb", color: "#4F4F4F", fontFamily: 'Lato, sans-serif', borderRadius: '10px', justifyContent: 'flex-start', padding: '8px 20px', color: location.pathname === '/profile' ? '#0eabeb' : '#4F4F4F', }} className='w-full text-gray1 p-3'>
                                            Profile
                                        </Button>
                                    </Link>
                                    <Link to="/change-password" style={{ textDecoration: 'none' }}>
                                        <Button startIcon={<EnhancedEncryptionIcon />} sx={{ backgroundColor: "#f6f8fb", color: "#4F4F4F", fontFamily: 'Lato, sans-serif', borderRadius: '10px', justifyContent: 'flex-start', padding: '8px 20px', color: location.pathname === '/change-password' ? '#0eabeb' : '#4F4F4F', }} className="w-full text-gray1">
                                            Change Password
                                        </Button>
                                    </Link>
                                    <Link to="/terms-condition" style={{ textDecoration: 'none' }}>
                                        <Button startIcon={<TermsIcon />} sx={{ backgroundColor: "#f6f8fb", color: "#4F4F4F", fontFamily: 'Lato, sans-serif', borderRadius: '10px', justifyContent: 'flex-start', padding: '8px 20px', color: location.pathname === '/terms-condition' ? '#0eabeb' : '#4F4F4F', }} className="w-full text-gray1">
                                            Terms & Conditions
                                        </Button>
                                    </Link>
                                    <Link to="/privacy-policy" style={{ textDecoration: 'none' }}>
                                        <Button startIcon={<PrivacyIcon />} sx={{ backgroundColor: "#f6f8fb", color: "#4F4F4F", fontFamily: 'Lato, sans-serif', borderRadius: '10px', justifyContent: 'flex-start', padding: '8px 20px', color: location.pathname === '/privacy-policy' ? '#0eabeb' : '#4F4F4F', }} className="w-full text-gray1">
                                            Privacy Policy
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Form Inputs Section */}
                            <div className="flex-1 p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <Typography variant="h4" className="font-bold">
                                        Profile
                                    </Typography>
                                    <Button
                                        startIcon={<EditIcon />}
                                        sx={{ backgroundColor: '#0eabeb', color: 'white', fontWeight: '600', padding: '8px 16px', borderRadius: '6px' }}
                                        onClick={() => navigate('/edit-profile')}
                                    >
                                        Edit Profile
                                    </Button>
                                </div>

                                <div className="flex mb-2 gap-4">
                                    <div className="flex flex-col w-full mb-4">
                                        <TextField
                                            fullWidth
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            placeholder="Lincoln"
                                            label="First Name"
                                            required sx={{ border: "1px solid #15151533", borderRadius: "10px" }}
                                        />
                                    </div>

                                </div>

                                <div className="flex mb-2 gap-4">
                                    <div className="flex flex-col w-full mb-4">
                                        <TextField
                                            fullWidth
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="99130 53222"
                                            label="Phone Number"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col w-full mb-4">
                                        <TextField
                                            fullWidth
                                            name="hospitalName"
                                            value={formData.hospitalName}
                                            onChange={handleInputChange}
                                            placeholder="Silver Park Medical Center"
                                            label="Hospital Name"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col w-full mb-4">
                                        <FormControl fullWidth required variant="outlined">
                                            <InputLabel id="Gender">Gender</InputLabel>
                                            <Select
                                                labelId="Gender"
                                                label="Gender"
                                                name="gender"
                                                value={formData.gender}
                                                onChange={handleInputChange}
                                            >
                                                <MenuItem value="Male">Male</MenuItem>
                                                <MenuItem value="Female">Female</MenuItem>
                                                <MenuItem value="Other">Other</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>

                                <div className="flex mb-2 gap-4">
                                    <div className="flex flex-col w-full mb-4">
                                        <TextField
                                            fullWidth
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            placeholder="Ahmedabad"
                                            required
                                            label="City"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full mb-4">
                                        <TextField
                                            fullWidth
                                            name="state"
                                            value={formData.state}
                                            onChange={handleInputChange}
                                            placeholder="Gujarat"
                                            required
                                            label="State"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full mb-4">
                                        <TextField
                                            fullWidth
                                            name="country"
                                            value={formData.country}
                                            onChange={handleInputChange}
                                            placeholder="India"
                                            required
                                            label="Country"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

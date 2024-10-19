import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Avatar,  Button,Typography, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Search as SearchIcon, Notifications as NotificationsIcon, Logout as LogoutIcon, Dashboard as DashboardIcon, Person as DoctorIcon, Group as PatientIcon, Payment as PaymentIcon, BarChart as AnalyticsIcon, Edit as EditIcon, PrivacyTip as PrivacyIcon, Assignment as TermsIcon, Person as PersonIcon, Home as HomeIcon } from '@mui/icons-material';
import Navbar from '../../Comman/Navbar';
import Sidebar from '../../Comman/Sidebar';

const EditProfile = () => {

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
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Navbar */}
                <Navbar currentPage="Profile Setting" />

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
                                    <Avatar alt="Profile" src="/assets/img/Profile/profile_img_1.png" sx={{ width: 200, height: 200 }} />
                                    <Typography variant="h6" style={{ marginTop: '10px' }} className="text-center text-bold mt-4">Lincoln Philips</Typography>
                                </div>

                                {/* Lower Part: Menu Buttons */}
                                <div className="flex flex-col mt-4 space-y-5 flex-1 justify-start">
                                    <Button startIcon={<PersonIcon />} sx={{ backgroundColor: "#f6f8fb", color: "#4F4F4F", fontFamily: 'Lato, sans-serif', borderRadius: '10px', justifyContent: 'flex-start', padding: '8px 20px' }} className='w-full text-gray1 p-3  '>
                                        Change Profile
                                    </Button>
                                </div>
                            </div>

                            {/* Form Inputs Section */}
                            <div className="flex-1 p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <Typography variant="h4" className="font-bold">
                                        Profile
                                    </Typography>
                                    <Button startIcon={<EditIcon />} sx={{ backgroundColor: '#0eabeb', color: 'white', fontWeight: '600', padding: '8px 16px', borderRadius: '6px' }}>
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
                                    <div className="flex flex-col w-full mb-4">
                                        <TextField
                                            fullWidth
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            placeholder="Philips"
                                            label="Last Name"
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
                                    <div className="flex flex-col w-full mb-4">
                                        <TextField
                                            fullWidth
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Lincon@gmail.com"
                                            label="Email Address"
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
                                            InputLabelProps={{
                                                shrink: true,
                                                style: {
                                                    textDecoration: 'none',
                                                    color: 'inherit'
                                                },
                                            }}
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
                                            InputLabelProps={{
                                                shrink: true,
                                                style: {
                                                    textDecoration: 'none',
                                                    color: 'inherit'
                                                }
                                            }}
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
                                            InputLabelProps={{
                                                shrink: true,
                                                style: {
                                                    textDecoration: 'none',
                                                    color: 'inherit'
                                                },
                                            }}
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
                                            InputLabelProps={{
                                                shrink: true,
                                                style: {
                                                    textDecoration: 'none',
                                                    color: 'inherit'
                                                },
                                            }}
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
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon, Notifications as NotificationsIcon, Logout as LogoutIcon, Dashboard as DashboardIcon, Person as DoctorIcon, Group as PatientIcon, Payment as PaymentIcon, BarChart as AnalyticsIcon } from '@mui/icons-material';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Avatar, List, ListItem, ListItemText, ListItemIcon, Drawer, Button, Popover, Typography } from '@mui/material';
import vuesax from '../../assets/images/vuesax.png';
import char_2 from '../../assets/images/char_2.png';
import gender_male from '../../assets/images/gender_male.png';
import edit from '../../assets/images/edit.png';
import eye from '../../assets/images/eye.png';
import remove_hel from '../../assets/images/remove_hel.png';

const DoctorManagement = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const menuItems = [
        { text: 'Dashboard', icon: <DashboardIcon /> },
        { text: 'Doctor Management', icon: <DoctorIcon /> },
        { text: 'Patient Management', icon: <PatientIcon /> },
        { text: 'Billing and Payment', icon: <PaymentIcon /> },
        { text: 'Reporting and Analytics', icon: <AnalyticsIcon /> },
    ];

    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const doctors = [
        { name: 'Dr. Marcus Philips', genderIcon: '/path/to/icon', qualification: 'MBBS', specialty: 'Internal Medicine', workingTime: '6 Hour', checkUpTime: '4 Hour', breakTime: '1 Hour' },
        { name: 'Dr. Chance Vaccaro', genderIcon: '/path/to/icon', qualification: 'BDS', specialty: 'Pathology', workingTime: '6 Hour', checkUpTime: '3 Hour', breakTime: '2 Hour' },
        // Add more doctor data here
    ];

    return (
        <div className="main">
            <div className="flex h-screen">
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
                    <div className="flex items-center justify-center p-4">
                        <img src="assets/img/logo.png" alt="Logo" className="w-48 h-auto" />
                    </div>

                    <List>
                        {menuItems.map((item, index) => (
                            <ListItem
                                button
                                key={item.text}
                                sx={{
                                    cursor: 'pointer',
                                    '&:hover': {
                                        backgroundColor: '#E5E7EB',
                                        color: '#000',
                                    },
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        color: '#818194',
                                        '&:hover': {
                                            color: '#000',
                                        },
                                    }}
                                >
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
                            className='font-semibold'
                            sx={{
                                backgroundColor: '#fdf2f2',
                                color: 'red'
                            }}
                        >
                            Logout
                        </Button>
                    </div>
                </Drawer>

                <div className="flex-1 flex flex-col shadow-none">
                    <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
                        <Toolbar className="flex justify-between items-center">
                            <div className="p-4 ">
                                <h1 className="text-3xl text-black font-bold">Good Morning! Martin</h1>
                                <p className="mt-2 text-customGray">Hope you have a good day</p>
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-center bg-gray-100 rounded-full w-[335px] h-[46px] px-4 py-2 gap-3">
                                    <SearchIcon className="text-gray-500" />
                                    <InputBase
                                        placeholder="Quick Search"
                                        className="w-full bg-transparent text-gray-700 focus:outline-none"
                                    />
                                    <span className="text-gray-500">All</span>
                                    <img
                                        src={vuesax}
                                        alt="vuesax"
                                        className="w-4 h-4"
                                    />
                                </div>

                                <IconButton color="inherit">
                                    <Badge color="error">
                                        <div className='w-12 h-12 rounded-full bg-[#F6F8FB]'>
                                            <NotificationsIcon sx={{ color: 'black' }} />
                                        </div>
                                    </Badge>
                                </IconButton>

                                <IconButton color="inherit" onClick={() => navigate('/profile')}>
                                    <Avatar alt="Profile" src="/assets/img/Profile/profile_img.png" />
                                </IconButton>

                                <div className="flex flex-col cursor-pointer" onClick={() => navigate('/profile')}>
                                    <span className="text-black font-semibold">Lincoln Philips</span>
                                    <span className="text-gray-500 text-sm">Admin</span>
                                </div>

                                <Popover
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    sx={{ marginTop: '8px' }}
                                >
                                    <div className="p-4">
                                        <Typography variant="h6" className="font-semibold">Profile Settings</Typography>
                                        <Typography variant="body2" className="mt-2 cursor-pointer" onClick={() => navigate('/profile')}>Edit Profile</Typography>
                                        <Typography variant="body2" className="mt-2 cursor-pointer">Change Password</Typography>
                                        <Typography variant="body2" className="mt-2 cursor-pointer">Logout</Typography>
                                    </div>
                                </Popover>
                            </div>
                        </Toolbar>
                    </AppBar>

                    <div className="p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold mb-4">Doctor Management</h2>
                            <div className='flex items-center'>
                                <div className="flex items-center bg-gray-100 rounded-full w-[335px] h-[46px] px-4 py-2 gap-3 me-4">
                                    <SearchIcon className="text-gray-500" />
                                    <InputBase
                                        placeholder="Quick Search"
                                        className="w-full bg-transparent text-gray-700 focus:outline-none"
                                    />

                                </div>
                                <button className="bg-[#0EABEB] text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600">
                                    + Add New Doctor
                                </button>
                            </div>
                        </div>
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="text-left px-4 py-2 font-semibold text-sm text-gray-600">Doctor Name</th>
                                    <th className="text-left px-4 py-2 font-semibold text-sm text-gray-600">Gender</th>
                                    <th className="text-left px-4 py-2 font-semibold text-sm text-gray-600">Qualification</th>
                                    <th className="text-left px-4 py-2 font-semibold text-sm text-gray-600">Specialty</th>
                                    <th className="text-left px-4 py-2 font-semibold text-sm text-gray-600">Working Time</th>
                                    <th className="text-left px-4 py-2 font-semibold text-sm text-gray-600">Patient Check Up Time</th>
                                    <th className="text-left px-4 py-2 font-semibold text-sm text-gray-600">Break Time</th>
                                    <th className="text-left px-4 py-2 font-semibold text-sm text-gray-600">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {doctors.map((doctor, index) => (
                                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="px-4 py-2 flex items-center">
                                            <img
                                                src={char_2}
                                                alt="char_2"
                                                className="w-8 h-8 me-1"
                                            />
                                            {doctor.name}
                                        </td>
                                        <td className="px-4 py-2">
                                            <img
                                                src={gender_male} // Replace with actual path
                                                alt="gender_male"
                                                className="w-6 h-6"
                                            />
                                        </td>
                                        <td className="px-4 py-2">{doctor.qualification}</td>
                                        <td className="px-4 py-2">{doctor.specialty}</td>
                                        <td className="px-4 py-2">
                                            <span className="bg-sky-100 text-sky-600 font-medium px-4 py-1 rounded-full inline-block">
                                                {doctor.workingTime}
                                            </span>
                                        </td>
                                        <td className="px-4 py-2">
                                            <span className="bg-sky-100 text-sky-600 font-medium px-4 py-1 rounded-full inline-block">
                                                {doctor.checkUpTime}
                                            </span>
                                        </td>
                                        <td className="px-4 py-2">
                                            <span className="bg-sky-100 text-sky-600 font-medium px-4 py-1 rounded-full inline-block">
                                                {doctor.breakTime}
                                            </span>
                                        </td>
                                        <td className="px-4 py-2 flex space-x-2">
                                            <button>
                                                <img src={edit} alt="edit" />
                                            </button>
                                            <button>
                                                <img src={eye} alt="eye" />
                                            </button>
                                            <button>
                                                <img src={remove_hel} alt="remove" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorManagement;

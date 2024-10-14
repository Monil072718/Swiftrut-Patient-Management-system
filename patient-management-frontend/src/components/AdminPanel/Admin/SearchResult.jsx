import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon, Notifications as NotificationsIcon, Logout as LogoutIcon, Dashboard as DashboardIcon, Person as DoctorIcon, Group as PatientIcon, Payment as PaymentIcon, BarChart as AnalyticsIcon } from '@mui/icons-material';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Avatar, List, ListItem, ListItemText, ListItemIcon, Drawer, Button, Popover, Typography } from '@mui/material';
import { Edit as EditIcon, Visibility as ViewIcon, Delete as DeleteIcon } from '@mui/icons-material';
import vuesax from '../../assets/images/vuesax.png';

const SearchResult = () => {
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

    return (
        <>
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

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Navbar */}
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


            </div>

            
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg mt-4 mx-6">
                <h2 className="text-2xl font-bold mb-4">Search Results</h2>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="w-full">
                            <th className="text-left py-3 px-1 font-semibold text-sm">Doctor Name</th>
                            <th className="text-left py-3 px-1 font-semibold text-sm">Gender</th>
                            <th className="text-left py-3 px-1 font-semibold text-sm">Qualification</th>
                            <th className="text-left py-3 px-1 font-semibold text-sm">Specialty</th>
                            <th className="text-left py-3 px-1 font-semibold text-sm">Working Time</th>
                            <th className="text-left py-3 px-1 font-semibold text-sm">Patient Check Up Time</th>
                            <th className="text-left py-3 px-1 font-semibold text-sm">Break Time</th>
                            <th className="text-left py-3 px-1 font-semibold text-sm">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-3 px-4 border-b border-gray-200 flex items-center">
                                <img src="/path/to/doctor1.png" alt="Doctor" className="w-10 h-10 rounded-full mr-3" />
                                Dr. Parthiv Patel
                            </td>
                            <td className="py-3 px-4 border-b border-gray-200">
                                <span className="text-gray-600">Male</span>
                            </td>
                            <td className="py-3 px-1 border-b border-gray-200">MBBS</td>
                            <td className="py-3 px-1 border-b border-gray-200">Internal Medicine</td>
                            <td className="py-3 px-1 border-b border-gray-200">6 Hour</td>
                            <td className="py-3 px-1 border-b border-gray-200">4 Hour</td>
                            <td className="py-3 px-1 border-b border-gray-200">1 Hour</td>
                            <td className="py-3 px-1 border-b border-gray-200 flex space-x-2">
                                <button className="text-green-500 hover:text-green-700">
                                    <EditIcon />
                                </button>
                                <button className="text-blue-500 hover:text-blue-700">
                                    <ViewIcon />
                                </button>
                                <button className="text-red-500 hover:text-red-700">
                                    <DeleteIcon />
                                </button>
                            </td>
                        </tr>

                        {/* Repeat the same structure for more doctors */}
                        <tr>
                            <td className="py-3 px-4 border-b border-gray-200 flex items-center">
                                <img src="/path/to/doctor2.png" alt="Doctor" className="w-10 h-10 rounded-full mr-3" />
                                Dr. Parthiv Patel
                            </td>
                            <td className="py-3 px-4 border-b border-gray-200">
                                <span className="text-gray-600">Male</span>
                            </td>
                            <td className="py-3 px-4 border-b border-gray-200">BDS</td>
                            <td className="py-3 px-4 border-b border-gray-200">Anesthesiology</td>
                            <td className="py-3 px-4 border-b border-gray-200">5 Hour</td>
                            <td className="py-3 px-4 border-b border-gray-200">4 Hour</td>
                            <td className="py-3 px-4 border-b border-gray-200">2 Hour</td>
                            <td className="py-3 px-4 border-b border-gray-200 flex space-x-2">
                                <button className="text-green-500 hover:text-green-700">
                                    <EditIcon />
                                </button>
                                <button className="text-blue-500 hover:text-blue-700">
                                    <ViewIcon />
                                </button>
                                <button className="text-red-500 hover:text-red-700">
                                    <DeleteIcon />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </>

    )
}

export default SearchResult
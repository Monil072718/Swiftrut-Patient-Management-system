// HeaderBar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Avatar, Popover, Typography } from '@mui/material';
import { Search as SearchIcon, Notifications as NotificationsIcon } from '@mui/icons-material';
import vuesax from '../../assets/Images/vuesax.png';


const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
            <Toolbar className="flex justify-between items-center">
                <div className="p-4">
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
    );
};

export default Navbar;

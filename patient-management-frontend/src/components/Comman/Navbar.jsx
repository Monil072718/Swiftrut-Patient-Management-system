// Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    InputBase,
    IconButton,
    Badge,
    Popover,
    Typography,
    Avatar,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = ({ currentPage, showBreadcrumb }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();

    const handleProfileClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleEditProfile = () => {
        // Edit profile logic here
    };

    const handleBack = () => {
        navigate(-1); // This will take the user one step back in the browser history
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
            <Toolbar className="flex justify-between items-center">
                <div className="flex items-center space-x-2 p-2 bg-[#f6f8fb] rounded-full border border-gray-300">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full">
                        <button onClick={handleBack}>
                            <HomeIcon className="text-gray-500" />
                        </button>
                    </div>
                    <span className="text-gray-400">{'>'}</span>
                    <span className="text-blue">{currentPage}</span>
                </div>

                <div className="flex items-center space-x-4">
                    
                    <div className="flex items-center bg-[#f6f8fb] rounded-full mr-4">
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
                        <span className="text-black font-semibold">Lincoln Philips</span>
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
                            <Typography variant="h6" className="font-semibold">
                                Profile Settings
                            </Typography>
                            <Typography
                                variant="body2"
                                className="mt-2 cursor-pointer"
                                onClick={handleEditProfile}
                            >
                                Edit Profile
                            </Typography>
                            <Typography variant="body2" className="mt-2 cursor-pointer">
                                Change Password
                            </Typography>
                            <Typography variant="body2" className="mt-2 cursor-pointer">
                                Logout
                            </Typography>
                        </div>
                    </Popover>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

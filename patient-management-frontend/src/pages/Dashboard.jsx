import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Avatar, List, ListItem, ListItemText, ListItemIcon, Drawer, Button, FormControl, Select, MenuItem, Popover, Typography, } from '@mui/material';
import { Search as SearchIcon, Notifications as NotificationsIcon, Logout as LogoutIcon, Dashboard as DashboardIcon, Person as DoctorIcon, Group as PatientIcon, Payment as PaymentIcon, BarChart as AnalyticsIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Comman/Sidebar';

function Dashboard() {
  const [anchorEl, setAnchorEl] = useState(null); // State to manage Popover
  const navigate = useNavigate(); // Get the navigate function

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
          <Toolbar className="flex justify-between items-center">
            <div className="p-4 ">
              <h1 className="text-3xl text-black font-bold">Good Morning! Martin</h1>
              <p className="mt-2 text-customGray">Hope you have a good day</p>
            </div>
            {/* <div className="flex items-center"></div> */}
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

        {/* Content Area
        <div className="p-8 bg-customLightBlue h-full">
          <div className="flex-1 w-3/5 p-4">
            <h1 className="text-3xl font-bold">Main Content Area (60%)</h1>
            <p>This section occupies 60% of the width.</p>
          </div>

          {/* <div className="w-2/5 p-4 bg-gray-200">
            <h2 className="text-xl font-semibold">Sidebar Content (40%)</h2>
            <p>This section occupies 40% of the width.</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Dashboard;

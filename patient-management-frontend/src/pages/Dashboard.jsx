import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Avatar, List, ListItem, ListItemText, ListItemIcon, Drawer, Button, FormControl, Select, MenuItem, Popover, Typography, } from '@mui/material';
import { Search as SearchIcon, Notifications as NotificationsIcon, Logout as LogoutIcon, Dashboard as DashboardIcon, Person as DoctorIcon, Group as PatientIcon, Payment as PaymentIcon, BarChart as AnalyticsIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [anchorEl, setAnchorEl] = useState(null); // State to manage Popover
  const navigate = useNavigate(); // Get the navigate function

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Doctor Management', icon: <DoctorIcon /> },
    { text: 'Patient Management', icon: <PatientIcon /> },
    { text: 'Billing and Payment', icon: <PaymentIcon /> },
    { text: 'Reporting and Analytics', icon: <AnalyticsIcon /> },
  ];

  const open = Boolean(anchorEl);

  // const handleProfileClick = (event) => {
  //   setAnchorEl(event.currentTarget); 
  // };

  const handleClose = () => {
    setAnchorEl(null);
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
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: '#E5E7EB',
                  color: '#000',
                },
              }}
            >
              {/* Icon */}
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
              {/* Text */}
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
                sx={{ marginTop: '8px' }} // Add margin for better positioning
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

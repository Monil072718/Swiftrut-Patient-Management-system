// Sidebar.js
import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { Dashboard as DashboardIcon, Person as DoctorIcon, Group as PatientIcon, Payment as PaymentIcon, BarChart as AnalyticsIcon } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    const menuItems = [
        { text: 'Dashboard', icon: <DashboardIcon /> },
        { text: 'Doctor Management', icon: <DoctorIcon /> },
        { text: 'Patient Management', icon: <PatientIcon /> },
        { text: 'Billing and Payment', icon: <PaymentIcon /> },
        { text: 'Reporting and Analytics', icon: <AnalyticsIcon /> },
    ];
    return (
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
                    className="font-semibold"
                    sx={{
                        backgroundColor: '#fdf2f2',
                        color: 'red',
                    }}
                >
                    Logout
                </Button>
            </div>
        </Drawer>
    );
};

// Optional: Add PropTypes to ensure the correct prop types
Sidebar.propTypes = {
    menuItems: PropTypes.array,
};

export default Sidebar;

import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, Typography, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { Dashboard as DashboardIcon, Person as DoctorIcon, Group as PatientIcon, Payment as PaymentIcon, BarChart as AnalyticsIcon, Logout as LogoutIcon } from '@mui/icons-material';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Get current location
    const [billingOpen, setBillingOpen] = useState(false); // State to manage dropdown

    const menuItems = [
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
        { text: 'Doctor Management', icon: <DoctorIcon />, path: '/doctor' },
        { text: 'Patient Management', icon: <PatientIcon />, path: '/patient' },
        {
            text: 'Billing and Payment',
            icon: <PaymentIcon />,
            path: '/billing', // Yeh path same rahega
            children: [
                { text: 'Monitor Billing', path: '/billing' }, 
                { text: 'Insurance Claims', path: '/billing/insurance' },
                { text: 'Payment Process', path: '/billing/payment' },
            ],
        },
        
        { text: 'Reporting and Analytics', icon: <AnalyticsIcon />, path: '/analytics' },
    ];

    const handleMenuClick = (path) => {
        navigate(path);
    };

    const toggleBillingDropdown = () => {
        setBillingOpen(!billingOpen);
    };

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
            {/* Logo */}
            <div className="flex items-center justify-center p-10">
                <img src="assets/img/logo.png" alt="Logo" className="w-48 h-auto" />
            </div>

            {/* Menu Items */}
            <List sx={{ paddingTop: '25px' }}>
                {menuItems.map((item) => (
                    <React.Fragment key={item.text}>
                        <ListItem
                            button
                            onClick={() => item.children ? toggleBillingDropdown() : handleMenuClick(item.path)}
                            sx={{
                                cursor: 'pointer',
                                marginBottom: '20px',
                                background: location.pathname === item.path ? 'linear-gradient(90deg, #0EABEB 0%, rgba(10, 186, 181, 0.05) 50%)' : 'inherit',
                                color: location.pathname === item.path ? '#0EABEB' : '#818194',
                                borderRight: location.pathname === item.path ? '6px solid #0EABEB ' : 'none',
                                '&:hover': {
                                    backgroundColor: '#E5E7EB',
                                    color: '#0EABEB',
                                },
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    color: location.pathname === item.path ? '#0EABEB' : '#818194',
                                    '&:hover': { color: '#0EABEB' },
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <Typography
                                sx={{
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    lineHeight: '19.2px',
                                    textAlign: 'left',
                                    margin: 0,
                                    color: location.pathname === item.path ? '#0EABEB' : '#818194',
                                }}
                            >
                                {item.text}
                            </Typography>
                        </ListItem>
                        {/* Dropdown Menu for Billing and Payment */}
                        {item.children && billingOpen && (
                            <List sx={{ paddingLeft: 4 }}>
                                {item.children.map((child) => (
                                    <ListItem
                                        button
                                        key={child.text}
                                        onClick={() => handleMenuClick(child.path)}
                                        sx={{
                                            cursor: 'pointer',
                                            marginBottom: '10px',
                                            background: location.pathname === child.path ? '#e0f7fa' : 'inherit',
                                            color: location.pathname === child.path ? '#0EABEB' : '#818194',
                                            '&:hover': {
                                                backgroundColor: '#E5E7EB',
                                                color: '#0EABEB',
                                            },
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: 'Lato, sans-serif',
                                                fontSize: '14px',
                                                fontWeight: 500,
                                                color: location.pathname === child.path ? '#0EABEB' : '#818194',
                                            }}
                                        >
                                            {child.text}
                                        </Typography>
                                    </ListItem>
                                ))}
                            </List>
                        )}
                    </React.Fragment>
                ))}
            </List>

            <div className="mt-auto p-4">
                <Button
                    fullWidth
                    variant="contained"
                    startIcon={<LogoutIcon />}
                    className="font-semibold font-lato"
                    sx={{ backgroundColor: '#fdf2f2', color: 'red' }}
                >
                    Logout
                </Button>
            </div>
        </Drawer>
    );
};

export default Sidebar;

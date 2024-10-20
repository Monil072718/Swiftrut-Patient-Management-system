import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, Typography, Button, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { MdOutlineEventNote } from "react-icons/md";
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../../assets/images/logo.png'; 

const DoctorSidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [billingOpen, setBillingOpen] = useState(false);

    const menuItems = [
        { text: 'Appointment Management', icon: <CalendarMonthIcon />, path: '/appoinmentmanagement' },
        { text: 'Patient Record Access', icon: <MdOutlineEventNote />, path: '/patient_record' },
        {
            text: 'Prescription Tools',
            icon: <MedicalServicesIcon />,
            path: '/prescription',
            children: [
                { text: 'Create', path: '/create' },
                { text: 'Manage', path: '/prescription/manage' },
                
            ],
        },
        { text: 'Teleconsultation Module', icon: <PermPhoneMsgIcon />, path: '/teleconsultation' },
        { text: 'Chat', icon: <QuestionAnswerIcon />, path: '/chat' },
    ];

    const handleMenuClick = (path) => {
        navigate(path);
    };

    const toggleBillingDropdown = () => {
        setBillingOpen((prev) => !prev);
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
            <div className="flex items-center justify-center p-5">
            <img src={logo} alt="Logo" className="w-48 h-auto" />
            </div>

            {/* Menu Items */}
            <List >
                {menuItems.map((item) => (
                    <React.Fragment key={item.text}>
                        <ListItem
                            button
                            onClick={() =>
                                item.children ? toggleBillingDropdown() : handleMenuClick(item.path)
                            }
                            sx={{
                                cursor: 'pointer',
                                marginBottom: '20px',
                                background:
                                    location.pathname === item.path
                                        ? 'linear-gradient(90deg, #0EABEB 0%, rgba(10, 186, 181, 0.05) 50%)'
                                        : 'inherit',
                                color: location.pathname === item.path ? '#0EABEB' : '#818194',
                                borderRight:
                                    location.pathname === item.path ? '6px solid #0EABEB' : 'none',
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
                            <Box sx={{ paddingLeft: '32px' }}>
                                {item.children.map((child) => (
                                    <ListItem
                                        button
                                        key={child.text}
                                        onClick={() => handleMenuClick(child.path)}
                                        sx={{
                                            cursor: 'pointer',
                                            marginBottom: '10px',
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
                            </Box>
                        )}
                    </React.Fragment>
                ))}
            </List>

            {/* Logout Button */}
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

export default DoctorSidebar;

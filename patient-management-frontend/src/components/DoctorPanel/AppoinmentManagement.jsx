import React, { useState } from 'react';
import BadgeIcon from '@mui/icons-material/Badge';
import DoctorSidebar from './DoctorSidebar';
import DoctorNavbar from './DoctorNavbar';
import { Avatar, Box, Button, InputBase, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, TextField, Typography } from '@mui/material';
import { RiSearch2Line } from "react-icons/ri";
import { FaCalendarDays } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';


const appointments = [
    { id: 1, name: 'Marcus Philips', DiesesName: 'Stomach Ache', patientIssues: 'Feeling Tired', appoinmentDate: '2 Jan, 2022', appointmentTime: '4:30 PM', appointmentType: 'Online' },
    { id: 1, name: 'Julianna Warren', DiesesName: 'Stomach Ache', patientIssues: 'Diabetes', appoinmentDate: '3 Jan, 2022', appointmentTime: '2:40 PM', appointmentType: 'Onsite' },
    // Add more appointments as needed
];

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`custom-tabpanel-${index}`}
            aria-labelledby={`custom-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const AppoinmentManagement = () => {

    const [value, setValue] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [open, setOpen] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleOpen = (patient) => {
        setSelectedPatient(patient);
        setOpen(true);
    };

    const filteredPatients = appointments.filter(patient =>
        patient.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex h-screen overflow-hidden" >
            {/* Sidebar */}
            <DoctorSidebar />
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Navbar */}
                <DoctorNavbar currentPage="Appoinment Management" />
                <div className="m-6 rounded-xl shadow-md relative z-1" sx={{ backgroundColor: '#f4f4f4' }}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab
                                    label="Today Appointment"
                                    {...a11yProps(0)}
                                    style={{ textTransform: 'capitalize', fontSize: '14px', fontWeight: '600', color: value === 0 ? '#0eabeb' : '#818194' }}
                                />
                                <Tab
                                    label="Upcoming Appointment"
                                    {...a11yProps(1)}
                                    style={{ textTransform: 'capitalize', fontSize: '14px', fontWeight: '600', color: value === 1 ? '#0eabeb' : '#818194' }}
                                />
                                <Tab
                                    label="Previous Appointment"
                                    {...a11yProps(2)}
                                    style={{ textTransform: 'capitalize', fontSize: '14px', fontWeight: '600', color: value === 2 ? '#0eabeb' : '#818194' }}
                                />
                                <Tab
                                    label="Cancel Appointment"
                                    {...a11yProps(3)}
                                    style={{ textTransform: 'capitalize', fontSize: '14px', fontWeight: '600', color: value === 3 ? '#0eabeb' : '#818194' }}
                                />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <div className="p-1 min-h-screen">
                                {/* Search Bar */}
                                <div className="flex justify-between items-center mb-4">
                                    <div className='flex-1'>
                                        <h3 className="font-semibold text-black text-2xl">Today Appointment</h3>
                                    </div>

                                    <div className="flex items-center mr-4">
                                        <div className="flex items-center bg-[#f6f8fb] rounded-full mr-4">
                                            <InputBase
                                                placeholder="Search "
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                startAdornment={<RiSearch2Line className="mx-2" />}
                                                sx={{ padding: '0.5rem' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex space-x-4 ml-4">
                                        <Button
                                            startIcon={<FaCalendarDays sx={{ color: '#0eabeb' }} />}
                                            sx={{
                                                border: '1px solid #0eabeb',
                                                color: '#0eabeb',
                                                fontWeight: '600',
                                                padding: '8px 16px',
                                                borderRadius: '6px',
                                            }}
                                        >
                                            Any Date
                                        </Button>
                                        <Button
                                            startIcon={<FaCalendarDays />}
                                            onClick={() => navigate('/appoinment-time-slot')}
                                            sx={{
                                                backgroundColor: '#0eabeb',
                                                color: 'white',
                                                fontWeight: '600',
                                                padding: '8px 16px',
                                                borderRadius: '6px',
                                            }}
                                        >
                                            Appointment Time Slot
                                        </Button>
                                    </div>
                                </div>
                                <TableContainer className="rounded-lg">
                                    <Table>
                                        <TableHead className="bg-customLightBlue rounded-lg">
                                            <TableRow className='font-lato'>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Patient Name</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Disease Name</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>patient issue</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Appoinment Date</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Appointment Time</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Appointment Type</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Action</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {filteredPatients.map((patient) => (
                                                <TableRow key={patient.id}>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F',
                                                    }}>{patient.name}</TableCell>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F',
                                                    }}>{patient.DiesesName}</TableCell>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F',
                                                    }}>{patient.patientIssues}</TableCell>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F',
                                                    }}>{patient.appoinmentDate}</TableCell>
                                                    <TableCell
                                                        sx={{
                                                            padding: '8px 12px',
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                background: '#f6f8fb',
                                                                borderRadius: '12px',
                                                                padding: '8px 12px',
                                                                color: '#718EBF',
                                                                fontFamily: 'Lato',
                                                                fontSize: '16px',
                                                                fontWeight: 600,
                                                                lineHeight: '21.6px',
                                                                textAlign: 'center',
                                                                display: 'inline-flex',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                            }}
                                                        >
                                                            {patient.appointmentTime}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div
                                                            style={{
                                                                width: '96px',
                                                                height: '38px',
                                                                padding: '6px 20px',
                                                                background: patient.appointmentType === 'Online' ? 'rgba(255, 195, 19, 0.1)' : 'rgba(86, 120, 233, 0.1)',
                                                                borderRadius: '20px',
                                                                color: patient.appointmentType === 'Online' ? '#FFC313' : '#5678EB',
                                                                fontFamily: 'Lato',
                                                                fontSize: '16px',
                                                                fontWeight: 600,
                                                                lineHeight: '21.6px',
                                                                textAlign: 'left',
                                                                display: 'flex',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                opacity: 1,
                                                            }}
                                                        >
                                                            {patient.appointmentType}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            size="small"
                                                            style={{ backgroundColor: '#F6F8FB', color: 'white' }}
                                                            onClick={() => handleOpen(patient)}
                                                            sx={{
                                                                boxShadow: 'none',
                                                                padding: '2px',
                                                                minWidth: 'auto',
                                                                marginRight: '15px',
                                                                '&:hover': {
                                                                    boxShadow: 'none',
                                                                },
                                                            }}
                                                        >
                                                            <EventBusyIcon sx={{ color: 'red', fontSize: '30px' }} />
                                                        </Button>
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            size="small"
                                                            style={{ backgroundColor: '#F6F8FB', color: 'white' }}
                                                            onClick={() => handleOpen(patient)}
                                                            sx={{
                                                                boxShadow: 'none',
                                                                padding: '2px',
                                                                minWidth: 'auto',
                                                                '&:hover': {
                                                                    boxShadow: 'none',
                                                                },
                                                            }}
                                                        >
                                                            <EventAvailableIcon sx={{ color: '#5678e9', fontSize: '30px' }} />
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </CustomTabPanel>

                        <CustomTabPanel value={value} index={1}>
                            <div className="p-1 min-h-screen">
                                {/* Search Bar */}
                                <div className="flex justify-between items-center mb-4">
                                    <div className='flex-1'>
                                        <h3 className="font-semibold text-black text-2xl">Upcoming Appointment</h3>
                                    </div>

                                    <div className="flex items-center mr-4">
                                        <div className="flex items-center bg-[#f6f8fb] rounded-full mr-4">
                                            <InputBase
                                                placeholder="Search "
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                startAdornment={<RiSearch2Line className="mx-2" />}
                                                sx={{ padding: '0.5rem' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex space-x-4 ml-4">
                                        <Button
                                            startIcon={<FaCalendarDays sx={{ color: '#0eabeb' }} />}
                                            sx={{
                                                border: '1px solid #0eabeb',
                                                color: '#0eabeb',
                                                fontWeight: '600',
                                                padding: '8px 16px',
                                                borderRadius: '6px',
                                            }}
                                        >
                                            Any Date
                                        </Button>
                                        <Button
                                            startIcon={<FaCalendarDays />}
                                            onClick={() => navigate('/appoinment-time-slot')}
                                            sx={{
                                                backgroundColor: '#0eabeb',
                                                color: 'white',
                                                fontWeight: '600',
                                                padding: '8px 16px',
                                                borderRadius: '6px',
                                            }}
                                        >
                                            Appointment Time Slot
                                        </Button>
                                    </div>
                                </div>
                                <TableContainer className="rounded-lg">
                                    <Table>
                                        <TableHead className="bg-customLightBlue rounded-lg">
                                            <TableRow className='font-lato'>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Patient Name</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Disease Name</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>patient issue</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Appoinment Date</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Appointment Time</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Appointment Type</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Action</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {filteredPatients.map((patient) => (
                                                <TableRow key={patient.id}>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F',
                                                    }}>{patient.name}</TableCell>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F',
                                                    }}>{patient.DiesesName}</TableCell>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F',
                                                    }}>{patient.patientIssues}</TableCell>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F',
                                                    }}>{patient.appoinmentDate}</TableCell>
                                                    <TableCell
                                                        sx={{
                                                            padding: '8px 12px',
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                background: '#f6f8fb',
                                                                borderRadius: '12px',
                                                                padding: '8px 12px',
                                                                color: '#718EBF',
                                                                fontFamily: 'Lato',
                                                                fontSize: '16px',
                                                                fontWeight: 600,
                                                                lineHeight: '21.6px',
                                                                textAlign: 'center',
                                                                display: 'inline-flex',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                            }}
                                                        >
                                                            {patient.appointmentTime}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div
                                                            style={{
                                                                width: '96px',
                                                                height: '38px',
                                                                padding: '6px 20px',
                                                                background: patient.appointmentType === 'Online' ? 'rgba(255, 195, 19, 0.1)' : 'rgba(86, 120, 233, 0.1)',
                                                                borderRadius: '20px',
                                                                color: patient.appointmentType === 'Online' ? '#FFC313' : '#5678EB',
                                                                fontFamily: 'Lato',
                                                                fontSize: '16px',
                                                                fontWeight: 600,
                                                                lineHeight: '21.6px',
                                                                textAlign: 'left',
                                                                display: 'flex',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                opacity: 1,
                                                            }}
                                                        >
                                                            {patient.appointmentType}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            size="small"
                                                            style={{ backgroundColor: '#F6F8FB', color: 'white' }}
                                                            onClick={() => handleOpen(patient)}
                                                            sx={{
                                                                boxShadow: 'none',
                                                                padding: '2px',
                                                                minWidth: 'auto',
                                                                marginRight: '15px',
                                                                '&:hover': {
                                                                    boxShadow: 'none',
                                                                },
                                                            }}
                                                        >
                                                            <EventBusyIcon sx={{ color: 'red', fontSize: '30px' }} />
                                                        </Button>
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            size="small"
                                                            style={{ backgroundColor: '#F6F8FB', color: 'white' }}
                                                            onClick={() => handleOpen(patient)}
                                                            sx={{
                                                                boxShadow: 'none',
                                                                padding: '2px',
                                                                minWidth: 'auto',
                                                                '&:hover': {
                                                                    boxShadow: 'none',
                                                                },
                                                            }}
                                                        >
                                                            <EventAvailableIcon sx={{ color: '#5678e9', fontSize: '30px' }} />
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </CustomTabPanel>

                        <CustomTabPanel value={value} index={2}>
                            <div className="p-1 min-h-screen">
                                {/* Search Bar */}
                                <div className="flex justify-between items-center mb-4">
                                    <div className='flex-1'>
                                        <h3 className="font-semibold text-black text-2xl">Previous Appointment</h3>
                                    </div>

                                    <div className="flex items-center mr-4">
                                        <div className="flex items-center bg-[#f6f8fb] rounded-full mr-4">
                                            <InputBase
                                                placeholder="Search "
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                startAdornment={<RiSearch2Line className="mx-2" />}
                                                sx={{ padding: '0.5rem' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex space-x-4 ml-4">
                                        <Button
                                            startIcon={<FaCalendarDays sx={{ color: '#0eabeb' }} />}
                                            sx={{
                                                border: '1px solid #0eabeb',
                                                color: '#0eabeb',
                                                fontWeight: '600',
                                                padding: '8px 16px',
                                                borderRadius: '6px',
                                            }}
                                        >
                                            Any Date
                                        </Button>
                                        <Button
                                            startIcon={<FaCalendarDays />}
                                            onClick={() => navigate('/appoinment-time-slot')}
                                            sx={{
                                                backgroundColor: '#0eabeb',
                                                color: 'white',
                                                fontWeight: '600',
                                                padding: '8px 16px',
                                                borderRadius: '6px',
                                            }}
                                        >
                                            Appointment Time Slot
                                        </Button>
                                    </div>
                                </div>
                                <TableContainer className="rounded-lg">
                                    <Table>
                                        <TableHead className="bg-customLightBlue rounded-lg">
                                            <TableRow className='font-lato'>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Patient Name</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Disease Name</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>patient issue</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Appoinment Date</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Appointment Time</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Appointment Type</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Action</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {filteredPatients.map((patient) => (
                                                <TableRow key={patient.id}>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F',
                                                    }}>{patient.name}</TableCell>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F',
                                                    }}>{patient.DiesesName}</TableCell>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F',
                                                    }}>{patient.patientIssues}</TableCell>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F',
                                                    }}>{patient.appoinmentDate}</TableCell>
                                                    <TableCell
                                                        sx={{
                                                            padding: '8px 12px',
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                background: '#f6f8fb',
                                                                borderRadius: '12px',
                                                                padding: '8px 12px',
                                                                color: '#718EBF',
                                                                fontFamily: 'Lato',
                                                                fontSize: '16px',
                                                                fontWeight: 600,
                                                                lineHeight: '21.6px',
                                                                textAlign: 'center',
                                                                display: 'inline-flex',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                            }}
                                                        >
                                                            {patient.appointmentTime}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div
                                                            style={{
                                                                width: '96px',
                                                                height: '38px',
                                                                padding: '6px 20px',
                                                                background: patient.appointmentType === 'Online' ? 'rgba(255, 195, 19, 0.1)' : 'rgba(86, 120, 233, 0.1)',
                                                                borderRadius: '20px',
                                                                color: patient.appointmentType === 'Online' ? '#FFC313' : '#5678EB',
                                                                fontFamily: 'Lato',
                                                                fontSize: '16px',
                                                                fontWeight: 600,
                                                                lineHeight: '21.6px',
                                                                textAlign: 'left',
                                                                display: 'flex',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                opacity: 1,
                                                            }}
                                                        >
                                                            {patient.appointmentType}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            size="small"
                                                            style={{ backgroundColor: '#F6F8FB', color: 'white' }}
                                                            onClick={() => handleOpen(patient)}
                                                            sx={{
                                                                boxShadow: 'none',
                                                                padding: '2px',
                                                                minWidth: 'auto',
                                                                marginRight: '15px',
                                                                '&:hover': {
                                                                    boxShadow: 'none',
                                                                },
                                                            }}
                                                        >
                                                            <EventBusyIcon sx={{ color: 'red', fontSize: '30px' }} />
                                                        </Button>
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            size="small"
                                                            style={{ backgroundColor: '#F6F8FB', color: 'white' }}
                                                            onClick={() => handleOpen(patient)}
                                                            sx={{
                                                                boxShadow: 'none',
                                                                padding: '2px',
                                                                minWidth: 'auto',
                                                                '&:hover': {
                                                                    boxShadow: 'none',
                                                                },
                                                            }}
                                                        >
                                                            <EventAvailableIcon sx={{ color: '#5678e9', fontSize: '30px' }} />
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </CustomTabPanel>

                        <CustomTabPanel value={value} index={3}>
                            <div className="p-1 min-h-screen">
                                {/* Search Bar */}
                                <div className="flex justify-between items-center mb-4">
                                    <div className='flex-1'>
                                        <h3 className="font-semibold text-black text-2xl">cancel Appointment</h3>
                                    </div>

                                    <div className="flex items-center mr-4">
                                        <div className="flex items-center bg-[#f6f8fb] rounded-full mr-4">
                                            <InputBase
                                                placeholder="Search"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                startAdornment={<RiSearch2Line className="mx-2" />}
                                                sx={{ padding: '0.5rem' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex space-x-4 ml-4">
                                        <Button
                                            startIcon={<FaCalendarDays sx={{ color: '#0eabeb' }} />}
                                            sx={{
                                                border: '1px solid #0eabeb',
                                                color: '#0eabeb',
                                                fontWeight: '600',
                                                padding: '8px 16px',
                                                borderRadius: '6px',
                                            }}
                                        >
                                            Any Date
                                        </Button>
                                        <Button
                                            startIcon={<FaCalendarDays />}
                                            onClick={() => navigate('/appoinment-time-slot')}
                                            sx={{
                                                backgroundColor: '#0eabeb',
                                                color: 'white',
                                                fontWeight: '600',
                                                padding: '8px 16px',
                                                borderRadius: '6px',
                                            }}
                                        >
                                            Appointment Time Slot
                                        </Button>
                                    </div>
                                </div>

                                <TableContainer className="rounded-lg">
                                    <Table>
                                        <TableHead className="bg-customLightBlue rounded-lg">
                                            <TableRow className='font-lato'>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Patient Name</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Disease Name</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>patient issue</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Appoinment Date</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Appointment Time</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Appointment Type</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Action</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {filteredPatients.map((patient) => (
                                                <TableRow key={patient.id}>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F',
                                                    }}>{patient.name}</TableCell>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F',
                                                    }}>{patient.DiesesName}</TableCell>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F',
                                                    }}>{patient.patientIssues}</TableCell>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F',
                                                    }}>{patient.appoinmentDate}</TableCell>
                                                    <TableCell
                                                        sx={{
                                                            padding: '8px 12px',
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                background: '#f6f8fb',
                                                                borderRadius: '12px',
                                                                padding: '8px 12px',
                                                                color: '#718EBF',
                                                                fontFamily: 'Lato',
                                                                fontSize: '16px',
                                                                fontWeight: 600,
                                                                lineHeight: '21.6px',
                                                                textAlign: 'center',
                                                                display: 'inline-flex',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                            }}
                                                        >
                                                            {patient.appointmentTime}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div
                                                            style={{
                                                                width: '96px',
                                                                height: '38px',
                                                                padding: '6px 20px',
                                                                background: patient.appointmentType === 'Online' ? 'rgba(255, 195, 19, 0.1)' : 'rgba(86, 120, 233, 0.1)',
                                                                borderRadius: '20px',
                                                                color: patient.appointmentType === 'Online' ? '#FFC313' : '#5678EB',
                                                                fontFamily: 'Lato',
                                                                fontSize: '16px',
                                                                fontWeight: 600,
                                                                lineHeight: '21.6px',
                                                                textAlign: 'left',
                                                                display: 'flex',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                opacity: 1,
                                                            }}
                                                        >
                                                            {patient.appointmentType}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            size="small"
                                                            style={{ backgroundColor: '#F6F8FB', color: 'white' }}
                                                            onClick={() => handleOpen(patient)}
                                                            sx={{
                                                                boxShadow: 'none',
                                                                padding: '2px',
                                                                minWidth: 'auto',
                                                                marginRight: '15px',
                                                                '&:hover': {
                                                                    boxShadow: 'none',
                                                                },
                                                            }}
                                                        >
                                                            <EventBusyIcon sx={{ color: 'red', fontSize: '30px' }} />
                                                        </Button>
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            size="small"
                                                            style={{ backgroundColor: '#F6F8FB', color: 'white' }}
                                                            onClick={() => handleOpen(patient)}
                                                            sx={{
                                                                boxShadow: 'none',
                                                                padding: '2px',
                                                                minWidth: 'auto',
                                                                '&:hover': {
                                                                    boxShadow: 'none',
                                                                },
                                                            }}
                                                        >
                                                            <EventAvailableIcon sx={{ color: '#5678e9', fontSize: '30px' }} />
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </CustomTabPanel>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentManagement;

import React, { useState } from 'react';
import Navbar from '../../Comman/Navbar';
import Sidebar from '../../Comman/Sidebar';
import { Button, Box, Typography, Modal, TextField, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Avatar } from '@mui/material';
import { Tabs, Tab } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Search } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';

// Sample data for appointments
const appointments = [
    { id: 1, name: 'Marcus Philips', issues: 'Stomach Ache', doctorName: 'Dr. Mathew Best', disease: 'Viral Infection', appointmentTime: '4:30 PM', appointmentType: 'Online', profile: '/assets/img/Admin_Patient_Img/patient.jpg' },
    { id: 2, name: 'London Shaffer', issues: 'Feeling Tired', doctorName: 'Dr. Annabella Porter', disease: 'Blood Pressure', appointmentTime: '5:00 AM', appointmentType: 'Onsite', profile: '/assets/img/Admin_Patient_Img/patient.jpg' },
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

function Patient() {
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    // Filter appointments based on search term
    const filteredPatients = appointments.filter(patient =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleOpen = (patient) => {
        setSelectedPatient(patient);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedPatient(null);
    };

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar currentPage="Patient Management" />
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
                        {/* Tab Panels */}
                        {/* Today Appoinment */}
                        <CustomTabPanel value={value} index={0}>
                            <div className="p-1 min-h-screen">
                                {/* Search Bar */}
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-semibold text-black text-2xl">Today Appointment</h3>
                                    <TextField
                                        placeholder="Search Patient"
                                        size="small"
                                        className="w-full md:w-1/5 bg-customgray"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        InputProps={{
                                            startAdornment: (
                                                <Search className="mr-2 text-gray-400" />
                                            ),
                                        }}
                                    />
                                </div>

                                {/* Patient Appointment Table */}
                                <TableContainer className="rounded-lg">
                                    <Table>
                                        <TableHead className="bg-customLightBlue rounded-lg">
                                            <TableRow className='font-lato'>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Patient Name</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Patient Issues</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Doctor Name</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Disease</TableCell>
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
                                                        color: '#4F4F4F', // Text color
                                                    }}>
                                                        <div className="flex items-center">
                                                            <Avatar
                                                                src={patient.profile}
                                                                alt={patient.name}
                                                                className="mr-3"
                                                            />
                                                            <span>{patient.name}</span>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F', // Text color
                                                    }}>{patient.issues}</TableCell>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F', // Text color
                                                    }}>{patient.doctorName}</TableCell>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F', // Text color
                                                    }}>{patient.disease}</TableCell>
                                                    <TableCell
                                                        sx={{
                                                            padding: '8px 12px', // Add padding for aesthetics
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
                                                                boxShadow: 'none', // Remove shadow
                                                                padding: 'px', // Adjust padding as needed
                                                                minWidth: 'auto',
                                                                '&:hover': {
                                                                    boxShadow: 'none', // Remove shadow on hover
                                                                },
                                                            }}
                                                        >
                                                            <VisibilityIcon sx={{ color: '#0eabeb' }} />
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </CustomTabPanel>
                        {/* Upcoming Appoinment */}
                        <CustomTabPanel value={value} index={1}>
                            <div className="p-1 min-h-screen">
                                {/* Search Bar */}
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-semibold text-black text-2xl">Upcoming Appointment</h3>
                                    <TextField
                                        placeholder="Search Patient"
                                        size="small"
                                        className="w-full md:w-1/5 bg-customgray"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        InputProps={{
                                            startAdornment: (
                                                <Search className="mr-2 text-gray-400" />
                                            ),
                                        }}
                                    />
                                </div>

                                {/* Patient Appointment Table */}
                                <TableContainer className="rounded-lg">
                                    <Table>
                                        <TableHead className="bg-customLightBlue rounded-lg">
                                            <TableRow className='font-lato'>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Patient Name</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Patient Issues</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Doctor Name</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Disease</TableCell>
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
                                                        color: '#4F4F4F', // Text color
                                                    }}>
                                                        <div className="flex items-center">
                                                            <Avatar
                                                                src={patient.profile}
                                                                alt={patient.name}
                                                                className="mr-3"
                                                            />
                                                            <span>{patient.name}</span>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F', // Text color
                                                    }}>{patient.issues}</TableCell>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F', // Text color
                                                    }}>{patient.doctorName}</TableCell>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F', // Text color
                                                    }}>{patient.disease}</TableCell>
                                                    <TableCell
                                                        sx={{
                                                            padding: '8px 12px', // Add padding for aesthetics
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
                                                                boxShadow: 'none', // Remove shadow
                                                                padding: 'px', // Adjust padding as needed
                                                                minWidth: 'auto',
                                                                '&:hover': {
                                                                    boxShadow: 'none', // Remove shadow on hover
                                                                },
                                                            }}
                                                        >
                                                            <VisibilityIcon sx={{ color: '#0eabeb' }} />
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </CustomTabPanel>
                        {/* Preivious Appointment */}
                        <CustomTabPanel value={value} index={2}>
                        <div className="p-1 min-h-screen">
                                {/* Search Bar */}
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-semibold text-black text-2xl">Preivious Appointment</h3>
                                    <TextField
                                        placeholder="Search Patient"
                                        size="small"
                                        className="w-full md:w-1/5 bg-customgray"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        InputProps={{
                                            startAdornment: (
                                                <Search className="mr-2 text-gray-400" />
                                            ),
                                        }}
                                    />
                                </div>

                                {/* Patient Appointment Table */}
                                <TableContainer className="rounded-lg">
                                    <Table>
                                        <TableHead className="bg-customLightBlue rounded-lg">
                                            <TableRow className='font-lato'>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Patient Name</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Patient Issues</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Doctor Name</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Disease</TableCell>
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
                                                        color: '#4F4F4F', // Text color
                                                    }}>
                                                        <div className="flex items-center">
                                                            <Avatar
                                                                src={patient.profile}
                                                                alt={patient.name}
                                                                className="mr-3"
                                                            />
                                                            <span>{patient.name}</span>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F', // Text color
                                                    }}>{patient.issues}</TableCell>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F', // Text color
                                                    }}>{patient.doctorName}</TableCell>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F', // Text color
                                                    }}>{patient.disease}</TableCell>
                                                    <TableCell
                                                        sx={{
                                                            padding: '8px 12px', // Add padding for aesthetics
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
                                                                boxShadow: 'none', // Remove shadow
                                                                padding: 'px', // Adjust padding as needed
                                                                minWidth: 'auto',
                                                                '&:hover': {
                                                                    boxShadow: 'none', // Remove shadow on hover
                                                                },
                                                            }}
                                                        >
                                                            <VisibilityIcon sx={{ color: '#0eabeb' }} />
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </CustomTabPanel>
                        {/* Cancel Appointment */}
                        <CustomTabPanel value={value} index={3}>
                        <div className="p-1 min-h-screen">
                                {/* Search Bar */}
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-semibold text-black text-2xl">Cancel Appointment</h3>
                                    <TextField
                                        placeholder="Search Patient"
                                        size="small"
                                        className="w-full md:w-1/5 bg-customgray"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        InputProps={{
                                            startAdornment: (
                                                <Search className="mr-2 text-gray-400" />
                                            ),
                                        }}
                                    />
                                </div>

                                {/* Patient Appointment Table */}
                                <TableContainer className="rounded-lg">
                                    <Table>
                                        <TableHead className="bg-customLightBlue rounded-lg">
                                            <TableRow className='font-lato'>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Patient Name</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Patient Issues</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Doctor Name</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Disease</TableCell>
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
                                                        color: '#4F4F4F', // Text color
                                                    }}>
                                                        <div className="flex items-center">
                                                            <Avatar
                                                                src={patient.profile}
                                                                alt={patient.name}
                                                                className="mr-3"
                                                            />
                                                            <span>{patient.name}</span>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F', // Text color
                                                    }}>{patient.issues}</TableCell>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F', // Text color
                                                    }}>{patient.doctorName}</TableCell>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F', // Text color
                                                    }}>{patient.disease}</TableCell>
                                                    <TableCell
                                                        sx={{
                                                            padding: '8px 12px', // Add padding for aesthetics
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
                                                                boxShadow: 'none', // Remove shadow
                                                                padding: 'px', // Adjust padding as needed
                                                                minWidth: 'auto',
                                                                '&:hover': {
                                                                    boxShadow: 'none', // Remove shadow on hover
                                                                },
                                                            }}
                                                        >
                                                            <VisibilityIcon sx={{ color: '#0eabeb' }} />
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
                    {/* Modal for Patient Details */}
                    <Modal open={open} onClose={handleClose}>
                        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40" >
                            <div className="fixed inset-0 flex justify-center items-center z-50">
                                <Box
                                    sx={{
                                        width: 300,
                                        bgcolor: 'white',
                                        borderRadius: 2,
                                    }}
                                    className="p-4"
                                >
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-lg font-bold">Patient Details</h2>
                                        <CloseIcon
                                            onClick={handleClose}
                                            sx={{ color: 'red', cursor: 'pointer' }} // Style for close icon
                                        />
                                    </div>
                                    {selectedPatient && (
                                        <div className="mt-4 ">
                                            {/* Appointment Type */}
                                            <div className="mb-2 flex justify-between">
                                                <strong className='font-normal text-left text-costumDarkGray p-1'>Appointment Type:</strong>
                                                <span> {selectedPatient.appointmentType}</span>
                                            </div>

                                            {/* Appointment Date */}
                                            <div className="mb-2 flex justify-between">
                                                <strong className='font-normal text-left text-costumDarkGray p-1'>Appointment Date:</strong>
                                            </div>

                                            {/* Appointment Time */}
                                            <div className="mb-2 flex justify-between">
                                                <strong className='font-normal text-left text-costumDarkGray p-1'>Appointment Time:</strong>
                                                <span>{selectedPatient.appointmentTime}</span>
                                            </div>

                                            {/* Patient Name */}
                                            <div className="mb-2 flex justify-between">
                                                <strong className='font-normal text-left text-costumDarkGray p-1'>Patient Name:</strong>
                                                <span> {selectedPatient.name}</span>
                                            </div>

                                            {/* Patient Phone No */}
                                            <div className="mb-2 flex justify-between">
                                                <strong className='font-normal text-left text-costumDarkGray p-1'>Patient Phone No:</strong> {/* Add phone number here */}
                                            </div>

                                            {/* Patient Age */}
                                            <div className="mb-2 flex justify-between">
                                                <strong className='font-normal text-left text-costumDarkGray p-1'>Patient Age:</strong> {/* Add age here */}
                                            </div>

                                            {/* Patient Gender */}
                                            <div className="mb-2 flex justify-between">
                                                <strong className='font-normal text-left text-costumDarkGray p-1'>Patient Gender:</strong> {/* Add gender here */}
                                            </div>

                                            {/* Patient Issue */}
                                            <div className="mb-2 flex justify-between">
                                                <strong className='font-normal text-left text-costumDarkGray p-1'>Patient Issue:</strong>
                                                <span>{selectedPatient.issues}</span>
                                            </div>

                                            {/* Disease Name */}
                                            <div className="mb-2 flex justify-between">
                                                <strong className='font-normal text-left text-costumDarkGray p-1'>Disease Name:</strong>
                                                <span>{selectedPatient.disease}</span>
                                            </div>

                                            {/* Doctor Name */}
                                            <div className="mb-2 flex justify-between">
                                                <strong className='font-normal text-left text-costumDarkGray p-1'>Doctor Name:</strong>
                                                <span>{selectedPatient.disease}</span>
                                            </div>

                                            {/* Doctor Name */}
                                            <div className="mb-2">
                                                <strong className='font-normal text-left text-costumDarkGray p-1'>Doctor Address:</strong>
                                                <span>{selectedPatient.appointmentTime}</span>
                                            </div>
                                        </div>
                                    )}
                                </Box>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Patient;

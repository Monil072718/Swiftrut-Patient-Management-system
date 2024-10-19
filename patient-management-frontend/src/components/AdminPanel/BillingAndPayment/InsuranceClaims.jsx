import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Comman/Sidebar';
import Navbar from '../../Comman/Navbar';
import { Button, Box, Typography, Modal, TextField, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Avatar } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Search } from '@mui/icons-material';

const appointments = [
    { id: 1, billNo: 5654, doctorName: 'Marcus Philips', patientName: 'Stomach Ache', diseaseName: 'Dr. Mathew Best', insurance: 'HDFC Life Insurance', insurancePlan: 'Maternity', billDate: '2 JUNE,2024', profile: '/assets/img/Admin_Patient_Img/patient.jpg' },
    { id: 2, billNo: 5654, doctorName: 'London Shaffer', patientName: 'Feeling Tired', diseaseName: 'Dr. Annabella Porter', insurance: 'LIC Life Insurance', insurancePlan: 'Health', billDate: '6 AUG,2022', profile: '/assets/img/Admin_Patient_Img/patient.jpg' },
    // Add more appointments as needed
];

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


const InsuranceClaims = () => {

    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    // Filter appointments based on search term
    const filteredPatients = appointments.filter(patient =>
        patient.patientName.toLowerCase().includes(searchTerm.toLowerCase())
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
        <div className="main">
            <div className="flex h-screen">
                <Sidebar />
                <div className="flex-1 flex flex-col shadow-none">
                    <Navbar currentPage="Billing & Payment" />
                    <Box sx={{ width: '100%' }}>
                        <CustomTabPanel >
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
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Bill Number</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Doctor Name</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Patient Name</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Disease Name</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Insurance Company</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Insurance Plan</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Bill Date</TableCell>
                                                <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Action</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {filteredPatients.map((patient) => (
                                                <TableRow key={patient.id}>
                                                    <TableCell sx={{ fontFamily: 'Lato', fontSize: '16px', fontWeight: 600 }}>
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
                                                            {patient.billNo}
                                                        </div>
                                                    </TableCell>
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
                                                                alt={patient.doctorName}
                                                                className="mr-3"
                                                            />
                                                            <span>{patient.doctorName}</span>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F', // Text color
                                                    }}>
                                                        {patient.patientName}
                                                    </TableCell>
                                                    <TableCell sx={{
                                                        fontFamily: 'Lato',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '21.6px',
                                                        textAlign: 'left',
                                                        color: '#4F4F4F', // Text color
                                                    }}>
                                                        {patient.diseaseName}
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{
                                                            fontFamily: 'Lato',
                                                            fontSize: '16px',
                                                            fontWeight: 600,
                                                            lineHeight: '21.6px',
                                                            textAlign: 'left',
                                                            color: '#4F4F4F', // Text color
                                                        }}>
                                                        {patient.insurance}
                                                    </TableCell>
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
                                                            {patient.insurancePlan}
                                                        </div>
                                                    </TableCell>



                                                    <TableCell>
                                                        <div
                                                            style={{
                                                                padding: '8px 12px',
                                                                color: '#4F4F4F',
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
                                                            {patient.billDate}
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
                                                                padding: 'px',
                                                                minWidth: 'auto',
                                                                '&:hover': {
                                                                    boxShadow: 'none', 
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
                </div>
            </div>
        </div >
    )
}

export default InsuranceClaims;

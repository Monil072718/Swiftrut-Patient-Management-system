import React, { useState } from "react";
import DoctorSidebar from "./DoctorSidebar";
import DoctorNavbar from "./DoctorNavbar";
import { useNavigate } from "react-router-dom";
import { Box, Button, InputBase, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Select, MenuItem, InputLabel, FormControl, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Tooltip from '@mui/material/Tooltip';
import MaleIcon from '@mui/icons-material/Male'; // Import MaleIcon
import FemaleIcon from '@mui/icons-material/Female'; // Import FemaleIcon

const PatientRecord = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPatient, setSelectedPatient] = useState(null);
    const patientData = [
        { id: 1, name: "Alfredo Vaccaro", disease: "Colds and Flu", issue: "Feeling Tired", date: "2 Jan, 2022", age: "22 Years", gender: 'Male', time: "4:30 PM" },
        { id: 2, name: "Talan Press", disease: "Conjunctivitis", issue: "Stomach Ache", date: "5 Jan, 2022", age: "5 years", gender: 'Female', time: "4:30 PM" },
        // Add more data
    ];

    const handleOpen = (patient) => {
        setSelectedPatient(patient);
        console.log("Viewing details for patient:", patient);
    };

    // Filter patients based on search query
    const filteredPatients = patientData.filter(pat =>
        pat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pat.disease.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pat.issue.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex h-screen overflow-hidden">
            <DoctorSidebar />
            <div className="flex-1 flex flex-col">
                <DoctorNavbar />
                <Box className="p-6" sx={{ width: '100%' }}>
                    <div className="p-6 bg-white shadow rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex-1">
                                <h2 className="text-2xl font-semibold">Patient Record Access</h2>
                            </div>

                            {/* Search Input */}
                            <div className="flex items-center bg-[#f6f8fb] rounded-full mr-4">
                                <InputBase
                                    placeholder="Search Patient..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    startAdornment={<SearchIcon className="mx-2" />}
                                    sx={{ padding: '0.5rem' }}
                                />
                            </div>
                            {/* Buttons */}
                            <div className="flex space-x-4 ml-4">
                                <FormControl variant="outlined" sx={{ minWidth: 120, border: '1px solid #D3D3D3', borderRadius: '6px' }}>
                                    <Select
                                        labelId="time-period-label"
                                        id="time-period"
                                        defaultValue="month"
                                        IconComponent={KeyboardArrowDownIcon}
                                        sx={{
                                            borderRadius: '6px',
                                            '& .MuiSelect-select': {
                                                padding: '10px 32px 10px 12px',
                                            },
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: '#D3D3D3',
                                            },
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                borderColor: '#D3D3D3',
                                            },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                borderColor: '#D3D3D3',
                                            },
                                            color: '#000',
                                            fontWeight: '600',
                                        }}
                                    >
                                        <MenuItem
                                            value="day"
                                            sx={{
                                                py: 1,
                                                px: 2,
                                                fontFamily: 'Lato',
                                                '&.Mui-selected': {
                                                    color: '#0EABEB',
                                                    backgroundColor: 'transparent',
                                                },
                                            }}>
                                            Day
                                        </MenuItem>
                                        <MenuItem
                                            value="week"
                                            sx={{
                                                py: 1,
                                                px: 2,
                                                fontFamily: 'Lato',
                                                '&.Mui-selected': {
                                                    color: '#0EABEB',
                                                    backgroundColor: 'transparent',
                                                },
                                            }}>
                                            Week
                                        </MenuItem>
                                        <MenuItem
                                            value="month"
                                            sx={{
                                                py: 1,
                                                px: 2,
                                                fontFamily: 'Lato',
                                                '&.Mui-selected': {
                                                    color: '#0EABEB',
                                                    backgroundColor: 'transparent',
                                                },
                                            }}
                                        >
                                            Month
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <TableContainer className="rounded-lg">
                            <Table>
                                <TableHead className="bg-customLightBlue rounded-lg">
                                    <TableRow>
                                        <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, textAlign: 'left', color: '#030229' }}>Patient Name</TableCell>
                                        <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, textAlign: 'left', color: '#030229' }}>Disease Name</TableCell>
                                        <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, textAlign: 'left', color: '#030229' }}>Patient Issue</TableCell>
                                        <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, textAlign: 'left', color: '#030229' }}>Last Appointment Date</TableCell>
                                        <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, textAlign: 'left', color: '#030229' }}>Last Appointment Time</TableCell>
                                        <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, textAlign: 'left', color: '#030229' }}>Age</TableCell>
                                        <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, textAlign: 'left', color: '#030229' }}>Gender</TableCell>
                                        <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, textAlign: 'left', color: '#030229' }}>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredPatients.map((patient) => (
                                        <TableRow key={patient.id}>
                                            <TableCell sx={{ fontFamily: 'Lato', fontSize: '16px', fontWeight: 600 }}>{patient.name}</TableCell>
                                            <TableCell sx={{ fontFamily: 'Lato', fontSize: '16px', fontWeight: 600 }}>{patient.disease}</TableCell>
                                            <TableCell sx={{ fontFamily: 'Lato', fontSize: '16px', fontWeight: 600 }}>{patient.issue}</TableCell>
                                            <TableCell sx={{ fontFamily: 'Lato', fontSize: '16px', fontWeight: 600 }}>{patient.date}</TableCell>
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
                                                    {patient.time}
                                                </div>
                                            </TableCell>
                                            <TableCell sx={{ fontFamily: 'Lato', fontSize: '16px', fontWeight: 600 }}>{patient.age}</TableCell>
                                            <TableCell sx={{ fontFamily: 'Lato', fontSize: '16px', fontWeight: 600 }}>{patient.gender}</TableCell>
                                            
                                            <TableCell>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    size="small"
                                                    style={{ backgroundColor: '#F6F8FB', color: 'white' }}
                                                    onClick={() => handleOpen(patient)}
                                                    sx={{
                                                        boxShadow: 'none',
                                                        padding: '8px',
                                                        minWidth: 'auto',
                                                        '&:hover': {
                                                            boxShadow: 'none',
                                                        },
                                                    }}
                                                >
                                                    <VisibilityIcon />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Box>
            </div>
        </div>
    );
};

export default PatientRecord;

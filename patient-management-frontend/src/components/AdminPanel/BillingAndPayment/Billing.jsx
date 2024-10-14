import React, { useState } from 'react';
import Sidebar from '../../Comman/Sidebar';
import Navbar from '../../Comman/Navbar';
import { Avatar, Box, Button, InputBase, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

function Billing() {

    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBill, setSelectedBill] = useState(null);


    const billData = [
        { id: 1, billNumber: 5654, name: "Alfredo Vaccaro", disease: "Colds and Flu", phone: "89564 25462", status: "Paid", date: "2 Jan, 2022", time: "4:30 PM" },
        { id: 2, billNumber: 5654, name: "Talan Press", disease: "Conjunctivitis", phone: "89564 25462", status: "Unpaid", date: "25 Jan, 2022", time: "4:30 PM" },
        // Add more data
    ];

    const handleOpen = (bill) => {
        setSelectedBill(bill);
        console.log("Viewing details for bill:", bill);
    };

    const filteredBills = billData.filter(bill =>
        bill.billNumber.toString().includes(searchQuery) ||
        bill.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar currentPage="Billing & Payment" />
                <Box className="p-6" sx={{ width: '100%' }}>
                    <div className="p-6 bg-white shadow rounded-lg">
                        {/* Search Bar and Buttons */}
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex-1">
                                <h2 className="text-2xl font-semibold">Monitor Billing</h2>
                            </div>

                            {/* Search Input */}
                            <div className="flex items-center bg-[#f6f8fb] rounded-full mr-4">
                                <InputBase
                                    placeholder="Search by Bill Number, Status..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    startAdornment={<SearchIcon className="mx-2" />}
                                    sx={{ padding: '0.5rem' }}
                                />
                            </div>
                            {/* Buttons */}
                            <div className="flex space-x-4 ml-4">
                                <Button
                                    startIcon={<DriveFileRenameOutlineIcon sx={{ color: '#0eabeb' }} />}
                                    sx={{
                                        border: '1px solid #0eabeb',
                                        color: '#0eabeb',
                                        fontWeight: '600',
                                        padding: '8px 16px',
                                        borderRadius: '6px',
                                    }}
                                >
                                    Edit Design Invoice
                                </Button>
                                <Button
                                    startIcon={<AddIcon />}
                                    onClick={() => navigate('/Createbill')} 
                                    sx={{
                                        backgroundColor: '#0eabeb',
                                        color: 'white',
                                        fontWeight: '600',
                                        padding: '8px 16px',
                                        borderRadius: '6px',
                                    }}
                                >
                                    Create Bills
                                </Button>
                            </div>
                        </div>
                        {/* Table */}
                        <TableContainer className="rounded-lg">
                            <Table>
                                <TableHead className="bg-customLightBlue rounded-lg">
                                    <TableRow>
                                        <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, textAlign: 'left', color: '#030229' }}>Bill Number</TableCell>
                                        <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, textAlign: 'left', color: '#030229' }}>Patient Name</TableCell>
                                        <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, textAlign: 'left', color: '#030229' }}>Disease</TableCell>
                                        <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, textAlign: 'left', color: '#030229' }}>Phone</TableCell>
                                        <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, textAlign: 'left', color: '#030229' }}>Status</TableCell>
                                        <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, textAlign: 'left', color: '#030229' }}>Date</TableCell>
                                        <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, textAlign: 'left', color: '#030229' }}>Time</TableCell>
                                        <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, textAlign: 'left', color: '#030229' }}>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredBills.map((bill) => (
                                        <TableRow key={bill.id}>
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
                                                    {bill.billNumber}
                                                </div>
                                            </TableCell>
                                            <TableCell sx={{ fontFamily: 'Lato', fontSize: '16px', fontWeight: 600 }}>{bill.name}</TableCell>
                                            <TableCell sx={{ fontFamily: 'Lato', fontSize: '16px', fontWeight: 600 }}>{bill.disease}</TableCell>
                                            <TableCell sx={{ fontFamily: 'Lato', fontSize: '16px', fontWeight: 600 }}>{bill.phone}</TableCell>
                                            <TableCell>
                                                <div
                                                    style={{
                                                        backgroundColor: bill.status === 'Paid' ? 'rgba(57, 151, 61, 0.1)' : 'rgba(225, 29, 41, 0.1)', 
                                                        borderRadius: '12px',
                                                        padding: '8px 12px',
                                                        color: bill.status === 'Paid' ? '#39973D' : '#E11D29', 
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
                                                    {bill.status}
                                                </div>
                                            </TableCell>
                                            <TableCell sx={{ fontFamily: 'Lato', fontSize: '16px', fontWeight: 600 }}>{bill.date}</TableCell>
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
                                                    {bill.time}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    size="small"
                                                    style={{ backgroundColor: '#F6F8FB', color: 'white' }}
                                                    onClick={() => handleOpen(bill)}
                                                    sx={{
                                                        boxShadow: 'none', 
                                                        padding: '8px', 
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
                </Box>
            </div>
        </div>
    );
}

export default Billing;

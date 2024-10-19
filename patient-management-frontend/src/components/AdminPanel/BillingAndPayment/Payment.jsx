import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon } from '@mui/icons-material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, InputBase, Button, Avatar, Box, Modal, TextField, Typography } from '@mui/material';
import { Edit as EditIcon, Visibility as ViewIcon, Payment as PaymentIcon } from '@mui/icons-material';
import Navbar from '../../Comman/Navbar';
import Sidebar from '../../Comman/Sidebar';

const Payment = () => {

    const [billData, setBillData] = useState([
        { id: 1, billNumber: 5654, name: "Alfredo Vaccaro", disease: "Colds and Flu", phone: "89564 25462", status: "Paid", date: "2 Jan, 2022", time: "4:30 PM" },
        { id: 2, billNumber: 5654, name: "Talan Press", disease: "Conjunctivitis", phone: "89564 25462", status: "Unpaid", date: "25 Jan, 2022", time: "4:30 PM" },
        // Add more data
    ]);
    
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBill, setSelectedBill] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [amount, setAmount] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('Unpaid');
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleOpenModal = (bill) => {
        setSelectedBill(bill);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setAmount('');
        setSelectedBill(null);
    };

    const handleOpen = (bill) => {
        navigate(`/bill-details/${bill.id}`, { state: { bill } });
    };

    const handleAmountChange = (e) => setAmount(e.target.value);

    const handlePay = () => {
        if (amount > 0) {
            const updatedBills = billData.map((bill) =>
                bill.id === selectedBill.id ? { ...bill, status: "Paid" } : bill
            );
            setBillData(updatedBills); // Update the state with new status
        }
        setModalOpen(false);
    };

    const handleEditBill = (bill) => {

        navigate('/editbill/');
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // const handleOpen = (bill) => {
    //     setSelectedBill(bill);
    //     console.log("Viewing details for bill:", bill);
    // };

    const filteredBills = billData.filter(bill =>
        bill.billNumber.toString().includes('') ||
        bill.status.toLowerCase().includes('') ||
        bill.name.toLowerCase().includes('')
    );

    return (
        <div className="main">
            <div className="flex h-screen">
                <Sidebar />

                <div className="flex-1 flex flex-col shadow-none">
                    <Navbar currentPage="Billing & Payment" />
                    <Box className="p-6" sx={{ width: '100%' }}>
                        <div className="p-6 bg-white shadow rounded-lg">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex-1">
                                    <h2 className="text-2xl font-semibold">Billing Details</h2>
                                </div>

                                {/* Search Input */}
                                <div className="flex items-center bg-[#f6f8fb] rounded-full mr-4">
                                    <InputBase
                                        placeholder="Quick Search..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        startAdornment={<SearchIcon className="mx-2" />}
                                        sx={{ padding: '0.5rem' }}
                                    />
                                </div>
                            </div>
                            {/* MUI Table with Tailwind for custom styling */}
                            <TableContainer className="rounded-lg">
                                <Table >
                                    <TableHead className="bg-customLightBlue rounded-lg">
                                        <TableRow className='font-lato'>
                                            <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Bill Number</TableCell>
                                            <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Patient Name</TableCell>
                                            <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Disease Name</TableCell>
                                            <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Phone Number</TableCell>
                                            <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Status</TableCell>
                                            <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Date</TableCell>
                                            <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Time</TableCell>
                                            <TableCell sx={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', textAlign: 'left', color: '#030229' }}>Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {filteredBills.map((bill, index) => (
                                            <TableRow key={bill.id} className="border-b border-gray-200 hover:bg-gray-50">
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
                                                <Modal open={modalOpen} onClose={handleCloseModal} aria-labelledby="modal-title" aria-describedby="modal-description" sx={{ backdropFilter: 'blur(4px)' }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        top: '50%',
                                                        left: '50%',
                                                        transform: 'translate(-50%, -50%)',
                                                        width: 400,
                                                        bgcolor: 'background.paper',
                                                        p: 4,
                                                        borderRadius: 2,
                                                        boxShadow: 24,
                                                    }}>
                                                        <Typography id="modal-title" variant="h6" component="h2" sx={{
                                                            fontFamily: 'Lato',
                                                            fontSize: '20px',
                                                            fontWeight: 700,
                                                            color: '#030229',
                                                            
                                                        }}>
                                                            Cash Payment
                                                        </Typography>
                                                        <TextField
                                                            label="Enter Amount"
                                                            type="number"
                                                            placeholder=''
                                                            fullWidth
                                                            variant="outlined"
                                                            value={amount}
                                                            onChange={(e) => setAmount(e.target.value)}
                                                            sx={{ marginBottom: '20px', marginTop: '20px' }}
                                                            required
                                                            InputLabelProps={{
                                                                shrink: true,
                                                                style: {
                                                                    textDecoration: 'none',
                                                                    color: 'inherit',
                                                                    fontWeight: '600',
                                                                    fontFamily: 'lato'
                                                                },
                                                            }}
                                                        />

                                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                            <Button
                                                                variant="contained"
                                                                color="fff"
                                                                onClick={handleClose}
                                                                sx={{ width: '48%', border: '2px', fontFamily: 'lato', fontWeight: '600', boxShadow: 'none' }}
                                                            >
                                                                Cancel
                                                            </Button>
                                                            <Button
                                                                variant="contained"
                                                                color="primary"
                                                                onClick={handlePay}
                                                                sx={{
                                                                    width: '48%',
                                                                    fontFamily: 'lato',
                                                                    fontWeight: '600',
                                                                    backgroundColor: amount ? '#0EABEB' : '#F6F8FB',
                                                                    boxShadow: 'none',
                                                                    color: amount ? 'white' : 'black',
                                                                    '&:hover': {
                                                                        backgroundColor: amount ? '#0C98D1' : '#F6F8FB',
                                                                    },
                                                                }}
                                                            >
                                                                Pay
                                                            </Button>
                                                        </Box>

                                                    </Box>
                                                </Modal>

                                                <TableCell className="px-4 py-2 flex space-x-2">
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        size="small"
                                                        style={{ backgroundColor: '#fff', color: 'white' }}
                                                        onClick={() => handleEditBill(bill)}
                                                        sx={{
                                                            boxShadow: 'none',
                                                            padding: '8px',
                                                            minWidth: 'auto',
                                                            '&:hover': {
                                                                boxShadow: 'none',
                                                            },
                                                        }}
                                                    >
                                                        <EditIcon sx={{ color: '#39973d' }} />
                                                    </Button>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        size="small"
                                                        style={{ backgroundColor: '#fff', color: 'white' }}
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
                                                        <ViewIcon sx={{ color: '#0EABEB' }} />
                                                    </Button>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        size="small"
                                                        style={{ backgroundColor: '#F6F8FB', color: 'white' }}
                                                        onClick={() => handleOpenModal(bill)}
                                                        sx={{
                                                            boxShadow: 'none',
                                                            padding: '8px',
                                                            fontFamily: 'lato',
                                                            fontWeight: '600',
                                                            minWidth: 'auto',
                                                            '&:hover': {
                                                                boxShadow: 'none',
                                                            },
                                                        }}
                                                    >
                                                        <PaymentIcon sx={{ color: '#818194' }} />
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
        </div>
    );
};

export default Payment;

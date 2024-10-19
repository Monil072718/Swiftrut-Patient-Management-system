import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Comman/Sidebar';
import Navbar from '../../Comman/Navbar';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const EditBill = () => {

    const [billDetails, setBillDetails] = useState({
        patientName: '',
        phoneNumber: '',
        gender: '',
        age: '',
        doctorName: '',
        diseaseName: '',
        description: '',
        paymentType: '',
        billDate: '',
        billTime: '',
        billNumber: '',
        discount: '',
        tax: '',
        amount: '',
        totalAmount: '',
        address: ''
    });

    useEffect(() => {
        // Fetch the bill data from API or state
        // Example:
        const fetchedBill = {
            patientName: 'John Doe',
            phoneNumber: '1234567890',
            gender: 'Male',
            age: '30',
            doctorName: 'Dr. Smith',
            diseaseName: 'Flu',
            description: 'Severe cold and cough',
            paymentType: 'Online',
            billDate: '2024-10-16',
            billTime: '10:30 AM',
            billNumber: 'INV00123',
            discount: '10%',
            tax: '5%',
            amount: '500',
            totalAmount: '550',
            address: '123 Main St, City'
        };
        setBillDetails(fetchedBill);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBillDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleSave = () => {
        // Handle the save action, maybe an API call to update the bill details
        console.log('Bill details saved', billDetails);
    };

    return (
        <div className="main">
            <div className="flex h-screen">
                <Sidebar />
                <div className="flex-1 flex flex-col shadow-none">
                    <Navbar currentPage="Billing & Payment" />
                    <Box className="p-6" sx={{ width: '100%' }}>
                        <div className="p-6 bg-white shadow rounded-lg">
                            <h3 className="text-2xl font-semibold mb-10" sx={{ fontWeight: '600', fontFamily: 'lato' }}>Edit Bill</h3>
                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(4, 1fr)',
                                    gap: 4
                                }}
                            >
                                <TextField
                                    label="Patient Name"
                                    name="patientName"
                                    value={billDetails.patientName}
                                    onChange={handleChange}
                                    fullWidth
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
                                <TextField
                                    label="Phone Number"
                                    name="phoneNumber"
                                    value={billDetails.phoneNumber}
                                    onChange={handleChange}
                                    fullWidth
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
                                <FormControl fullWidth required>
                                    <InputLabel
                                        shrink
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                            fontWeight: '600',
                                            fontFamily: 'Lato',
                                        }}
                                    >
                                        Gender
                                    </InputLabel>
                                    <Select
                                        name="gender"
                                        value={billDetails.gender}
                                        onChange={handleChange}
                                        fullWidth
                                        inputProps={{
                                            style: {
                                                fontFamily: 'Lato',
                                            },
                                        }}
                                        sx={{
                                            '.MuiOutlinedInput-notchedOutline': {
                                                borderRadius: '8px',
                                            },
                                            '& .MuiSelect-select': {
                                                borderRadius: '8px',
                                            },
                                            '& .MuiMenu-paper': {
                                                borderRadius: '12px',
                                                maxHeight: '150px',
                                            },
                                        }}
                                        MenuProps={{
                                            PaperProps: {
                                                sx: {
                                                    borderRadius: '12px',
                                                    border: '1px solid #D1D5DB',
                                                    maxHeight: '150px',
                                                },
                                            },
                                        }}
                                    >
                                        <MenuItem
                                            value="male"
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
                                            Male
                                        </MenuItem>
                                        <MenuItem
                                            value="female"
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
                                            Female
                                        </MenuItem>
                                        <MenuItem
                                            value="other"
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
                                            Other
                                        </MenuItem>
                                    </Select>
                                </FormControl>

                                <TextField
                                    label="Age"
                                    name="age"
                                    value={billDetails.age}
                                    onChange={handleChange}
                                    fullWidth
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
                                <TextField
                                    label="Doctor Name"
                                    name="doctorName"
                                    value={billDetails.doctorName}
                                    onChange={handleChange}
                                    fullWidth
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
                                <TextField
                                    label="Disease Name"
                                    name="diseaseName"
                                    value={billDetails.diseaseName}
                                    onChange={handleChange}
                                    fullWidth
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
                                <TextField
                                    label="Description"
                                    name="description"
                                    value={billDetails.description}
                                    onChange={handleChange}
                                    fullWidth
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
                                <FormControl fullWidth required>
                                    <InputLabel
                                        shrink
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                            fontWeight: '600',
                                            fontFamily: 'Lato',
                                        }}
                                    >
                                        Payment Type
                                    </InputLabel>
                                    <Select
                                        name="paymentType"
                                        value={billDetails.paymentType}
                                        onChange={handleChange}
                                        fullWidth
                                        inputProps={{
                                            style: {
                                                fontFamily: 'Lato',
                                            },
                                        }}
                                        sx={{
                                            '.MuiOutlinedInput-notchedOutline': {
                                                borderRadius: '8px',
                                            },
                                            '& .MuiSelect-select': {
                                                borderRadius: '8px',
                                            },
                                            '& .MuiMenu-paper': {
                                                borderRadius: '12px',
                                                maxHeight: '150px',
                                            },
                                        }}
                                        MenuProps={{
                                            PaperProps: {
                                                sx: {
                                                    borderRadius: '12px',
                                                    border: '1px solid #D1D5DB',
                                                    maxHeight: '150px',
                                                },
                                            },
                                        }}
                                    >
                                        <MenuItem
                                            value="Online"
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
                                            Online
                                        </MenuItem>
                                        <MenuItem
                                            value="Cash"
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
                                            Cash
                                        </MenuItem>
                                        <MenuItem
                                            value="Insurance"
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
                                            Insurance
                                        </MenuItem>
                                    </Select>
                                </FormControl>


                                <TextField
                                    label="Bill Date"
                                    name="billDate"
                                    value={billDetails.billDate}
                                    onChange={handleChange}
                                    fullWidth
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
                                <TextField
                                    label="Bill Time"
                                    name="billTime"
                                    value={billDetails.billTime}
                                    onChange={handleChange}
                                    fullWidth
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
                                <TextField
                                    label="Bill Number"
                                    name="billNumber"
                                    value={billDetails.billNumber}
                                    onChange={handleChange}
                                    fullWidth
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
                                <TextField
                                    label="Discount"
                                    name="discount"
                                    value={billDetails.discount}
                                    onChange={handleChange}
                                    fullWidth
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
                                <TextField
                                    label="Tax"
                                    name="tax"
                                    value={billDetails.tax}
                                    onChange={handleChange}
                                    fullWidth
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
                                <TextField
                                    label="Amount"
                                    name="amount"
                                    value={billDetails.amount}
                                    onChange={handleChange}
                                    fullWidth
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
                                <TextField
                                    label="Total Amount"
                                    name="totalAmount"
                                    value={billDetails.totalAmount}
                                    onChange={handleChange}
                                    fullWidth
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
                                <TextField
                                    label="Address"
                                    name="address"
                                    value={billDetails.address}
                                    onChange={handleChange}
                                    fullWidth
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
                            </Box>
                            <Button
                                variant="contained"
                                onClick={handleSave}
                                sx={{ mt: 3, backgroundColor: "#0EABEB", fontFamily: 'lato', fontWeight: '600', color: "fff" }}
                            >
                                Save
                            </Button>
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default EditBill;
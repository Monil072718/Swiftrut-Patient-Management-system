import React, { useState } from 'react';
import Sidebar from '../../Comman/Sidebar';
import Navbar from '../../Comman/Navbar';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';  // Import AddIcon

const CreateBill = () => {

    const [allDetails, setAllDetails] = useState({
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
        address: '',
    });

    const [selectedFile, setSelectedFile] = useState(null); // Move these outside allDetails
    const [hovered, setHovered] = useState(false);
    const [showInvoiceTheme, setShowInvoiceTheme] = useState(false);

    const handlePatientChange = (event) => {
        const { name, value } = event.target;
        setAllDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const handleButtonClick = () => {
        setShowInvoiceTheme(!showInvoiceTheme);
    };

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar currentPage="Billing & Payment" />
                <Box className="p-6" sx={{ width: '100%' }}>
                    <div className="p-6 bg-white shadow rounded-lg">
                        <div className="flex justify-between items-center mb-0">
                            <h2 className="text-2xl font-semibold">Create Bill</h2>
                        </div>
                    </div>
                    <Box className="p-6 bg-white shadow rounded-lg">
                        <div className="grid grid-cols-10 gap-6 items-start">
                            <div className="col-span-10 grid grid-cols-12  gap-4">
                                {/* Row-1 */}
                                <TextField
                                    className="col-span-3"
                                    fullWidth
                                    label="Patient Name"
                                    name="patientName"
                                    value={allDetails.patientName}  // Fix here
                                    onChange={handlePatientChange}
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                        style: {
                                            textDecoration: 'none',
                                            color: '#000',
                                            fontWeight: '600',
                                            fontFamily: 'lato'
                                        },
                                    }}
                                />
                                <TextField
                                    className="col-span-3"
                                    fullWidth
                                    label="Phone Number"
                                    name="phoneNumber"
                                    value={allDetails.phoneNumber}  // Fix here
                                    onChange={handlePatientChange}
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                        style: {
                                            textDecoration: 'none',
                                            color: '#000',
                                            fontWeight: '600',
                                            fontFamily: 'lato'
                                        },
                                    }}
                                />
                                <FormControl className='col-span-3' fullWidth required>
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
                                        value={allDetails.gender}
                                        onChange={handlePatientChange}
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
                                    className="col-span-3"
                                    fullWidth
                                    label="Age"
                                    name="age"
                                    value={allDetails.age}  // Fix here
                                    onChange={handlePatientChange}
                                    variant="outlined"
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
                                {/* Continue with the rest of your form... */}
                            </div>
                        </div>
                    </Box>
                </Box>
            </div>
        </div>
    );
}

export default CreateBill;

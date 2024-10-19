import React, { useState } from 'react'
import Sidebar from '../../Comman/Sidebar';
import Navbar from '../../Comman/Navbar';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

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
    const [selectedFile, setSelectedFile] = useState(null);
    const [hovered, setHovered] = useState(false);
    const [showInvoiceTheme, setShowInvoiceTheme] = useState(false); // Define showInvoiceTheme
    const [hospitalDetails, setHospitalDetails] = useState({
        hospitalName: '',
        text: '',
        billNumber: '',
        billDate: '',
        billTime: '',
        billNumber: '',
        discount: '',
        tax: '',
        amount: '',
        totalAmount: '',
        address: '',
    });

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

    const handleButtonClick = () => { // Define handleButtonClick
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
                                    value={setAllDetails.patientName}
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
                                    value={setAllDetails.phoneNumber}
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
                                    value={setAllDetails.age}
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
                                {/* Row-2 */}
                                <TextField
                                    className="col-span-3"
                                    fullWidth
                                    label="Doctor Name"
                                    name="doctorName"
                                    value={setAllDetails.doctorName}
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
                                <TextField
                                    className="col-span-3"
                                    fullWidth
                                    label="Disease Name"
                                    name="diseaseName"
                                    value={setAllDetails.diseaseName}
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
                                <TextField
                                    className="col-span-3"
                                    fullWidth
                                    label="Description"
                                    name="description"
                                    value={setAllDetails.description}
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
                                        Payment Type
                                    </InputLabel>
                                    <Select
                                        name="paymentType"
                                        value={allDetails.paymentType}
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
                                {/* Row-3 */}
                                <TextField
                                    className="col-span-3"
                                    fullWidth
                                    label="Bill Date"
                                    name="billDate"
                                    value={setAllDetails.billDate}
                                    onChange={handlePatientChange}
                                    type="date"
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
                                <TextField
                                    className="col-span-3"
                                    fullWidth
                                    label="Bill Time"
                                    name="billTime"
                                    value={setAllDetails.billTime}
                                    onChange={handlePatientChange}
                                    type="time"
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
                                <TextField
                                    className="col-span-3"
                                    fullWidth
                                    label="Bill Number"
                                    name="billNumber"
                                    value={setAllDetails.billNumber}
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
                                <TextField
                                    className="col-span-3"
                                    fullWidth
                                    label="Discount"
                                    name="discount"
                                    value={setAllDetails.discount}
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
                                {/* Row-4 */}
                                <TextField
                                    className="col-span-3"
                                    fullWidth
                                    label="Tax"
                                    name="tax"
                                    value={setAllDetails.tax}
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
                                <TextField
                                    className="col-span-3"
                                    fullWidth
                                    label="Amount"
                                    name="amount"
                                    value={setAllDetails.amount}
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
                                <TextField
                                    className="col-span-3"
                                    fullWidth
                                    label="Total Amount"
                                    name="totalAmount"
                                    value={setAllDetails.totalAmount}
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
                                <TextField
                                    className="col-span-3"
                                    fullWidth
                                    label="Address"
                                    name="address"
                                    value={setAllDetails.address}
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

                            </div>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                style={{ backgroundColor: '#0EABEB' }}
                            >
                                Save
                            </Button>
                        </div>
                    </Box>
                        <div className="flex justify-between items-center mb-9">
                            <h2 className="text-2xl font-semibold">Edit Invoice Design</h2>
                            {!showInvoiceTheme ? (
                                <>
                                    <h2 className="text-2xl font-semibold">Create Bill</h2>
                                    <form>
                                        {/* Form fields like name, email, etc. */}
                                    </form>
                                    <div className="flex justify-between items-center mb-9">
                                        <h2 className="text-2xl font-semibold">Edit Invoice Design</h2>
                                        <Button
                                            startIcon={<AddIcon sx={{ color: '#fff' }} />}
                                            sx={{
                                                border: '1px solid #0eabeb',
                                                color: '#fff',
                                                fontWeight: '600',
                                                padding: '8px 16px',
                                                borderRadius: '6px',
                                                backgroundColor: '#0eabeb',
                                            }}
                                            onClick={handleButtonClick}
                                        >
                                            Change Invoice Theme
                                        </Button>
                                    </div>
                                </>
                            ) : (
                                <div>
                                    <h2>Select Invoice Theme</h2>
                                    <div className="invoice-templates flex justify-between">
                                        <div className="template-card">
                                            <img src="/path/to/template-image1.png" alt="Template 1" />
                                            <Button variant="contained" color="primary">
                                                Choose Template
                                            </Button>
                                        </div>
                                        <div className="template-card">
                                            <img src="/path/to/template-image2.png" alt="Template 2" />
                                            <Button variant="contained" color="primary">
                                                Choose Template
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <h6 className="text-xl font-semibold">Hospital Details</h6>
                            <Button
                                startIcon={<AddIcon sx={{ color: '#fff' }} />}
                                sx={{
                                    border: '1px solid #0eabeb',
                                    color: '#fff',
                                    fontWeight: '600',
                                    padding: '8px 16px',
                                    borderRadius: '6px',
                                    backgroundColor: '#0eabeb',
                                    fontSize: '12px',
                                }}
                                onClick={() => setOpenHospitalModal(true)}
                            >
                                Add New Field
                            </Button>
                        </div>
                        <Box className="p-6 bg-white shadow rounded-lg">
                            <div className="grid grid-cols-12 gap-6 items-start">
                                {/* ... rest of your code */}
                            </div>
                        </Box>
                    </div>
                </Box>
            </div>
        </div>
    )
}

export default CreateBill;

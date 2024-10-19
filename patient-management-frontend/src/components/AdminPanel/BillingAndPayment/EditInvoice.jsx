import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Navbar from '../../Comman/Navbar';
import Sidebar from '../../Comman/Sidebar';

const EditInvoice = () => {
    const navigate = useNavigate();

    const [selectedFile, setSelectedFile] = useState(null);
    const [hovered, setHovered] = useState(false);
    const [hospitalDetails, setHospitalDetails] = useState({
        hospitalName: '',
        text: '',
        billNumber: '',
        billDate: '',
        billTime: '',
        phoneNumber: '',
        email: '',
    });
    const [patientDetails, setPatientDetails] = useState({
        patientName: '',
        diseaseName: '',
        doctorName: '',
        description: '',
        discount: '',
        tax: '',
        amount: '',
        totalAmount: '',
        paymentType: '',
        age: '',
        gender: '',
        address: '',
    });
    const [openHospitalModal, setOpenHospitalModal] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleHospitalChange = (event) => {
        const { name, value } = event.target;
        setHospitalDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handlePatientChange = (event) => {
        const { name, value } = event.target;
        setPatientDetails((prevDetails) => ({
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
        navigate('/invoicethemes');
    };
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar currentPage="Billing & Payment" />
                <Box className="p-6" sx={{ width: '100%' }}>
                    <div className="p-6 bg-white shadow rounded-lg">
                        <div className="flex justify-between items-center mb-9">
                            <h2 className="text-2xl font-semibold">Edit Invoice Design</h2>
                            <div className="flex justify-between items-center mb-9">
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
                                <div className="col-span-2 mb-6">
                                    <h6 className="font-bold mb-4">Upload Logo</h6>
                                    <div
                                        className="border-2 border-gray-300 rounded-lg p-4 flex flex-col items-center relative"
                                        onMouseEnter={() => setHovered(true)}
                                        onMouseLeave={() => setHovered(false)}
                                    >
                                        {!selectedFile ? (
                                            <label className="block w-full">
                                                <input
                                                    type="file"
                                                    accept=".png,image/*"
                                                    onChange={handleFileChange}
                                                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                                />
                                            </label>
                                        ) : (
                                            <div className="mt-4 w-full relative">
                                                <img
                                                    src={URL.createObjectURL(selectedFile)}
                                                    alt="Selected Logo"
                                                    className="w-full h-auto rounded-md"
                                                />
                                                {hovered && (
                                                    <button className="absolute top-0 right-0 bg-blue-500 text-white rounded-full px-3 py-1 mt-2 mr-2">
                                                        Change Logo
                                                    </button>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-span-10 grid grid-cols-12 gap-4">
                                    <TextField
                                        className="col-span-4"
                                        fullWidth
                                        label="Hospital Name"
                                        name="hospitalName"
                                        value={hospitalDetails.hospitalName}
                                        onChange={handleHospitalChange}
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
                                        className="col-span-4"
                                        fullWidth
                                        label="Other Text"
                                        name="text"
                                        value={hospitalDetails.text}
                                        onChange={handleHospitalChange}
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
                                        className="col-span-4"
                                        fullWidth
                                        label="Email"
                                        name="email"
                                        value={hospitalDetails.email}
                                        onChange={handleHospitalChange}
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
                                        className="col-span-4"
                                        fullWidth
                                        label="Bill Date"
                                        name="billDate"
                                        value={hospitalDetails.billDate}
                                        onChange={handleHospitalChange}
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
                                        className="col-span-4"
                                        fullWidth
                                        label="Bill Time"
                                        name="billTime"
                                        value={hospitalDetails.billTime}
                                        onChange={handleHospitalChange}
                                        type="time"
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
                                        className="col-span-4"
                                        fullWidth
                                        label="Bill Number"
                                        name="billNumber"
                                        value={hospitalDetails.billNumber}
                                        onChange={handleHospitalChange}
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
                                        className="col-span-4"
                                        fullWidth
                                        label="Phone Number"
                                        name="phoneNumber"
                                        value={hospitalDetails.phoneNumber}
                                        onChange={handleHospitalChange}
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
                                        className="col-span-4"
                                        fullWidth
                                        label="Address"
                                        name="address"
                                        value={hospitalDetails.address}
                                        onChange={handleHospitalChange}
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
                            </div>
                        </Box>
                    </div>

                    <div className="p-6 bg-white shadow rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h6 className="text-xl font-semibold">Patient Details</h6>
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
                            <div className="grid grid-cols-10 gap-6 items-start">
                                <div className="col-span-10 grid grid-cols-12 gap-4">
                                    {/* Row 1 */}
                                    <TextField
                                        className="col-span-3"
                                        fullWidth
                                        label="Patient Name"
                                        name="patientName"
                                        value={patientDetails.patientName}
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
                                        value={patientDetails.diseaseName}
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
                                        label="Doctor Name"
                                        name="doctorName"
                                        value={patientDetails.doctorName}
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
                                        value={patientDetails.description}
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

                                    {/* Row 2 */}
                                    <TextField
                                        className="col-span-3"
                                        fullWidth
                                        label="Discount"
                                        name="discount"
                                        value={patientDetails.discount}
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
                                        label="Tax"
                                        name="tax"
                                        value={patientDetails.tax}
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
                                        value={patientDetails.amount}
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
                                        value={patientDetails.totalAmount}
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

                                    {/* Row 3 */}
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
                                            value={patientDetails.paymentType}
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
                                    <TextField
                                        className="col-span-3"
                                        fullWidth
                                        label="Age"
                                        name="age"
                                        value={patientDetails.age}
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
                                        label="Gender"
                                        name="gender"
                                        value={patientDetails.gender}
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
                                    {/* Address field in row 4 */}
                                    <TextField
                                        className="col-span-3"
                                        fullWidth
                                        label="Address"
                                        name="address"
                                        value={patientDetails.address}
                                        onChange={handlePatientChange}
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
                            </div>
                        </Box>

                    </div>


                </Box>
            </div>
        </div>
    );
};

export default EditInvoice;

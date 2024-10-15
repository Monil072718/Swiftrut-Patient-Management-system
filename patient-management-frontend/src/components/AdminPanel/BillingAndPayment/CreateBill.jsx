import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Navbar from '../../Comman/Navbar';
import Sidebar from '../../Comman/Sidebar';

const CreateBill = () => {
    const navigate = useNavigate();

    const [selectedFile, setSelectedFile] = useState(null);
    const [hovered, setHovered] = useState(false);
    const [showInvoiceTheme, setShowInvoiceTheme] = useState(false); // Define showInvoiceTheme
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
    );
};

export default CreateBill;

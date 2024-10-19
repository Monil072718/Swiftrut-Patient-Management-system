import React from 'react';
import { Button, Box } from '@mui/material';
import Sidebar from '../../Comman/Sidebar';
import Navbar from '../../Comman/Navbar';

const InvoiceThemes = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar currentPage="Billing & Payment" />
                <Box className="p-6 bg-white shadow rounded-lg min-h-screen">
                    
                    {/* Title Outside of Boxes */}
                    <h2 className="text-2xl font-semibold">Select Invoice Theme</h2>

                    {/* Template Cards */}
                    <div className="grid grid-cols-3 gap-6">
                        {/* Template 1 with "Choose Template" Button */}
                        <Box className="relative bg-white shadow-md rounded-lg p-6">
                            <div className="template-preview bg-gray-200 h-52 mb-4 flex justify-center items-center relative">
                                <img
                                    src="/path/to/template-image1.png"
                                    alt="Template 1"
                                    className="absolute inset-0 h-full w-full object-cover blur-sm"
                                />
                                <div className="absolute inset-0 bg-[rgba(20,20,20,0.75)] flex flex-col justify-center items-center">
                                    {/* "Choose Template" Button */}
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{
                                            backgroundColor: '#0eabeb',
                                            '&:hover': { backgroundColor: '#0a96c7' },
                                            padding: '12px 24px',
                                        }}
                                    >
                                        Choose Template
                                    </Button>
                                </div>
                            </div>
                        </Box>

                        {/* Template 2 without Button */}
                        <Box className="bg-white shadow-md rounded-lg p-6">
                            <div className="template-preview bg-gray-200 h-52 mb-4 flex justify-center rounded-lg items-center">
                                <img
                                    src="/path/to/template-image2.png"
                                    alt="Template 2"
                                    className="max-h-full max-w-full"
                                />
                            </div>
                        </Box>

                        {/* Template 3 without Button */}
                        <Box className="bg-white shadow-md rounded-lg p-6">
                            <div className="template-preview bg-gray-200 h-52 mb-4 flex justify-center rounded-lg items-center">
                                <img
                                    src="/path/to/template-image3.png"
                                    alt="Template 3"
                                    className="max-h-full max-w-full"
                                />
                            </div>
                        </Box>
                    </div>
                </Box>
            </div>
        </div>
    );
};

export default InvoiceThemes;

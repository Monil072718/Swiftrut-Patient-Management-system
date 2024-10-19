import React from 'react';
import { Box } from '@mui/material';
import Sidebar from '../../Comman/Sidebar';
import Navbar from '../../Comman/Navbar';
import logo from '../../../assets/Images/logo.png';

const BillDetails = ({ bill }) => {
    // Default structure for the bill to avoid errors
    if (!bill) {
        return <div>No bill data available.</div>; // Handle case when bill is not provided
    }

    return (
        <div className="main">
            <div className="flex h-screen">
                <Sidebar />

                <div className="flex-1 flex flex-col shadow-none">
                    <Navbar currentPage="Billing & Payment" />

                    <Box className="p-6" sx={{ width: '100%' }}>
                        <div className="p-6 bg-white shadow-md rounded-lg">
                            {/* Header */}
                            <div className="flex justify-between items-center">
                                <div>
                                    <img src={logo} alt="Hospital Logo" className="h-12" />
                                    <h2 className="text-lg font-semibold">Hospital Name</h2>
                                    <p className="text-sm text-gray-500">Tagline here</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute top-0 right-0 bg-blue-200 rounded-full px-4 py-2">
                                        <h3 className="text-blue-600 font-bold">Invoice</h3>
                                    </div>
                                    <div className="absolute top-0 left-0 bg-blue-600 h-2 w-16"></div>
                                </div>
                            </div>

                            {/* Bill & Patient Details */}
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div>
                                    <p><strong>Bill No:</strong> {bill.billNumber}</p>
                                    <p><strong>Name:</strong> {bill.patientName}</p>
                                    <p><strong>Disease:</strong> {bill.diseaseName}</p>
                                    <p><strong>Gender:</strong> {bill.gender}</p>
                                    <p><strong>Age:</strong> {bill.age}</p>
                                    <p><strong>Phone Number:</strong> {bill.phoneNumber}</p>
                                    <p><strong>Payment Type:</strong> {bill.paymentType}</p>
                                </div>
                                <div>
                                    <p><strong>Date:</strong> {new Date(bill.date).toLocaleDateString()}</p>
                                    <p><strong>Time:</strong> {new Date(bill.date).toLocaleTimeString()}</p>
                                    <p><strong>Status:</strong> {bill.status}</p>
                                </div>
                            </div>

                            {/* Bill Items Table */}
                            <div className="mt-6">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-blue-200">
                                        <tr>
                                            <th className="p-2">Description</th>
                                            <th className="p-2">Amount</th>
                                            <th className="p-2">Qty</th>
                                            <th className="p-2">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bill.items.length > 0 ? (
                                            bill.items.map((item, index) => (
                                                <tr key={index} className="border-b">
                                                    <td className="p-2">{item.description}</td>
                                                    <td className="p-2">₹{item.amount}</td>
                                                    <td className="p-2">{item.quantity}</td>
                                                    <td className="p-2">₹{item.total}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="4" className="p-2 text-center">No items found</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Summary */}
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div></div>
                                <div>
                                    <p><strong>Amount:</strong> ₹{bill.amount}</p>
                                    <p><strong>Discount (5%):</strong> ₹{bill.discount}</p>
                                    <p><strong>Tax:</strong> ₹{bill.tax}</p>
                                    <p className="font-bold text-lg"><strong>Total:</strong> ₹{bill.total}</p>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="mt-8 bg-blue-600 text-white p-4">
                                <p>Call: +90854 22354</p>
                                <p>Email: hello@gmail.com</p>
                            </div>
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default BillDetails;

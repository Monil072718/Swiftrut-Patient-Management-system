import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon, Notifications as NotificationsIcon, Logout as LogoutIcon, Dashboard as DashboardIcon, Person as DoctorIcon, Group as PatientIcon, Payment as PaymentIcon, BarChart as AnalyticsIcon } from '@mui/icons-material';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Avatar, List, ListItem, ListItemText, ListItemIcon, Drawer, Button, Popover, Typography } from '@mui/material';
import vuesax from '../../../assets/images/vuesax.png';
import char_2 from '../../../assets/images/char_2.png';
import gender_male from '../../../assets/images/gender_male.png';
import edit from '../../../assets/images/edit.png';
import eye from '../../../assets/images/eye.png';
import remove_hel from '../../../assets/images/remove_hel.png';
import Navbar from '../../shared/Navbar';
import Sidebar from '../../shared/Sidebar';

const DoctorManagement = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const menuItems = [
        { text: 'Dashboard', icon: <DashboardIcon /> },
        { text: 'Doctor Management', icon: <DoctorIcon /> },
        { text: 'Patient Management', icon: <PatientIcon /> },
        { text: 'Billing and Payment', icon: <PaymentIcon /> },
        { text: 'Reporting and Analytics', icon: <AnalyticsIcon /> },
    ];

    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const doctors = [
        { name: 'Dr. Marcus Philips', genderIcon: '/path/to/icon', qualification: 'MBBS', specialty: 'Internal Medicine', workingTime: '6 Hour', checkUpTime: '4 Hour', breakTime: '1 Hour' },
        { name: 'Dr. Chance Vaccaro', genderIcon: '/path/to/icon', qualification: 'BDS', specialty: 'Pathology', workingTime: '6 Hour', checkUpTime: '3 Hour', breakTime: '2 Hour' },
        // Add more doctor data here
    ];

    return (

        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Navbar */}
                <Navbar />

                {/* Dashboard Content */}
                <div className="main">
                    <div className="p-6 ">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold mb-4">Doctor Management</h2>
                            <div className='flex items-center'>
                                <div   div className="flex items-center bg-gray-100 rounded-full w-[335px] h-[46px] px-4 py-2 gap-3 me-4">
                                    <SearchIcon className="text-gray-500" />
                                    <InputBase
                                        placeholder="Quick Search"
                                        className="w-full bg-transparent text-gray-700 focus:outline-none"
                                    />

                                </div>
                                <button className="bg-[#0EABEB] text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600">
                                    + Add New Doctor
                                </button>
                            </div>
                        </div>
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="text-left px-4 py-2 font-semibold text-sm text-gray-600">Doctor Name</th>
                                    <th className="text-left px-4 py-2 font-semibold text-sm text-gray-600">Gender</th>
                                    <th className="text-left px-4 py-2 font-semibold text-sm text-gray-600">Qualification</th>
                                    <th className="text-left px-4 py-2 font-semibold text-sm text-gray-600">Specialty</th>
                                    <th className="text-left px-4 py-2 font-semibold text-sm text-gray-600">Working Time</th>
                                    <th className="text-left px-4 py-2 font-semibold text-sm text-gray-600">Patient Check Up Time</th>
                                    <th className="text-left px-4 py-2 font-semibold text-sm text-gray-600">Break Time</th>
                                    <th className="text-left px-4 py-2 font-semibold text-sm text-gray-600">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {doctors.map((doctor, index) => (
                                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="px-4 py-2 flex items-center">
                                            <img
                                                src={char_2}
                                                alt="char_2"
                                                className="w-8 h-8 me-1"
                                            />
                                            {doctor.name}
                                        </td>
                                        <td className="px-4 py-2">
                                            <img
                                                src={gender_male} // Replace with actual path
                                                alt="gender_male"
                                                className="w-6 h-6"
                                            />
                                        </td>
                                        <td className="px-4 py-2">{doctor.qualification}</td>
                                        <td className="px-4 py-2">{doctor.specialty}</td>
                                        <td className="px-4 py-2">
                                            <span className="bg-sky-100 text-sky-600 font-medium px-4 py-1 rounded-full inline-block">
                                                {doctor.workingTime}
                                            </span>
                                        </td>
                                        <td className="px-4 py-2">
                                            <span className="bg-sky-100 text-sky-600 font-medium px-4 py-1 rounded-full inline-block">
                                                {doctor.checkUpTime}
                                            </span>
                                        </td>
                                        <td className="px-4 py-2">
                                            <span className="bg-sky-100 text-sky-600 font-medium px-4 py-1 rounded-full inline-block">
                                                {doctor.breakTime}
                                            </span>
                                        </td>
                                        <td className="px-4 py-2 flex space-x-2">
                                            <button>
                                                <img src={edit} alt="edit" />
                                            </button>
                                            <button>
                                                <img src={eye} alt="eye" />
                                            </button>
                                            <button>
                                                <img src={remove_hel} alt="remove" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default DoctorManagement;



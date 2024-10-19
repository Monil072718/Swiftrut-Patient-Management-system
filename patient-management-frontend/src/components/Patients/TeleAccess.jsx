import React from 'react'
import { FaSearch, FaCalendarAlt, FaVideo, FaPhoneAlt } from 'react-icons/fa';
import PatientSidebar from './PatientSidebar'
import PatientNavbar from './PatientNavbar'

const TeleAccess = () => {
    const appointments = [
        {
            doctor: "Dr. Ryan Vetrows",
            hospital: "Shambhu Hospital",
            appointmentType: "Online",
            appointmentDate: "2 Jan, 2022",
            appointmentTime: "10:20 AM",
            patientIssue: "Feeling Tired"
        },
        // Add other appointments as needed
    ];
    return (
        <div className="flex h-screen">
            <PatientSidebar />
            <div className="flex-1 flex flex-col">
                <PatientNavbar currentPage="Profile Setting" />
                <div className="bg-white p-6 rounded-lg shadow-lg m-6">
                    {/* Tabs */}
                    <div className="flex justify-between items-center border-b-2 pb-4">
                        <div className="flex space-x-6">
                            <button className="font-semibold text-blue-600 border-b-4 border-blue-600 pb-2">Scheduled Appointment</button>
                            <button className="font-semibold text-gray-500">Previous Appointment</button>
                            <button className="font-semibold text-gray-500">Cancel Appointment</button>
                            <button className="font-semibold text-gray-500">Pending Appointment</button>
                        </div>
                        {/* Date Range Picker and Book Appointment */}
                        <div className="flex items-center space-x-4">
                            <div className="relative">

                            </div>
                            <button className="bg-sky-500 text-white px-4 py-2 rounded-lg">Book Appointment</button>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="flex justify-between items-center my-6">
                        <h2 className="text-2xl font-bold">My Appointment</h2>
                        <div className="relative">
                            <FaSearch className="absolute top-2.5 left-3 text-gray-500 me-3" />
                            <input type="text" placeholder="Search Doctor" className="border border-gray-300 pl-10 pr-4 py-2 rounded-lg text-sm me-3" />
                            <FaCalendarAlt className="absolute top-2.5 left-3 text-gray-500" />
                            <input type="text" value="2 Jan, 2022 - 13 Jan, 2022" className="border border-gray-300 pl-10 pr-4 py-2 rounded-lg text-sm" readOnly />
                        </div>
                    </div>

                    {/* Appointment Cards */}
                    <div className="grid grid-cols-4 gap-4">
                        {appointments.map((appointment, index) => (
                            <div key={index} className="border rounded-lg p-4 shadow-md transition">
                                {/* Card header with doctor name and icons */}
                                <div className="flex justify-between items-center p-2 bg-gray-50 rounded-t-lg mb-4">
                                    <h4 className="font-semibold">{appointment.doctor}</h4>
                                    <div className="flex space-x-2">
                                        <FaVideo className="text-blue-500" />
                                        <FaCalendarAlt className="text-gray-500" />
                                    </div>
                                </div>

                                {/* Hospital, Appointment Type, and Date Information */}
                                <div className="text-gray-700">
                                    <p><strong>Appointment Type:</strong> <span className="text-blue-500">{appointment.appointmentType}</span></p>
                                    <p><strong>Hospital Name:</strong> {appointment.hospital}</p>
                                    <p><strong>Appointment Date:</strong> {appointment.appointmentDate}</p>
                                    <p><strong>Appointment Time:</strong> {appointment.appointmentTime}</p>
                                    <p><strong>Patient Issue:</strong> {appointment.patientIssue}</p>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex justify-between items-center mt-4">
                                    <button className="bg-gray-100 text-gray-500 py-2 px-4 rounded-lg flex items-center space-x-2">
                                        <FaCalendarAlt />
                                        <span>Cancel</span>
                                    </button>
                                    <button className="bg-green-500 text-white py-2 px-4 rounded-lg flex items-center space-x-2">
                                        <FaPhoneAlt />
                                        <span>Join Call</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeleAccess
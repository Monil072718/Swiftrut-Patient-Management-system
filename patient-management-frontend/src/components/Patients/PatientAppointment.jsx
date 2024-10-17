import React from 'react'
import { FaEdit, FaEye } from 'react-icons/fa';
import Sidebar from '../shared/Sidebar';
import Navbar from '../shared/Navbar';

const PatientAppointment = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Navbar */}
                <Navbar />
                <div className="main">
                    <div className="p-8 space-y-8">
                        {/* Patient Details */}
                        <div className="bg-white rounded-lg p-6 border border-blue-200">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold">Patient Details</h2>
                                <button className="bg-sky-500 text-white py-2 px-4 rounded-md flex items-center space-x-2">
                                    <FaEdit />
                                    <span>Edit Profile</span>
                                </button>
                            </div>
                            <div className="grid grid-cols-12 gap-2">
                                {/* Image Section */}
                                <div className="col-span-2 flex justify-center items-center">
                                    <img
                                        src="https://via.placeholder.com/100"
                                        alt="Patient"
                                        className="rounded-full w-20 h-20 border border-gray-300"
                                    />
                                </div>

                                {/* Patient Info Section */}
                                <div className="col-span-10 grid grid-cols-6 gap-y-2 text-gray-700 text-sm">
                                    <div><strong>Name:</strong> Marcus Philips</div>
                                    <div><strong>Number:</strong> 99130 44537</div>
                                    <div><strong>Email:</strong> John@gmail.com</div>
                                    <div><strong>Gender:</strong> Male</div>

                                    <div><strong>Height (cm):</strong> 160</div>
                                    <div><strong>Weight (Kg):</strong> 50</div>
                                    <div><strong>Country:</strong> India</div>
                                    <div><strong>DOB:</strong> 2 Jan, 2022</div>

                                    <div><strong>Age:</strong> 20 Years</div>
                                    <div><strong>Blood Group:</strong> B+</div>
                                    <div><strong>State:</strong> Gujarat</div>
                                    <div><strong>City:</strong> Ahmedabad</div>

                                    {/* Full width for Address */}
                                    <div className=""><strong>Address:</strong> B-408 Swastik society, mota varacha rajkot.</div>
                                </div>
                            </div>
                        </div>

                        {/* Medical History */}
                        <div className="flex">
                            <div className="bg-white shadow rounded-lg p-6 border border-blue-200 me-4">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold">Medical History</h3>
                                    <button className="text-sky-500">View All History</button>
                                </div>
                                <div className="flex space-x-4 overflow-x-auto">
                                    {[1, 2, 3].map((_, index) => (
                                        <div key={index} className="bg-gray-100 p-4 rounded-lg w-64 min-w-[300px]">
                                            <h4 className="font-bold">Dulce Schleifer</h4>
                                            <p className="text-sm text-gray-500">2 Jan, 2022</p>
                                            <p className="text-gray-600 mt-2">
                                                Patient Issue: the printing and typesetting industry. Lorem Ipsum...
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Prescriptions */}
                            <div className="bg-white shadow rounded-lg p-6 border border-grey-200">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold">Prescriptions</h3>
                                    <button className="text-sky-500">View All Prescription</button>
                                </div>
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="text-gray-600">
                                            <th className="pb-2">Hospital Name</th>
                                            <th className="pb-2">Date</th>
                                            <th className="pb-2">Disease Name</th>
                                            <th className="pb-2">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        {['Apollo Hospitals', 'Medanta The Medicity', 'Manipal Hospitals', 'Narayana Health'].map((hospital, index) => (
                                            <tr key={index}>
                                                <td className="py-2">{hospital}</td>
                                                <td className="py-2">2 Jan, 2022</td>
                                                <td className="py-2">Colds and Flu</td>
                                                <td className="py-2"><FaEye className="text-blue-500" /></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Test Reports */}
                        <div className="bg-white shadow rounded-lg p-6 border border-blue-200">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold">Test Reports</h3>
                                <button className="text-blue-500">View All Reports</button>
                            </div>
                            <div className="flex space-x-4 overflow-x-auto">
                                {[1, 2, 3].map((_, index) => (
                                    <div key={index} className="bg-gray-100 p-4 rounded-lg w-64 min-w-[200px]">
                                        <h4 className="font-bold">Dr. Marcus Philips</h4>
                                        <p className="text-sm text-gray-500">2 Jan, 2022</p>
                                        <p className="text-gray-600 mt-2">Disease: Viral Infection</p>
                                        <p className="text-green-600 font-bold">Pathology Test</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Patient Status */}
                        <div className="bg-white shadow rounded-lg p-6 border border-blue-200">
                            <h3 className="text-xl font-bold mb-4">Patient Status</h3>
                            <div className="flex flex-col space-y-4">
                                {[1, 2].map((_, index) => (
                                    <div key={index} className="flex items-center space-x-4">
                                        <div className="bg-blue-100 p-2 rounded-full">
                                            <span className="text-blue-500 font-bold">Shamuba Hospital</span>
                                        </div>
                                        <div>
                                            <p className="text-gray-600 font-bold">Dr. Mathew Best</p>
                                            <p className="text-sm text-gray-500">It is a long established fact that a reader will be distracted by the readable content.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientAppointment
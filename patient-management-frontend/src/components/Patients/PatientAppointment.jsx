import React from 'react'
import { FaEdit, FaEye } from 'react-icons/fa';
import Sidebar from '../shared/Sidebar';
import Navbar from '../shared/Navbar';
import { Link } from 'react-router-dom';
import { FaHospital, FaUserMd, FaCalendarAlt, FaInfoCircle, FaUsers } from "react-icons/fa";

const PatientAppointment = () => {



    const history = [
        {
            name: "Dulce Schleifer",
            date: "2 Jan, 2022",
            issue: "Patient Issue",
            description:
                "The printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the.",
        },
        {
            name: "Dulce Workman",
            date: "2 Jan, 2022",
            issue: "Patient Issue",
            description:
                "The printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the.",
        },
        {
            name: "Miracle Septimus",
            date: "2 Jan, 2022",
            issue: "Patient Issue",
            description:
                "The printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the.",
        },
        {
            name: "John Doe",
            date: "3 Jan, 2022",
            issue: "Patient Issue",
            description:
                "Additional content added here for scrolling purposes. Lorem Ipsum is used as placeholder text.",
        },
    ];
    const prescriptions = [
        {
            hospital: "Apollo Hospitals",
            date: "2 Jan, 2022",
            disease: "Colds and Flu",
        },
        {
            hospital: "Medanta The Medicity",
            date: "2 Jan, 2022",
            disease: "Allergies",
        },
        { hospital: "Manipal Hospitals", date: "2 Jan, 2022", disease: "Diarrhea" },
        {
            hospital: "Narayana Health",
            date: "2 Jan, 2022",
            disease: "Colds and Flu",
        },
        {
            hospital: "Narayana Health",
            date: "2 Jan, 2022",
            disease: "Colds and Flu",
        },
        {
            hospital: "Narayana Health",
            date: "2 Jan, 2022",
            disease: "Colds and Flu",
        },
    ];

    const reports = [
        {
            doctor: "Dr. Marcus Philips",
            date: "2 Jan, 2022",
            disease: "Viral Infection",
            test: "Pathology Test",
        },
        {
            doctor: "Dr. Ryan Carder",
            date: "2 Jan, 2022",
            disease: "Allergies",
            test: "Pathology Test",
        },
        {
            doctor: "Dr. Zaire Saris",
            date: "2 Jan, 2022",
            disease: "Viral Infection",
            test: "Pathology Test",
        },
        {
            doctor: "Dr. Jaxson Herwitz",
            date: "2 Jan, 2022",
            disease: "Allergies",
            test: "Pathology Test",
        },
    ];


    const status = {
        hospital: "Shamuba Hospital",
        doctor: "Dr. Mathew Best",
        date: "2 Jan, 2022",
        xyz: "Chance Carder",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    };

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
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            {/* Heading and Edit Button */}
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-semibold">Patient Details</h2>
                                <Link to={"/patient/edit-patient-profile"} className="flex items-center px-4 py-2 bg-sky-500 text-white rounded-md shadow-md">
                                    <FaEdit className="mr-2" />
                                    Edit Profile
                                </Link>
                            </div>

                            <div className=" flex justify-between items-start">
                                {/* Patient Image */}
                                <div className="flex-shrink-0">
                                    <img
                                        src="https://via.placeholder.com/150"
                                        alt="Patient"
                                        className="w-32 h-32 rounded-full object-cover"
                                    />
                                </div>

                                {/* Patient Information */}
                                <div className="flex-grow ml-6">
                                    <div className="grid grid-cols-7 gap-x-12 gap-y-4">
                                        <div className="font-semibold leading-5">
                                            <p className="text-gray-400">Name</p> Marcus Philips
                                        </div>
                                        <div className="font-semibold leading-5">
                                            <p className="text-gray-400">Number</p> 99130 44537
                                        </div>
                                        <div className="font-semibold leading-5">
                                            <p className="text-gray-400">Email</p> John@gmail.com
                                        </div>
                                        <div className="font-semibold leading-5">
                                            <p className="text-gray-400">Gender</p> Male
                                        </div>
                                        <div className="font-semibold leading-5">
                                            <p className="text-gray-400">DOB</p> 2 Jan, 2022
                                        </div>
                                        <div className="font-semibold leading-5">
                                            <p className="text-gray-400">Age</p> 20 Years
                                        </div>
                                        <div className="font-semibold leading-5">
                                            <p className="text-gray-400">Blood Group</p> B+
                                        </div>

                                        <div className="font-semibold leading-5">
                                            <p className="text-gray-400">Height (cm)</p> 160
                                        </div>
                                        <div className="font-semibold leading-5">
                                            <p className="text-gray-400">Weight (Kg)</p> 50
                                        </div>
                                        <div className="font-semibold leading-5">
                                            <p className="text-gray-400">Country</p> India
                                        </div>
                                        <div className="font-semibold leading-5">
                                            <p className="text-gray-400">State</p> Gujarat
                                        </div>
                                        <div className="font-semibold leading-5">
                                            <p className="text-gray-400">City</p> Ahmedabad
                                        </div>
                                        <div className="col-span-2 font-semibold leading-5">
                                            <p className="text-gray-400">Address</p> B-408, Swastik Society,
                                            Mota Varacha, Rajkot
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Medical History */}
                        <div className="grid grid-cols-8 gap-6 flex-1">
                            <div className='col-span-5 flex flex-col'>
                                <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-xl font-semibold">Medical History</h2>
                                        <a
                                            href="#"
                                            className="text-blue-600 hover:underline"

                                        >
                                            View All History
                                        </a>
                                    </div>

                                    {/* Horizontal Scrollable Container */}
                                    <div className="overflow-x-auto">
                                        <div className="flex space-x-4 w-full max-w-full overflow-x-auto custom-scroll">
                                            {history.map((record, index) => (
                                                <div
                                                    key={index}
                                                    className="min-w-[300px] max-w-[300px] bg-white rounded-lg shadow-md border mb-4"
                                                >

                                                    {/* Gray Header with Name and Date */}
                                                    <div className="bg-gray-100 px-4 py-2 rounded-t-lg">
                                                        <h4 className="font-semibold text-customBlue">{record.name}</h4>
                                                        <p className="text-gray-500">{record.date}</p>
                                                    </div>

                                                    {/* Patient Issue and Description */}
                                                    <div className="p-4">
                                                        <p className="font-semibold">{record.issue}</p>
                                                        <p className="mt-2 text-gray-600 text-sm">
                                                            {record.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Prescriptions */}
                            <div className='col-span-3 flex flex-col'>
                                <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-xl font-semibold">Prescriptions</h2>
                                        <a
                                            href="#"
                                            className="text-blue-600 hover:underline"

                                        >
                                            View All Prescription
                                        </a>
                                    </div>

                                    {/* Scrollable container for the table body */}
                                    <div className="rounded-xl overflow-hidden ">
                                        <table className="w-full text-left">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-2">Hospital Name</th>
                                                    <th className="py-2 px-2">Date</th>
                                                    <th className="py-2 px-2">Disease Name</th>
                                                    <th className="py-2 px-2">Action</th>
                                                </tr>
                                            </thead>
                                        </table>

                                        {/* Scrollable tbody */}
                                        <div className="overflow-y-auto custom-scroll h-[210px]">
                                            <table className="w-full text-left">
                                                <tbody>
                                                    {prescriptions.map((prescription, index) => (
                                                        <tr key={index} className="border-t">
                                                            <td className="py-3 px-2 font-xs">{prescription.hospital}</td>
                                                            <td className="py-3 px-2 font-xs">{prescription.date}</td>
                                                            <td className="py-3 px-2 font-xs">{prescription.disease}</td>
                                                            <td className="py-3 px-2 font-xs flex justify-center">
                                                                <button className="text-customBlue flex items-center space-x-2 bg-gray-100 text-md p-1 rounded-md">
                                                                    <FaEye />
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
                        </div>

                        {/* Test Reports */}
                        <div className="grid grid-cols-8 gap-6 flex-1 mt-6">
                            <div className="col-span-5 flex flex-col">
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    {/* Heading and View All link */}
                                    <div className="flex justify-between items-center mb-4 border-b-2 pb-2">
                                        <h2 className="text-xl font-semibold">Test Reports</h2>
                                        <a
                                            href="#"
                                            className="text-blue-600 hover:underline"

                                        >
                                            View All Test
                                        </a>
                                    </div>

                                    {/* Scrollable container for reports */}
                                    <div className="col-span-3 flex flex-col">
                                        <div className="overflow-y-auto h-[200px] custom-scroll pr-1">
                                            <div className="grid grid-cols-2 gap-4">
                                                {reports.map((report, index) => (
                                                    <div key={index} className="border rounded-lg p-4">
                                                        {/* Doctor's Image */}
                                                        <div className="flex justify-between align-middle items-center">
                                                            <div className="mr-4 flex mb-1">
                                                                <img
                                                                    src={`https://randomuser.me/api/portraits/men/${index + 30
                                                                        }.jpg`}
                                                                    alt={report.doctor}
                                                                    className="w-12 h-12 rounded-full mr-2"
                                                                />
                                                                <div>
                                                                    <h4 className="font-semibold">{report.doctor}</h4>
                                                                    <span className="text-gray-400">{report.date}</span>
                                                                </div>
                                                            </div>
                                                            <div className="text-customBlue bg-gray-100 p-1 rounded-md">
                                                                <FaEye />
                                                            </div>
                                                        </div>
                                                        <div className="flex  justify-between items-center">
                                                            <p className="mt-1 text-sm text-gray-500">
                                                                <span className="font-bold">Disease : </span>
                                                                {report.disease}
                                                            </p>
                                                            <p className="mt-2 text-green-600 text-sm">
                                                                <ul className="list-disc ml-4">
                                                                    <li>{report.test}</li>
                                                                </ul>
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Patient Status */}
                            <div className="col-span-3 flex flex-col">
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <h2 className="text-xl font-semibold mb-4">Patient Status</h2>

                                    {/* Grid Layout for the icons and text */}
                                    <div className="grid grid-cols-2 gap-4 h-[210px]">
                                        {/* First column: Hospital Name */}
                                        <div className="flex items-center space-x-2">
                                            <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                                                <FaHospital className="text-blue-600" size={24} />
                                            </div>
                                            <p className="font-semibold text-blue-900">{status.hospital}</p>
                                        </div>

                                        {/* Second column: Doctor's Name */}
                                        <div className="flex items-center space-x-2">
                                            <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                                                <FaUserMd className="text-green-500" size={24} />
                                            </div>
                                            <p className="font-semibold text-gray-800">{status.doctor}</p>
                                        </div>

                                        {/* First column: Date */}
                                        <div className="flex items-center space-x-2">
                                            <div className="flex-shrink-0 bg-purple-100 p-3 rounded-full">
                                                <FaCalendarAlt className="text-purple-500" size={24} />
                                            </div>
                                            <p className="text-gray-600">{status.date}</p>
                                        </div>

                                        {/* Second column: Additional Info */}
                                        <div className="flex items-center space-x-2">
                                            <div className="flex-shrink-0 bg-purple-100 p-3 rounded-full">
                                                <FaUsers className="text-purple-500" size={24} />
                                            </div>
                                            <p className="text-gray-600">{status.xyz}</p>
                                        </div>

                                        {/* Full row for description */}
                                        <div className="col-span-2 flex items-start space-x-2">
                                            <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                                                <FaInfoCircle className="text-blue-500" size={24} />
                                            </div>
                                            <p className="text-gray-600 text-sm">{status.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientAppointment
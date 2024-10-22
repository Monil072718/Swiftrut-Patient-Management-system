import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Avatar, List, ListItem, ListItemText, ListItemIcon, Drawer, Button, Popover, Typography } from '@mui/material';
import { Search as SearchIcon, Notifications as NotificationsIcon, Logout as LogoutIcon, Dashboard as DashboardIcon, Person as DoctorIcon, Group as PatientIcon, Payment as PaymentIcon, BarChart as AnalyticsIcon } from '@mui/icons-material';
import { Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, Filler } from 'chart.js';
import { useNavigate } from 'react-router-dom';
import vuesax from '../assets/Images/vuesax.png';
import add from '../assets/Images/add.png';
import user_1 from '../assets/Images/user_1.png';
import ueser_2 from '../assets/Images/ueser_2.png';
import user_3 from '../assets/Images/user_3.png';
import Sidebar from '../components/Comman/Sidebar';
import Navbar from '../components/Comman/Navbar';
// import Sidebar from '../components/shared/Sidebar';
// import Navbar from '../components/shared/Navbar';
ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Filler);

function Dashboard() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Doctor Management', icon: <DoctorIcon /> },
    { text: 'Patient Management', icon: <PatientIcon /> },
    { text: 'Billing and Payment', icon: <PaymentIcon /> },
    { text: 'Reporting and Analytics', icon: <AnalyticsIcon /> },
  ];

  const bills = [
    { id: '5654', patientName: 'Charlie Vaccaro', disease: 'Colds and Flu', status: 'Paid' },
    { id: '5654', patientName: 'James George', disease: 'Conjunctivitis', status: 'Unpaid' },
    { id: '5654', patientName: 'Craig Torff', disease: 'Allergies', status: 'Paid' },
    { id: '5654', patientName: 'Chance Lipshutz', disease: 'Diarrhea', status: 'Unpaid' },
    { id: '5654', patientName: 'Gustavo Saris', disease: 'Headaches', status: 'Paid' },
    { id: '5654', patientName: 'Carter Bator', disease: 'Mononucleosis', status: 'Unpaid' },
    { id: '5654', patientName: 'Kadin Schleifer', disease: 'Stomach Aches', status: 'Paid' },
  ];
  const open = Boolean(anchorEl);
  const data = {
    labels: ['New Patients', 'Old Patients'],
    datasets: [
      {
        data: [35, 65],
        backgroundColor: ['#FFC313', '#00A45A'],
        hoverBackgroundColor: ['#FFA500', '#008C4F'],
        borderWidth: 0,
      },
    ],
  };
  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const dataLine = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Patients',
        data: [20000, 15000, 30000, 25000, 20000, 27000, 26780, 18000, 21000, 32000, 25000, 40000],
        borderColor: '#5678E9',
        backgroundColor: 'rgba(86, 120, 233, 0.1)',
        pointBackgroundColor: '#A978F8',
        fill: true,
        tension: 0.4, // Smooth curve
        borderWidth: 2,
        pointRadius: 4,
      },
    ],
  };
  const optionsLine = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `${value / 1000}k`;
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Patients: ${context.raw.toLocaleString()}`;
          },
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <Navbar currentPage="DashBoard" />

        {/* Dashboard Content */}
        <div className="flex flex-wrap">
          <div className="p-8 bg-customLightBlue h-screen w-2/3">
            {/* Top section */}
            <div className="grid grid-cols-3 gap-6 h-[10%]">
              {/* Card components */}
              <div className="bg-white rounded-lg  flex flex-wrap justify-start items-center p-6 text-center ">
                <div className="img">
                  <img src={user_1} alt="user_1" className="me-4" />
                </div>
                <div className="dash-content">
                  <h6 className="text-lg  text-gray-400">Total Patients</h6>
                  <p className="text-4xl font-bold text-customBlue mt-2 text-start">1500</p>
                </div>
              </div>
              <div className="bg-white rounded-lg  flex flex-wrap justify-start items-center p-6 text-center ">
                <div className="img">
                  <img src={ueser_2} alt="ueser_2" className="me-4" />
                </div>
                <div className="dash-content">
                  <h6 className="text-lg  text-gray-400">Total Docters</h6>
                  <p className="text-4xl font-bold text-customBlue mt-2 text-start">500</p>
                </div>
              </div>
              <div className="bg-white rounded-lg  flex flex-wrap justify-start items-center p-6 text-center ">
                <div className="img">
                  <img src={user_3} alt="user_3" className="me-4" />
                </div>
                <div className="dash-content">
                  <h6 className="text-lg  text-gray-400">Total Appointments</h6>
                  <p className="text-4xl font-bold text-customBlue mt-2 text-start">1080</p>
                </div>
              </div>
            </div>

            {/* Statistics Section */}
            <div className="bg-white rounded-lg mt-[60px] p-6 h-[54%]">

              
                <h2 className="text-xl font-semibold">Patients Statistics</h2>
                <div className="mt-4 h-[90%] w-[100%]">
                  <Line data={dataLine} options={optionsLine} />
                
              </div>
            </div>


            {/* Appointments List */}

            <div className="grid grid-cols gap-6 mt-6 h-[36%]" >
              <div className="bg-white rounded-lg p-6 ">
                <div className="flex flex-wrap justify-between mb-5">
                  <h2 className="text-xl text-customBlue  font-bold">Today's Appointments List</h2>
                  <h2 className="text-base text-customBlue text-sky-600">View All</h2>
                </div>
                <div class="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide grid grid-cols-3 gap-3">
                  <div class="w-72 border border-gray-200 rounded-lg flex-shrink-0">
                    <div class="flex justify-between items-center bg-gray-100 px-4 py-2 rounded  w-100%">
                      <h3 class="font-bold text-lg text-[#030229]">Roger Lubin</h3>
                      <span
                        className="bg-blue-600 bg-opacity-10 text-sky-600 font-semibold  px-4 py-1 rounded-full w-fit text-center border-1"
                        style={{ backgroundColor: 'rgba(86, 120, 233, 0.1)' }}
                      >
                        Onsite
                      </span>
                    </div>
                    <div class="text-gray-600 p-4">
                      <p class="text-sm font-semibold">Doctor Name</p>
                      <p class="text-sm font-bold text-[#030229] mb-2">Leo Geidt</p>

                      <p class="text-sm font-semibold">Disease Name</p>
                      <p class="text-sm font-bold text-[#030229] mb-2">Meningococcal Disease</p>

                      <p class="text-sm font-semibold">Appointment Time</p>
                      <p class="text-sm font-bold text-[#030229]">10:00 AM</p>
                    </div>
                  </div>


                  <div class="w-72 border border-gray-200 rounded-lg flex-shrink-0">
                    <div class="flex justify-between items-center bg-gray-100 px-4 py-2 rounded  w-100%">
                      <h3 class="font-bold text-lg text-[#030229]">Roger Lubin</h3>
                      <span
                        className="bg-customyellowopacity bg-opacity-10 text-customyellow font-semibold  px-4 py-1 rounded-full w-fit text-center border-1"

                      >
                        Onsite
                      </span>
                    </div>
                    <div class="text-gray-600 p-4">
                      <p class="text-sm font-semibold">Doctor Name</p>
                      <p class="text-sm font-bold text-[#030229] mb-2">Leo Geidt</p>

                      <p class="text-sm font-semibold">Disease Name</p>
                      <p class="text-sm font-bold text-[#030229] mb-2">Meningococcal Disease</p>

                      <p class="text-sm font-semibold">Appointment Time</p>
                      <p class="text-sm font-bold text-[#030229]">10:00 AM</p>
                    </div>
                  </div>

                  <div class="w-72 border border-gray-200 rounded-lg flex-shrink-0">
                    <div class="flex justify-between items-center bg-gray-100 px-4 py-2 rounded w-full">
                      <h3 class="font-bold text-lg text-[#030229]">Roger Lubin</h3>
                      <span
                        class="bg-blue-600 bg-opacity-10 text-sky-600 font-semibold px-4 py-1 rounded-full w-fit text-center border border-blue-600"
                        style={{ backgroundColor: 'rgba(86, 120, 233, 0.1)' }}
                      >
                        Onsite
                      </span>
                    </div>
                    <div class="text-gray-600 p-4">
                      <p class="text-sm font-semibold">Doctor Name</p>
                      <p class="text-sm font-bold text-[#030229] mb-2">Leo Geidt</p>

                      <p class="text-sm font-semibold">Disease Name</p>
                      <p class="text-sm font-bold text-[#030229] mb-2">Meningococcal Disease</p>

                      <p class="text-sm font-semibold">Appointment Time</p>
                      <p class="text-sm font-bold text-[#030229]">10:00 AM</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Billing payment */}
          <div className='w-1/3 pt-8 pe-8 bg-customLightBlue'>
            <div className="bg-white rounded-lg p-6 h-[57%]">
              <div className='flex flex-wrap justify-between items-center border-b pb-4'>
                <h2 className="text-xl font-semibold">Billing & Payments</h2>

                <button className="flex items-center justify-center w-[162px] h-[48px] px-[14px] py-[12px] gap-[10px] bg-[#0EABEB] text-white text-base rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                  <img src={add} alt="add" className="w-6 h-6 mr-2" />
                  Create Bills
                </button>
              </div>

              {/* Table container with vertical scroll */}
              <div className=" bg-white rounded-lg overflow-y-auto h-[calc(100%-72px)]">
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="text-red-500 mr-2 mt-4">•</span> Pending Bills : 50
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr>
                        <th className="px-3 py-2 text-left font-medium text-sm text-gray-600 bg-gray-100">Bill No</th>
                        <th className="px-3 py-2 text-left font-medium text-sm text-gray-600 bg-gray-100">Patient Name</th>
                        <th className="px-3 py-2 text-left font-medium text-sm text-gray-600 bg-gray-100">Disease Name</th>
                        <th className="px-3 py-2 text-left font-medium text-sm text-gray-600 bg-gray-100">Status</th>
                        <th className="px-3 py-2 text-left font-medium text-sm text-gray-600 bg-gray-100">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bills.map((bill, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className="px-2 py-2 text-blue-600 font-semibold bg-blue-50 rounded-full text-center">
                            {bill.id}
                          </td>
                          <td className="px-2 py-2 font-semibold text-gray-700">{bill.patientName}</td>
                          <td className="px-2 py-2 text-gray-600">{bill.disease}</td>
                          <td className="px-2 py-2">
                            <span
                              className={`w-[82px] h-[28px]  gap-[10px] rounded-[30px] 
                                        ${bill.status === 'Paid' ? 'bg-green-100 text-green-600 px-[30px] py-[6px]' : 'bg-red-100 text-red-600'} px-[20px] py-[6px]`}
                            >
                              {bill.status}
                            </span>
                          </td>
                          <td className="px-4 py-2">
                            <button className="text-blue-600 bg-blue-100 p-2 rounded-full">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 mt-6 h-[28%]">
              <div className="flex flex-col p-6 bg-gray-50 rounded-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-black mb-6">Patients Summary</h2>
                <div className="flex justify-between items-center">
                  <div className="w-1/2">
                    <Doughnut data={data} options={options} />

                  </div>
                  <div className="flex flex-col space-y-4 w-1/2 pl-4">
                    <div className="flex items-center space-x-3">
                      <span className="inline-block w-3 h-3 rounded-full bg-yellow-400"></span>
                      <p className="text-gray-600 font-medium">New Patients</p>
                      <p className="text-yellow-500 font-bold ml-auto">35</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
                      <p className="text-gray-600 font-medium">Old Patients</p>
                      <p className="text-green-500 font-bold ml-auto">65</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="inline-block w-3 h-3 rounded-full bg-blue-600"></span>
                      <p className="text-gray-600 font-medium">Total Patients</p>
                      <p className="text-blue-600 font-bold ml-auto">100</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;

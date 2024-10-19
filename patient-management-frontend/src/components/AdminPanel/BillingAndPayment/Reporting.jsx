import React, { useState } from 'react';
import Sidebar from '../../Comman/Sidebar';
import Navbar from '../../Comman/Navbar';
import ReactApexChart from 'react-apexcharts';
import Chart from 'react-apexcharts';
import { FaUserAlt, FaUserFriends, FaHospitalUser, FaFileAlt } from 'react-icons/fa';
import { Box } from '@mui/material';

const Reporting = () => {

  const [totalPatients, setTotalPatients] = useState(0);
  const [repeatPatients, setRepeatPatients] = useState(0);
  const [admittedPatients, setAdmittedPatients] = useState(0);
  const [totalClaim, setTotalClaim] = useState(0);
  const [totalAppointments, setTotalAppointments] = useState(0);
  const [totalOnlineConsultations, setTotalOnlineConsultations] = useState(0);
  const [viewMode, setViewMode] = useState('week');
  const [isYearSelected, setIsYearSelected] = useState(false);


  const handleButtonClick = (isYear) => {
    setIsYearSelected(isYear);
  };

  const monthlyData = [
    { name: 'Appointments', data: [15, 20, 25, 30, 35, 40, 45] },
    { name: 'Online Consultation', data: [10, 15, 20, 25, 30, 35, 40] },
  ];

  const yearlyData = [
    { name: 'Appointments', data: [30, 40, 45, 50, 60, 70, 80, 90] },
    { name: 'Online Consultation', data: [20, 35, 50, 65, 80, 90, 100, 110] },
  ];

  const weeklyData = [
    { name: 'Patients', data: [10, 15, 20, 25, 30, 35, 40] },
    { name: 'Other Patients', data: [5, 10, 15, 20, 25, 30, 35] },
  ];

  const dailyData = [
    { name: 'Patients', data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50] },
    { name: 'Other Patients', data: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30] },
  ];


  const appointmentChartData = {
    options: {
      chart: {
        type: 'bar',
        toolbar: { show: false },
      },
      xaxis: {
        categories: isYearSelected
          ? ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']
          : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      },
      yaxis: {
        tickAmount: 7,
        labels: { formatter: (val) => `${val}` },
      },
      plotOptions: {
        bar: { columnWidth: '50%', borderRadius: 10 },
      },
      colors: ['#1E97E6', '#3FD9FF'],
      legend: {
        show: true,
        labels: {
          colors: ['#000'],
          formatter: (val) => (val === 'Appointments' ? 'Other Appointments' : val),
        },
      },
      dataLabels: { enabled: false },
      grid: {
        padding: { left: 20, right: 20, top: 20, bottom: 20 },
      },
    },
    series: isYearSelected ? yearlyData : monthlyData,
  };


  const patientsChartData = {
    options: {
      chart: {
        type: 'line',
        toolbar: { show: false },
      },
      stroke: {
        curve: 'smooth',
        width: 3,
      },
      xaxis: {
        categories:
          viewMode === 'week'
            ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            : Array.from({ length: 31 }, (_, i) => (i + 1).toString()),
      },
      yaxis: {
        tickAmount: 7,
        labels: { formatter: (val) => `${val}` },
      },
      colors: ['#F7BC91', '#9CABFF'],
      legend: {
        show: true,
        labels: {
          colors: ['#000'],
          formatter: (val) => (val === 'Patients' ? 'Other Patients' : val),
        },
      },
      dataLabels: { enabled: false },
      grid: {
        padding: { left: 20, right: 20, top: 20, bottom: 20 },
      },
    },
    series: [
      {
        name: 'Patients',
        data: viewMode === 'week' ? [10, 15, 20, 25, 30, 35, 40] : [5, 10, 15, 20, 25, 30, 35],
      },
      {
        name: 'Other Patients',
        data: viewMode === 'week' ? [5, 10, 15, 20, 25, 30, 35] : [3, 6, 9, 12, 15, 18, 21],
      },
    ],
  };

  const series = [8, 12, 20, 18, 8, 34];
  const ages = ['0-2 Years', '3-12 Years', '13-19 Years', '20-39 Years', '40-59 Years', '60 And Above'];

  const chartOptions = {
    chart: {
      type: 'donut',
    },
    colors: [
      '#F165D3',
      '#6369F7',
      '#60BFF4',
      '#FACD64',
      '#62CDBE',
      '#F4947A'
    ],
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
        donut: {
          size: '75%', 
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total Patients',  
              fontSize: '16px',
              fontFamily: 'Lato',
              color: '#4F4F4F',
              fontWeight: 600,
              formatter: function () {
                return '100';  
              }
            }
          }
        }
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
      },
    }],
  };


  const getGradient = (index) => {
    const gradients = [
      'linear-gradient(190.47deg, #F165D3 5.81%, rgba(172, 36, 142, 0.85) 24.32%)',
      'linear-gradient(226.78deg, #6369F7 12.17%, #3D419E 27.26%)',
      'linear-gradient(264.75deg, #60BFF4 2.36%, #4582A5 23.22%)',
      'linear-gradient(310.24deg, #FACD64 12.88%, #E3B340 29.59%)',
      'linear-gradient(24.6deg, #62CDBE 9.84%, #3EA394 25.71%)',
      'linear-gradient(114.03deg, #F4947A 7.99%, #C87A66 50.4%)'
    ];
    return gradients[index];
  };

  return (
    <div className="main" >
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col shadow-none">
          <Navbar currentPage="Billing & Payment" />
          <div className="grid grid-cols-4 gap-5 py-4 px-7">
            <div className="stats-box bg-white rounded-lg shadow-lg p-4 flex items-center w-[370px]">
              <div className="relative flex items-center justify-center" style={{ backgroundColor: 'rgba(236, 249, 255, 1)', width: '45px', height: '45px', borderRadius: '50%' }}>
                <FaUserAlt className="text-2xl" style={{ color: '#2E7793' }} />
              </div>
              <div className="flex-grow flex justify-between items-center ml-4">
                <div className="flex flex-col">
                  <h3 className="text-base font-semibold">Total Patients</h3>
                </div>
                <div className="text-2xl">{totalPatients === 0 ? '00' : totalPatients}</div>
              </div>
            </div>

            <div className="stats-box bg-white rounded-lg shadow-lg p-4 flex items-center w-[370px]">
              <div className="relative flex items-center justify-center" style={{ backgroundColor: 'rgba(102, 51, 198, 0.1)', width: '45px', height: '45px', borderRadius: '50%' }}>
                <FaUserFriends className="text-2xl" style={{ color: '#6633C6' }} />
              </div>
              <div className="flex-grow flex justify-between items-center ml-4">
                <div className="flex flex-col">
                  <h3 className="text-base font-semibold">Repeat Patients</h3>
                </div>
                <div className="text-2xl">{repeatPatients === 0 ? '00' : repeatPatients}</div>
              </div>
            </div>

            <div className="stats-box bg-white rounded-lg shadow-lg p-4 flex items-center w-[370px]">
              <div className="relative flex items-center justify-center" style={{ backgroundColor: 'rgba(139, 198, 51, 0.1)', width: '45px', height: '45px', borderRadius: '50%' }}>
                <FaHospitalUser className="text-2xl" style={{ color: '#8BC633' }} />
              </div>
              <div className="flex-grow flex justify-between items-center ml-4">
                <div className="flex flex-col">
                  <h3 className="text-base font-semibold">Admitted Patients</h3>
                </div>
                <div className="text-2xl">{admittedPatients === 0 ? '00' : admittedPatients}</div>
              </div>
            </div>

            <div className="stats-box bg-white rounded-lg shadow-lg p-4 flex items-center w-[370px]">
              <div className="relative flex items-center justify-center" style={{ backgroundColor: '#f5effb', width: '45px', height: '45px', borderRadius: '50%' }}>
                <FaFileAlt className="text-2xl" style={{ color: '#9A5BD4' }} />
              </div>
              <div className="flex-grow flex justify-between items-center ml-4">
                <div className="flex flex-col">
                  <h3 className="text-base font-semibold">Total Claim</h3>
                </div>
                <div className="text-2xl">{totalClaim === 0 ? '00' : totalClaim}</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 py-4 mx-7">
            <div className="bg-white shadow-xl rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold">Appointment</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setIsYearSelected(false)}
                    className={`px-4 py-2 rounded ${!isYearSelected ? 'bg-[#0EABEB] text-white' : 'bg-white text-[#A7A7A7]'}`}
                  >
                    Month
                  </button>
                  <button
                    onClick={() => setIsYearSelected(true)}
                    className={`px-4 py-2 rounded ${isYearSelected ? 'bg-[#0EABEB] text-white' : 'bg-white text-[#A7A7A7]'}`}
                  >
                    Year
                  </button>
                </div>
              </div>
              <Chart options={appointmentChartData.options} series={appointmentChartData.series} type="bar" height={250} />
            </div>

            {/* Patients Chart */}
            <div className="bg-white shadow-xl rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold">Patients Summary</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setViewMode('week')}
                    className={`px-4 py-2 rounded ${viewMode === 'week' ? 'bg-[#0EABEB] text-white' : 'bg-white text-[#A7A7A7]'}`}
                  >
                    Week
                  </button>
                  <button
                    onClick={() => setViewMode('day')}
                    className={`px-4 py-2 rounded ${viewMode === 'day' ? 'bg-[#0EABEB] text-white' : 'bg-white text-[#A7A7A7]'}`}
                  >
                    Day
                  </button>
                </div>
              </div>
              <Chart options={patientsChartData.options} series={patientsChartData.series} type="line" height={250} />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 py-4 mx-7">
            <div className="bg-white p-3 shadow-xl rounded-lg flex flex-col">
              <div className="til mb-3">
                <h3 className="text-xl text-black" style={{ fontFamily: 'Lato', fontWeight: 700 }}>
                  Patients Count Department
                </h3>
              </div>

              {/* Header Row */}
              <div className="flex items-center justify-between p-2 bg-[#F6F8FB] overscroll-none">
                <span
                  className="text-[#000]"
                  style={{ fontFamily: 'Lato', fontWeight: 600, fontSize: '14px' }}
                >
                  Department Name
                </span>
                <span
                  className="text-[#000]"
                  style={{ fontFamily: 'Lato', fontWeight: 600, fontSize: '14px' }}
                >
                  Patient Count
                </span>
              </div>

              {/* Scrollable Content */}
              <div className="p-2 scrollable-content">

                {[
                  { name: "Cardiology", count: 105 },
                  { name: "Endocrinologist", count: 254 },
                  { name: "Gastroenterologist", count: 657 },
                  { name: "Anesthesiologist", count: 105 },
                  { name: "Pediatrician", count: 105 },
                  { name: "Ophthalmologist", count: 105 },
                ].map((dept, index) => (
                  <div
                    key={index}
                    className="box flex items-center justify-between py-1 px-2"
                  >
                    <div className="title">
                      <span
                        className="text-md text-[#4A4A4A]"
                        style={{ fontFamily: 'Lato', fontWeight: 600, fontSize: '14px' }}
                      >
                        {dept.name}
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-2 rounded-xl px-2 py-1"
                      style={{
                        backgroundColor: 'rgba(57, 151, 61, 0.1)',
                        fontFamily: 'Lato',
                        fontWeight: 600,
                        fontSize: '14px',
                      }}
                    >
                      <FaUserFriends className="text-green-600 text-xs" />
                      <span className="text-[#0EABEB]" style={{ fontFamily: 'Lato', fontWeight: 600, fontSize: '12px' }}>{dept.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-3 shadow-xl rounded-lg flex flex-col">
              <div className="til mb-3">
                <h3 className="font-bold text-xl text-black" style={{ fontFamily: 'Lato' }}>
                  Doctors Count Department
                </h3>
              </div>

              {/* Header Row */}
              <div className="flex items-center justify-between p-2 bg-[#F6F8FB] overscroll-none">
                <span
                  className="text-[#000]"
                  style={{ fontFamily: 'Lato', fontWeight: 600, fontSize: '14px' }}
                >
                  Department Name
                </span>
                <span
                  className="text-[#000]"
                  style={{ fontFamily: 'Lato', fontWeight: 600, fontSize: '14px' }}
                >
                  Doctor Count
                </span>
              </div>

              {/* Scrollable Content */}
              <div className="p-2 scrollable-content">
                {[
                  { name: "Cardiology", count: 105 },
                  { name: "Endocrinologist", count: 254 },
                  { name: "Gastroenterologist", count: 657 },
                  { name: "Anesthesiologist", count: 105 },
                  { name: "Pediatrician", count: 105 },
                  { name: "Ophthalmologist", count: 105 },
                ].map((dept, index) => (
                  <div
                    key={index}
                    className="box flex items-center justify-between py-1 px-2"
                  >
                    <div className="title">
                      <span
                        className="text-md text-[#4A4A4A]"
                        style={{ fontFamily: 'Lato', fontWeight: 600, fontSize: '14px' }}
                      >
                        {dept.name}
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-2 rounded-xl px-2 py-1"
                      style={{
                        backgroundColor: 'rgba(14, 171, 235, 0.1)',
                        fontFamily: 'Lato',
                        fontWeight: 600,
                        fontSize: '14px',
                      }}
                    >
                      <FaUserAlt className="text-[#0EABEB] text-xs" />
                      <span className="text-[#0EABEB]" style={{ fontFamily: 'Lato', fontWeight: 600, fontSize: '12px' }}>{dept.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-3 shadow-xl rounded-lg flex flex-col">
              <div className="mb-3">
                <h3 className="font-bold text-xl text-black" style={{ fontFamily: 'Lato' }}>
                  Patients Age
                </h3>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: '#F6F8FB' }}>
                {/* Donut chart box */}
                <div className="flex-1 flex justify-center">
                  <Chart options={chartOptions} series={series} type="donut" width="250" />
                </div>

                {/* Age groups and percentages box */}
                <div className="ml-4 flex-1 bg-white p-2 rounded-lg">
                  {series.map((count, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-dashed border-gray-300">
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full mr-2" style={{ background: getGradient(index) }}></span>
                        {/* Applying the Lato font and color from the dot */}
                        <span className="font-medium" style={{ color: getGradient(index), fontFamily: 'Lato', Color: '#4F4F4F' }}>
                          {ages[index]}
                        </span>
                      </div>
                      {/* Applying the same color as the dot for the percentage */}
                      <span className="font-medium" style={{ color: getGradient(index), fontFamily: 'Lato', fontWeight: '600' }}>
                        {count}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      <div className="layout-overlay layout-menu-toggle" />
    </div >
  );
};

export default Reporting;

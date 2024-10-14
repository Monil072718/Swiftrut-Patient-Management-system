import React from 'react';

const DoctorAppointment = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow-md border-r">
        
        <img
          src="assets/img/Logo.png"
          alt="Registration"
          className=""
        />
        <nav className="space-y-4">
          <a href="#" className="flex items-center p-2 text-blue-600 bg-blue-50 rounded-md">
            <span className="mr-2">📅</span> Appointment Management
          </a>
          <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <span className="mr-2">🗄️</span> Patient Record Access
          </a>
          <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <span className="mr-2">💊</span> Prescription Tools
          </a>
          <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <span className="mr-2">📞</span> Teleconsultation Module
          </a>
          <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <span className="mr-2">💬</span> Chat
          </a>
        </nav>
        <button className="flex items-center p-2 mt-12 text-red-600 bg-red-50 rounded-md">
          <span className="mr-2">🚪</span> Logout
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-50">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <div className="text-2xl font-bold">Appointment Management</div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Quick Search"
              className="border rounded-lg p-2 text-sm focus:outline-none"
            />
            <span className="cursor-pointer">🔔</span>
            <span className="cursor-pointer">👤</span>
          </div>
        </header>

        {/* Tabs */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="flex space-x-4">
            <button className="text-blue-600 font-semibold">Today Appointment</button>
            <button className="text-gray-600 hover:text-blue-600">Upcoming Appointment</button>
            <button className="text-gray-600 hover:text-blue-600">Previous Appointment</button>
            <button className="text-gray-600 hover:text-blue-600">Cancel Appointment</button>
          </div>
        </div>

        {/* Appointment Search and Filter */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Search Patient"
              className="border p-2 rounded-lg text-sm focus:outline-none"
            />
            <div className="flex items-center space-x-4">
              <button className="bg-gray-100 p-2 rounded-lg border text-sm">Any Date</button>
              <button className="bg-blue-600 text-white p-2 rounded-lg text-sm">Appointment Time Slot</button>
            </div>
          </div>
        </div>

        {/* Appointment Table */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Today Appointment</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-3 border-b">Patient Name</th>
                <th className="p-3 border-b">Disease Name</th>
                <th className="p-3 border-b">Patient Issue</th>
                <th className="p-3 border-b">Appointment Date</th>
                <th className="p-3 border-b">Appointment Time</th>
                <th className="p-3 border-b">Appointment Type</th>
                <th className="p-3 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Placeholder row for no appointments */}
              <tr>
                <td colSpan="7" className="text-center py-12 text-gray-500">
                  <div className="flex flex-col items-center">
                    <img src="appointment-placeholder.png" alt="No Appointments" className="w-32 h-32 mb-4" />
                    <span>No Today Appointment Found Yet</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointment;

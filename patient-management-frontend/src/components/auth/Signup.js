import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    hospital: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5500/api/auth/signup', userData);
      navigate('/login');
    } catch (error) {
      setError('Signup failed. Try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-lg w-full max-w-lg p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-900">Registration</h2>
        <form onSubmit={handleSignup}>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group">
              <label className="block text-sm font-semibold text-gray-700">First Name*</label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={userData.firstName}
                onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label className="block text-sm font-semibold text-gray-700">Last Name*</label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={userData.lastName}
                onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="form-group">
              <label className="block text-sm font-semibold text-gray-700">Email Address*</label>
              <input
                type="email"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label className="block text-sm font-semibold text-gray-700">Phone Number*</label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={userData.phone}
                onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="form-group">
              <label className="block text-sm font-semibold text-gray-700">Country*</label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={userData.country}
                onChange={(e) => setUserData({ ...userData, country: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label className="block text-sm font-semibold text-gray-700">State*</label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={userData.state}
                onChange={(e) => setUserData({ ...userData, state: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label className="block text-sm font-semibold text-gray-700">City*</label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={userData.city}
                onChange={(e) => setUserData({ ...userData, city: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="form-group mt-4">
            <label className="block text-sm font-semibold text-gray-700">Select Hospital*</label>
            <select
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={userData.hospital}
              onChange={(e) => setUserData({ ...userData, hospital: e.target.value })}
              required
            >
              <option>Select Hospital</option>
              <option>Hospital 1</option>
              <option>Hospital 2</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="form-group">
              <label className="block text-sm font-semibold text-gray-700">Password*</label>
              <input
                type="password"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label className="block text-sm font-semibold text-gray-700">Confirm Password*</label>
              <input
                type="password"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={userData.confirmPassword}
                onChange={(e) =>
                  setUserData({ ...userData, confirmPassword: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="mt-4 flex items-center">
            <input type="checkbox" className="mr-2" required />
            <span className="text-sm">I agree to all the <a href="#" className="text-blue-500">T&C</a> and <a href="#" className="text-blue-500">Privacy Policies</a>.</span>
          </div>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <button
            type="submit"
            className="mt-6 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md"
          >
            Register
          </button>

          <p className="text-sm text-center mt-4">
            Already have an account? <a href="/login" className="text-blue-500">Login</a>
          </p>
        </form>
      </div>

      <div className="hidden md:block w-1/2 p-4">
        {/* Add your image or design here */}
        <img src="path_to_image" alt="Hospital Design" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default Signup;

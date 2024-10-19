import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Checkbox,
  FormControlLabel,
  MenuItem,
  IconButton
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    hospital: '',
    password: '',
    confirmPassword: '',
    agreed: false
  });

  const [error, setError] = useState('');
  const hospitals = ['Fountain Grove Medical Clinic', 'Silver Peak Medical Center', 'Bliss Angel Hospital', 'Peace Feather Medical Clinic', 'Rose Point Clinic', 'Dream IsIe Medical Clinic', 'Mirror Eden General Hospital'];
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, agreed: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!formData.agreed) {
      setError('You must agree to the terms and conditions');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5500/api/auth/signup', formData); // Send data to API
      console.log('Signup Data:', response.data); // Log response data
      Navigate('/login'); // Navigate to login page on successful signup
    } catch (error) {
      setError('Signup failed. Try again.'); // Set error message on failure
    }

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      state: '',
      city: '',
      hospital: '',
      password: '',
      confirmPassword: '',
      agreed: false
    });
    setError('');
  };
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div className="flex h-screen">
      {/* Left Section: Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100">
        <Box className="bg-white p-8 rounded-2xl shadow-lg w-1/2">
          <Typography variant="h4" className="mb-[4] " style={{ fontFamily: 'Lato', fontWeight: '600', color: '#000' }}>
            Registration
          </Typography>
          {error && <Typography color="error" className="mb-4">{error}</Typography>}
          <form onSubmit={handleSubmit} className='mt-4'>
            {/* First Name and Last Name */}
            <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
              <div className="flex-1">
                <TextField
                  fullWidth
                  name="firstName"
                  variant="outlined"
                  label="First Name"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  InputLabelProps={{
                    shrink: true,
                    style: {
                      textDecoration: 'none',
                      color: 'inherit',
                      fontWeight: '600',
                      fontFamily: 'lato',
                      color: '#030229'
                    },
                  }}
                />
              </div>
              <div className="flex-1">
                <TextField
                  fullWidth
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  InputLabelProps={{
                    shrink: true,
                    style: {
                      textDecoration: 'none',
                      color: 'inherit',
                      fontWeight: '600',
                      fontFamily: 'lato',
                      color: '#030229'
                    },
                  }}
                />
              </div>
            </div>

            {/* Email and Phone Number */}
            <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
              <div className="flex-1">
                <TextField
                  fullWidth
                  name="email"
                  variant="outlined"
                  label="Email Address"
                  placeholder="Enter Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  InputLabelProps={{
                    shrink: true,
                    style: {
                      textDecoration: 'none',
                      color: 'inherit',
                      fontWeight: '600',
                      fontFamily: 'lato',
                      color: '#030229'
                    },
                  }}
                />
              </div>
              <div className="flex-1">
                <TextField
                  fullWidth
                  name="phone"
                  type="tel"
                  label="Phone Number"
                  variant="outlined"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  InputLabelProps={{
                    shrink: true,
                    style: {
                      textDecoration: 'none',
                      color: 'inherit',
                      fontWeight: '600',
                      fontFamily: 'lato',
                      color: '#030229'
                    },
                  }}
                />
              </div>
            </div>

            {/* Country, State, City */}
            <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
              <div className="flex-1">
                <TextField
                  select
                  fullWidth
                  name="country"
                  variant="outlined"
                  label="Country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  InputLabelProps={{
                    shrink: true,
                    style: {
                      textDecoration: 'none',
                      color: 'inherit',
                      fontWeight: '600',
                      fontFamily: 'lato',
                      color: '#030229'
                    },
                  }}
                >
                  <MenuItem sx={{ py: 1, px: 2, fontFamily: 'Lato', '&.Mui-selected': { color: '#0EABEB', backgroundColor: 'transparent', }, }} value="India">India</MenuItem>
                  <MenuItem sx={{ py: 1, px: 2, fontFamily: 'Lato', '&.Mui-selected': { color: '#0EABEB', backgroundColor: 'transparent', }, }} value="USA">USA</MenuItem>
                  <MenuItem sx={{ py: 1, px: 2, fontFamily: 'Lato', '&.Mui-selected': { color: '#0EABEB', backgroundColor: 'transparent', }, }} value="UK">UK</MenuItem>
                </TextField>
              </div>
              <div className="flex-1">
                <TextField
                  select
                  fullWidth
                  name="state"
                  variant="outlined"
                  label="State"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  InputLabelProps={{
                    shrink: true,
                    style: {
                      textDecoration: 'none',
                      color: 'inherit',
                      fontWeight: '600',
                      fontFamily: 'lato',
                      color: '#030229'
                    },
                  }}
                >
                  <MenuItem sx={{ py: 1, px: 2, fontFamily: 'Lato', '&.Mui-selected': { color: '#0EABEB', backgroundColor: 'transparent', }, }} value="Maharashtra">Maharashtra</MenuItem>
                  <MenuItem sx={{ py: 1, px: 2, fontFamily: 'Lato', '&.Mui-selected': { color: '#0EABEB', backgroundColor: 'transparent', }, }} value="Gujarat">Gujarat</MenuItem>
                  <MenuItem sx={{ py: 1, px: 2, fontFamily: 'Lato', '&.Mui-selected': { color: '#0EABEB', backgroundColor: 'transparent', }, }} value="Karnataka">Karnataka</MenuItem>
                </TextField>
              </div>
              <div className="flex-1">
                <TextField
                  select
                  fullWidth
                  name="city"
                  variant="outlined"
                  placeholder="Enter City"
                  label="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  InputLabelProps={{
                    shrink: true,
                    style: {
                      textDecoration: 'none',
                      color: 'inherit',
                      fontWeight: '600',
                      fontFamily: 'Lato',
                      color: '#030229'
                    },
                  }}
                >
                  <MenuItem sx={{ py: 1, px: 2, fontFamily: 'Lato', '&.Mui-selected': { color: '#0EABEB', backgroundColor: 'transparent' } }} value="Surat">Surat</MenuItem>
                  <MenuItem sx={{ py: 1, px: 2, fontFamily: 'Lato', '&.Mui-selected': { color: '#0EABEB', backgroundColor: 'transparent' } }} value="Ahmedabad">Ahmedabad</MenuItem>
                  <MenuItem sx={{ py: 1, px: 2, fontFamily: 'Lato', '&.Mui-selected': { color: '#0EABEB', backgroundColor: 'transparent' } }} value="Gandhinagar">Gandhinagar</MenuItem>
                </TextField>
              </div>

            </div>

            {/* Hospital Name */}
            <div className="mb-4">
              <TextField
                select
                fullWidth
                name="hospital"
                variant="outlined"
                placeholder="Select Hospital"
                value={formData.hospital}
                onChange={handleChange}
                label="Hospital Name"
                required
                InputLabelProps={{
                  shrink: true,
                  style: {
                    textDecoration: 'none',
                    color: 'inherit',
                    fontWeight: '600',
                    fontFamily: 'lato',
                    color: '#030229'
                  },
                }}
              >
                {hospitals.map((hospital) => (
                  <MenuItem sx={{ py: 1, px: 2, fontFamily: 'Lato', '&.Mui-selected': { color: '#0EABEB', backgroundColor: 'transparent', }, }} key={hospital} value={hospital}>
                    {hospital}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <div className="mb-4">
              <TextField
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                required
                InputProps={{
                  shrink: true,
                  style: {
                    textDecoration: 'none',
                    color: 'inherit',
                    fontWeight: '600',
                    fontFamily: 'lato',
                    color: '#030229'
                  },
                  endAdornment: (
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <TextField
                fullWidth
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                variant="outlined"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleClickShowConfirmPassword}>
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
              />
            </div>


            {/* Terms & Conditions */}
            <div className="mb-4">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.agreed}
                    onChange={handleCheckboxChange}
                    name="agreed"
                  />
                }
                label={<span className="font-lato">I agree to all the T&C and Privacy Policies</span>}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="mb-4"
            >
              Register
            </Button>

            {/* Already have an account? */}
            <Typography className="text-center font-lato">
              Already have an account? <Link href="/login" className="text-blue-600">Login</Link>
            </Typography>
          </form>
        </Box>
      </div>

      {/* Right Section: Image */}
      <div className="hidden md:flex w-full md:w-1/2 items-center justify-center relative">
        <img
          src="assets/img/logo.png"
          alt="Registration"
          className="absolute top-[10%] md:top-[10%] right-[20%] md:right-[30%] object-contain"
        />
        <img
          src="assets/img/Doctor.png"
          alt="Registration"
          className="object-contain w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-auto lg:h-auto"
        />
        <img
          src="assets/img/Dot_vector.png"
          alt="Registration"
          className="absolute top-[36%] right-[22%] w-32 h-32 object-contain"
        />
        <img
          src="assets/img/vector_1.png"
          alt="Registration"
          className="absolute bottom-0 right-0 object-contain"
        />
        <img
          src="assets/img/vector_2.png"
          alt="Registration"
          className="absolute top-0 left-0 object-contain"
        />
        <img
          src="assets/img/icon_img_1.png"
          alt="Registration"
          className="absolute top-[15%] md:top-[20%] right-[5%] md:right-[10%] object-contain"
        />
        <img
          src="assets/img/icon_img_2.png"
          alt="Registration"
          className="absolute bottom-[50%] left-[5%] object-contain"
        />
        <img
          src="assets/img/icon_img_3.png"
          alt="Registration"
          className="absolute top-[}40%] left-0 object-contain"
        />
        <img
          src="assets/img/Dot_vector_2.png"
          alt="Registration"
          className="absolute right-0 top-0 object-contain"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-4 text-center text-black">
          <h1 className="text-4xl font-bold">Hospital</h1>
          <p className="mt-2 text-base text-costumDarkGray text-bold">You can stay at your Hospital and contact with your facility</p>
          <div className="flex justify-center mt-4">
            <div className="w-16 h-1 bg-blue-500 rounded-full " /> {/* Rounded line */}
            <div className="w-4 h-4 bg-blue-500 rounded-full ml-2" /> {/* Small circle */}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Signup;


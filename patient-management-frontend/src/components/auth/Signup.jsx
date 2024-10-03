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
        <Box className="bg-white p-8 rounded-2xl shadow-lg w-full w-[600px]">
          <Typography variant="h4" className="mb-4 font-lato font-semibold">
            Registration
          </Typography>
          {error && <Typography color="error" className="mb-4">{error}</Typography>}
          <form onSubmit={handleSubmit}>
            {/* First Name and Last Name */}
            <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
              <div className="flex-1">
                <Typography variant="body1" className="mb-2 font-lato font-semibold">First Name</Typography>
                <TextField
                  fullWidth
                  name="firstName"
                  variant="outlined"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex-1">
                <Typography variant="body1" className="mb-2 font-lato font-semibold">Last Name</Typography>
                <TextField
                  fullWidth
                  name="lastName"
                  variant="outlined"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email and Phone Number */}
            <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
              <div className="flex-1">
                <Typography variant="body1" className="mb-2 font-lato">Email Address</Typography>
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  variant="outlined"
                  placeholder="Enter Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex-1">
                <Typography variant="body1" className="mb-2 font-lato">Phone Number</Typography>
                <TextField
                  fullWidth
                  name="phone"
                  type="tel"
                  variant="outlined"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Country, State, City */}
            <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
              <div className="flex-1">
                <Typography variant="body1" className="mb-2 font-lato">Country</Typography>
                <TextField
                  select
                  fullWidth
                  name="country"
                  variant="outlined"
                  value={formData.country}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="UK">UK</MenuItem>
                </TextField>
              </div>
              <div className="flex-1">
                <Typography variant="body1" className="mb-2 font-lato">State</Typography>
                <TextField
                  select
                  fullWidth
                  name="state"
                  variant="outlined"
                  value={formData.state}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                  <MenuItem value="Gujarat">Gujarat</MenuItem>
                  <MenuItem value="Karnataka">Karnataka</MenuItem>
                </TextField>
              </div>
              <div className="flex-1">
                <Typography variant="body1" className="mb-2 font-lato">City</Typography>
                <TextField
                  fullWidth
                  name="city"
                  variant="outlined"
                  placeholder="Enter City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Hospital Name */}
            <div className="mb-4">
              <Typography variant="body1" className="mb-2 font-lato">Hospital Name</Typography>
              <TextField
                select
                fullWidth
                name="hospital"
                variant="outlined"
                placeholder="Select Hospital"
                value={formData.hospital}
                onChange={handleChange}
                required
              >
                {hospitals.map((hospital) => (
                  <MenuItem key={hospital} value={hospital}>
                    {hospital}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <div className="mb-4">
              <Typography variant="body1" className="mb-2 font-lato">Password</Typography>
              <TextField
                fullWidth
                name="password"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                required
                InputProps={{
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
              <Typography variant="body1" className="mb-2 font-lato">Confirm Password</Typography>
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
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-4 text-center text-white">
          <img
            src="assets/img/Hospital_text.png"
            alt="Registration"
            className="mx-auto w-3/4 h-auto"
          />
        </div>
      </div>

    </div>
  );
};

export default Signup;

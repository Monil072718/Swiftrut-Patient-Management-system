import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Checkbox, FormControlLabel, Button } from '@mui/material';

function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5500/api/auth/login', {
        email: emailOrPhone, // Use emailOrPhone for email login
        password
      });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      setError('Invalid login credentials');
    }
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === 'emailOrPhone') {
      setEmailOrPhone(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'rememberMe') {
      setRememberMe(checked);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section: Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100">
        <Box className="bg-white p-8 rounded-2xl shadow-lg w-1/2">
          <Typography variant="h4" className="mb-[20px] font-lato font-semibold">
            Login
          </Typography>
          {error && <Typography color="error" className="mb-4">{error}</Typography>}
          <form onSubmit={handleLogin} className='mt-4'>
            {/* Email or Phone */}
            <div className="mb-4">
              <TextField
                label="Email or Phone"
                name="emailOrPhone"
                variant="outlined"
                fullWidth
                required
                value={emailOrPhone}
                onChange={handleChange}
                placeholder="Enter email or phone"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <TextField
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                fullWidth
                required
                value={password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex justify-between mb-4">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={handleChange}
                    name="rememberMe"
                  />
                }
                label="Remember Me"
              />
              <Link to="/forgot-password" variant="body2">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="mb-4"
            >
              Login
            </Button>

            {/* Don't have an account? */}
            <Typography className="text-center">
              Don’t have an account?{' '}
              <Link to="/signup" className="text-blue-600">
                Register
              </Link>
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
}

export default Login;

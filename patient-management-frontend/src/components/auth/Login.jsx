import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import logo from "../../assets/Images/logo.png";

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
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 px-20"> {/* Added padding to the form container */}
        <Box className="bg-white p-8 rounded-2xl shadow-lg w-full w-[600px]">
          <Typography variant="h4" className="mb-4 font-lato font-semibold">
            Login
          </Typography>
          {error && <Typography color="error" className="mb-4">{error}</Typography>}
          <form onSubmit={handleLogin}>
            {/* Email or Phone */}
            <div className="mb-4 mt-4">
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
            <div className="relative mb-6">
              <input
                type="text"
                id="emailOrPhone"
                name="emailOrPhone"
                className={`block w-full px-4 py-2 text-sm text-gray-900 bg-transparent border rounded-lg appearance-none focus:outline-none focus:ring-0 peer "border-red-500" : "border-gray-300"
    }`}
                placeholder="Password"
                value=""
                onChange=""
                required
              />
              <label
                htmlFor="password"
                className="absolute left-3 -top-3 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 transform scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 "
              >
                Password <span className="text-red-500">*</span>
              </label>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex justify-between mb-4">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={handleChange}
                    name="rememberMe" className='rounded'
                  />
                }
                label="Remember Me"
              />
              <Link to="/forgot-password" variant="body2" className='text-center mt-2 text-blue-600 '>
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
            <Typography className="text-center pt-4"> {/* Added margin-top class */}
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
}

export default Login;

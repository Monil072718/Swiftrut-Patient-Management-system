import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

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

  const [errors, setErrors] = useState({});
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
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");

  return (
    <div className="flex h-screen">
      {/* Left Section: Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100">
      <Box className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <Typography variant="h4" className="mb-6 font-semibold pb-5">
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          {/* Email or Phone Input */}
          <div className="relative mb-4">
            <input
              type="text"
              id="email"
              name="email"
              className={`peer w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter Email or Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="email"
              className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3"
            >
              Email or Phone<span className="text-red-500">*</span>
            </label>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password Input */}
          <div className="relative mb-4">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              className={`peer w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0 ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="password"
              className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3"
            >
              Password<span className="text-red-500">*</span>
            </label>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
              {showPassword ? <AiOutlineEyeInvisible className="text-gray-500" /> : <AiOutlineEye className="text-gray-500" />}
            </div>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex justify-between items-center mb-4">
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Remember me"
            />
            <Link to="/forgot-password" className="text-base text-sky-500 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full py-2 bg-blue-900 font-semibold rounded-md   "
          >
            Login
          </Button>

          {/* Registration Link */}
          <Typography className="text-center mt-4 text-sm">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Registration
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

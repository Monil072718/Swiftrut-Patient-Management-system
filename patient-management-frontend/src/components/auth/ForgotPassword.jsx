import React, { useState } from 'react';
import axios from 'axios';
import { Box, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleGetOtp = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5500/api/auth/get-otp', { emailOrPhone });
      setMessage('OTP sent to your email/phone.');
    } catch (error) {
      setMessage('Error sending OTP. Try again.');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section: Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100">
        <Box className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
          <Typography variant="h4" className="mb-4 font-lato font-semibold text-center">
            Forgot Password
          </Typography>
          <Typography variant="body1" className="mb-4 text-center text-sm">
            Enter your email or phone and we’ll send you a OTP to reset your password.
          </Typography>
          <form onSubmit={handleGetOtp}>
            <div className="mb-4">
              <TextField
                label="Email or Phone"
                variant="outlined"
                fullWidth
                required
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
              />
            </div>
            {message && (
              <Typography className="text-center mb-4">
                {message}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="mb-4"
            >
              Get OTP
            </Button>
          </form>
          <Typography className="text-center mt-">
            <Link href="/login" className="text-blue-600 ">
              Back to Login
            </Link>
          </Typography>
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
      <h1>hi</h1>
    </div>
  );
}

export default ForgotPassword;

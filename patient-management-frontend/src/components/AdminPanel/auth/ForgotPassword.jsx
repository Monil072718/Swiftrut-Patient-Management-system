import React, { useState } from 'react';
import axios from 'axios';
import { Box, Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [message, setMessage] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const generateOtp = () => {
    // Generate a random 6-digit OTP
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(generatedOtp);
    alert(`Your OTP is: ${generatedOtp}`); // Display the OTP (for demo purposes)

    // Navigate to the OTP verification page
    navigate('/verify-otp', { state: { otp } }); // Pass OTP to the next page
  };


  const handleGetOtp = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (!emailOrPhone) {
      // Optional: Show an error if no email/phone is entered
      alert('Please enter your email or phone number.');
      return;
    }

    try {
      // Make the API call to send OTP
      const response = await axios.post('/api/send-otp', { emailOrPhone });

      if (response.data.success) {
        setOtpSent(true);
        alert('OTP sent successfully!'); // Optionally, you can show a success message
      } else {
        alert('Failed to send OTP. Please try again.'); // Handle errors
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('An error occurred. Please try again.');
    }
  };


  return (
    <div className="flex h-screen">
      {/* Left Section: Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100">
        <Box className="bg-white p-10 rounded-2xl shadow-lg w-1/2">
          <Typography variant="h4" className="text-start" sx={{ fontFamily: 'Lato', fontWeight: '600', mb: '6px' }}>
            Forgot Password
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '10px', fontFamily: 'Lato', fontWeight: '400', }}>
            Enter your email or phone and we’ll send you a OTP to reset your password.
          </Typography>
          <form onSubmit={handleGetOtp} className='mt-4'>
            <div className="mb-4">
              <TextField
                fullWidth
                label="Forgot Password"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                placeholder="Enter Email or Phone Number"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                  style: {
                    textDecoration: 'none',
                    color: 'inherit',
                    fontWeight: '600',
                    fontFamily: 'lato'
                  },
                }}
              />
            </div>
            {message && (
              <Typography className="text-center mb-4">
                {message}
              </Typography>
            )}
            <Button
              type="button" // Change to button type
              fullWidth
              variant="contained"
              className="mb-4"
              onClick={generateOtp} // Call the generateOtp function
              sx={{
                backgroundColor: emailOrPhone ? '#0eabeb' : '#F6F8FB',
                color: emailOrPhone ? '#fff' : '#4F4F4F',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: emailOrPhone ? '#0eabeb' : '#F6F8FB',
                  boxShadow: 'none',
                },
                borderRadius: '10px',
                fontFamily: 'Lato',
                fontWeight: '600',
              }}
            >
              Get OTP
            </Button>
          </form>
          <Typography className="text-center mt-">
            <Link href="/login" style={{ fontFamily: 'Lato', color: '#5678E9', fontSize: '12px', fontWeight: '600' }}>
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

export default ForgotPassword;

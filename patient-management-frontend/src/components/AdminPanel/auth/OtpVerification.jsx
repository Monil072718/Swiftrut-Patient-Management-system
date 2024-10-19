import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

function OtpVerification() {
    const location = useLocation();
    const { otp : initialOtp} = location.state || {}; // Get the OTP from the previous page
    const [inputOtp, setInputOtp] = useState(Array(6).fill(''));
    const [message, setMessage] = useState('');
    const [timer, setTimer] = useState(30);
    const [isTimerActive, setIsTimerActive] = useState(true);
    const [otp, setOtp] = useState(initialOtp);

    const handleChange = (value, index) => {
        const newOtp = [...inputOtp];
        newOtp[index] = value.slice(-1); 
        setInputOtp(newOtp);

        if (value && index < 5) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault();
        const enteredOtp = inputOtp.join('');
        if (enteredOtp === otp) {
            setMessage('OTP verified successfully!'); 
        } else {
            setMessage('Invalid OTP. Please try again.');
        }
    };

    const handleResendOtp = () => {
        const newOtp = generateOtp(); 
        setOtp(newOtp); 
        setInputOtp(['', '', '', '', '', '']); 
        setMessage('OTP has been resent!'); 
        startTimer(); 
    };

    const generateOtp = () => {
        
        return Math.floor(100000 + Math.random() * 900000).toString();
    };

    const startTimer = () => {
        setIsTimerActive(true);
        setTimer(30);
        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev === 1) {
                    clearInterval(interval);
                    setIsTimerActive(false);
                }
                return prev - 1;
            });
        }, 1000);
    };    

    useEffect(() => {
        if (isTimerActive && timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else if (timer === 0) {
            setIsTimerActive(false);
        }
    }, [isTimerActive, timer]);

    return (
        <div className="flex h-screen">
            {/* Left Section: Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100">
                <Box className="bg-white p-10 rounded-2xl shadow-lg w-1/2">
                    <Typography variant="h4" className="text-start" sx={{ fontFamily: 'Lato', fontWeight: '600', mb: '6px' }}>
                        Enter OTP
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '10px', fontFamily: 'Lato', fontWeight: '400', }}>
                        Please enter the OTP sent to your email or phone to reset your password.
                    </Typography>
                    <form onSubmit={handleVerifyOtp} className='mt-4'>
                        <div className="flex justify-between mb-4">
                            {inputOtp.map((digit, index) => (
                                <input
                                    key={index}
                                    id={`otp-input-${index}`}
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleChange(e.target.value, index)}
                                    className="w-12 h-12 border-2 border-gray-300 text-center text-xl rounded-md"
                                />
                            ))}
                        </div>

                        {/* Timer and Resend OTP Button */}
                        <div className="flex justify-between items-center mb-4">
                            {/* Timer */}
                            <Typography className="text-start">
                                {isTimerActive ? `Resend OTP in ${timer} seconds` : 'OTP expired!'}
                            </Typography>

                            {/* Resend OTP Button */}
                            <Button onClick={handleResendOtp} sx={{ color: '#5678E9' }} disabled={isTimerActive}>
                                Resend OTP
                            </Button>
                        </div>

                        {message && (
                            <Typography className="text-center mb-4">
                                {message}
                            </Typography>
                        )}

                        <Button
                            type="submit" // Use submit type for the button
                            fullWidth
                            variant="contained"
                            className="mb-4"
                            sx={{
                                backgroundColor: inputOtp.every(digit => digit) ? '#0eabeb' : '#F6F8FB',
                                color: inputOtp.every(digit => digit) ? '#fff' : '#4F4F4F',
                                boxShadow: 'none',
                                '&:hover': {
                                    backgroundColor: inputOtp.every(digit => digit) ? '#0eabeb' : '#F6F8FB',
                                    boxShadow: 'none',
                                },
                                borderRadius: '10px',
                                fontFamily: 'Lato',
                                fontWeight: '600',
                            }}
                        >
                            Verify OTP
                        </Button>
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

export default OtpVerification;

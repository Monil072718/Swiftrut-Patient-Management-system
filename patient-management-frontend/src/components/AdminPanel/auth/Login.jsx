import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Checkbox, FormControlLabel, Button, Radio } from '@mui/material';

function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5500/api/auth/login', {
        email: emailOrPhone,
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
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailPattern.test(value)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
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
          <Typography variant="h4" className="mb-[20px]" style={{ fontFamily: 'Lato', fontWeight: '600', color: '#000' }}>
            Login
          </Typography>
          {error && <Typography color="error" className="mb-4">{error}</Typography>}
          <form onSubmit={handleLogin} className='mt-4'>
            <div className="mb-4">
              <TextField
                fullWidth
                label="Emai Or Phone"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                placeholder="Enter Email "
                variant="outlined"
                error={!!emailError}
                helperText={emailError} //
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

            {/* Password */}
            <div className="mb-4">
              <TextField
                fullWidth
                label="Forgot Password"
                name='password'
                value={password}
                onChange={handleChange}
                placeholder="Enter Password"
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

            {/* Remember Me and Forgot Password */}
            <div className="flex justify-between items-center ">
              <FormControlLabel
                control={
                  <Radio
                    checked={rememberMe}
                    onChange={handleChange}
                    name="rememberMe"
                    icon={
                      <span
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          border: '2px solid #0eabeb',
                        }}
                      ></span>
                    }
                    checkedIcon={
                      <span
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          backgroundColor: '#0eabeb',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: '#fff',
                        }}
                      >
                        ✓
                      </span>
                    }
                    sx={{
                      '& .MuiSvgIcon-root': { fontSize: 20 },
                    }}
                  />
                }
                label={
                  <span style={{ fontFamily: 'Lato', fontWeight: '600', fontSize: '12px' }}>
                    Remember Me
                  </span>
                }
              />
              <Link
                to="/forgot-password"
                variant="body2"
                style={{ fontFamily: 'Lato', fontWeight: '600', fontSize: '12px', color: '#5678E9' }}
              >
                Forgot Password?
              </Link>
            </div>


            {/* Login Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="mb-4"
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
                 fontWeight: '600'
              }}
            >
              Login
            </Button>

            {/* Don't have an account? */}
            <Typography className="text-center" style={{ fontFamily: 'Lato', fontWeight: '600', fontSize: '14px', color: '#000' }}>
              Don’t have an account ?{' '}
              <Link to="/signup" style={{ fontFamily: 'Lato', fontWeight: '600', fontSize: '14px', color: '#5678E9' }}>
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

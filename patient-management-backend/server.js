const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path =require('path');
const http = require('http');
const connectDB = require('./src/config/db');
const userRoutes = require('./src/routes/userRoutes');
const profileRoutes = require('./src/routes/profileRoutes');
const appointmentRoutes = require('./src/routes/appointmentRoutes');
const prescriptionRoutes = require('./src/routes/prescriptionRoutes');
const videoCallRoutes = require('./src/routes/videoCallRoutes');
const socketHandler = require('./src/socket');
const paymentRoutes = require('./src/routes/paymentRoutes');
const billingRoutes = require('./src/routes/billingRoutes');
dotenv.config();

const app = express();
const server = http.createServer(app);

//middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//database connection
connectDB();

//routes
app.use('/api/users', userRoutes);
app.use('/api/profile',profileRoutes);
app.use('/api/appointments',appointmentRoutes);
app.use('/api/prescriptions',prescriptionRoutes);
app.use('/api/videocall', videoCallRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/billing', billingRoutes);

socketHandler(server);

//start server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./src/config/db');
const userRoutes = require('./src/routes/userRoutes');
dotenv.config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//database connection
connectDB();

//routes
app.use('/api/users', userRoutes);

//start server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
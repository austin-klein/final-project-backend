// imports
const express = require('express');
const authRoutes = require('./routes/auth');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();

//connect to mongoDB database
connectDB();

// middleware
app.use(cors());
app.use(express.json());
app.use(authRoutes);

// setup
const PORT = process.env.PORT || 5000;
app.listen(5000, () => console.log(`Server running on port ${PORT}`));
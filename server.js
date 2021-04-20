// imports
const express = require('express');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();




const CONNECTION_URL = 'mongodb+srv://Test:<password>@cluster0.ak6zj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;


// imediatly above here the password needs to be in there

//connect to mongoDB database
connectDB();

// middleware
app.use(cors());
app.use(express.json());
app.use(authRoutes);
app.use(userRoutes);




// setup
const PORT = process.env.PORT || 5000;
app.listen(5000, () => console.log(`Server running on port ${PORT}`));
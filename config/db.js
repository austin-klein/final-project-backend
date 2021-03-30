const mongoose = require('mongoose');

// connection to database
const connectDB = async () => {
    await mongoose.connect('MONGO STRING HERE', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    });

    console.log('MongoDB connected');
};

module.exports = connectDB;
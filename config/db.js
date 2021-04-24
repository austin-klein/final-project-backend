const mongoose = require('mongoose');

// connection to database
const connectDB = async () => {
    await mongoose.connect('mongodb+srv://dbuser:password123!@cluster0.cflb9.mongodb.net/javadata?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    });

    console.log('MongoDB connected');
};

module.exports = connectDB;



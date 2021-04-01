const mongoose = require('mongoose');

// connection to database
const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Test:TwdaN1OxTSBYICbl@cluster0.ak6zj.mongodb.net/database?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    });

    console.log('MongoDB connected');
};

module.exports = connectDB;



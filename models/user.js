const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        min: 4,
        max: 250
    },
    firstName: {
        type: String,
        required: true,
        min: 4,
        max: 250
    },
    lastName: {
        type: String,
        required: true,
        min: 4,
        max: 250
    },
    email: {
        type: String,
        required: true,
        min: 4,
        max: 250
    },

    password: {
        type: String,
        reqired: true,
        min: 4,
        max: 250
    },

    coffee: {
        type: Array
    }
});

// hashing password
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// checking password for login
UserSchema.methods.matchPasswords = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// assigning jwt token
const jwtSecret = '3c0227ede3754420bf383f57040d28c2d552ba00161cf9ab19ee516f18e048d682ada7';
UserSchema.methods.getToken = function () {
    return jwt.sign({ id: this._id }, jwtSecret, { expiresIn: '10min' })
}

module.exports = mongoose.model("User", UserSchema)
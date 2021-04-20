const mongoose = require('mongoose');
const User = require('../models/User');

exports.getUsers = async (req, res) => {
    const users = await User.find()
    res.send(users)
}

exports.addCoffee = async (req, res) => {

    try {
        const { username, coffee } = req.body;
        const updatedUser = await User.updateOne({ username: username }, { $addToSet: { coffee: coffee } });
        res.send(updatedUser)
    } catch (error) {
        res.send(error);
    }


};

exports.getCoffee = async (req, res) => {
    const username = req.query.username;

    try {
        const user = await User.findOne({ username: username });
        res.send(user.coffee);
    } catch (error) {
        res.send(error);
    }
}

// 'strong'
// 'caffine'
// 'sugar'
// 'dairy'
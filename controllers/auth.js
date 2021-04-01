const mongoose = require('mongoose');
const user = require('../models/user');

//register logic
exports.register = (req, res, next) => {
    const newUser = req.body

    user.create(newUser, (err, data) => {
        if (err) {
            res.staus(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
}



//login logic
exports.login = (req, res, next) => {
    res.send('login')
}
const mongoose = require('mongoose');
const model = {} //using this till model is created

//register logic
exports.register = (req, res, next) => {
    const newUser = req.body

    model.create(newUser, (err, data) => {
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
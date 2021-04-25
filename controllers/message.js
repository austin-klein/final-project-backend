const mongoose = require('mongoose');
const Message = require('../models/message');

exports.getMessages = async (req, res, next) => {
    Message.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            console.log(data);
            res.status(200).send(data)
        }
    })
}

exports.addMessage = async (req, res, next) => {
    const newMessage = req.body;
    console.log(newMessage);

    Message.create(newMessage, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else
            res.status(201).send(data);
    })
}
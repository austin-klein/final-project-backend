const mongoose = require('mongoose');
const User = require('../models/User');
const Coffee = require('../models/coffee')

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

exports.getItems = (req, res, next) => {
    Coffee.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            console.log(data);
            res.status(200).send(data)
        }
    })
};

// exports.addItems = async (req, res) => {

//     try {
//         const cof = await Coffee.create({
//             name: 'Cappuccino',
//             desc: 'Shot of espresso with 50% steamed milk',
//             image: 'https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg?impolicy=1by1_wide_1242',
//             strong: false
//         })
//         res.send(cof)
//     } catch (error) {
//         res.send(error);
//     }


// };

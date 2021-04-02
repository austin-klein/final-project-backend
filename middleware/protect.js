const jwt = require('jsonwebtoken');
const User = require('../models/User');
const jwtSecret = '3c0227ede3754420bf383f57040d28c2d552ba00161cf9ab19ee516f18e048d682ada7';

exports.protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return next(res.send('error not authorized'))
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);
        const user = await User.findById(decoded.id);

        if (!user) {
            return next(res.send('no user found'));
        }
        req.user = user;
        next();
    } catch (error) {
        return next(res.send(error.message));
    }
}
const express = require('express');
const router = express.Router();
const { getUsers, addCoffee, getCoffee } = require('../controllers/user');
const { protect } = require('../middleware/protect');

// Get Coffee
router.route('/').get(getCoffee); //protect
router.route('/quiz').post(addCoffee); //protect

// testing route
router.route('/users').get(getUsers);


module.exports = router

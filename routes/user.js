const express = require('express');
const router = express.Router();
const { addCoffee, getCoffee, getItems } = require('../controllers/user');
const { protect } = require('../middleware/protect');

// Get Coffee
router.route('/').get(protect, getCoffee);
router.route('/quiz').post(addCoffee);
router.route('/generator').get(protect, getItems);

module.exports = router

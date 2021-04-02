const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/user');
const { protect } = require('../middleware/protect');

// Get all users
router.route('/users').get(protect, getUsers);


module.exports = router

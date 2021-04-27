const express = require('express');
const router = express.Router();
const { getMessages, addMessage } = require('../controllers/message');
const { protect } = require('../middleware/protect');

// Get Coffee
router.route('/share').get(protect, getMessages);
router.route('/share').post(protect, addMessage);


module.exports = router

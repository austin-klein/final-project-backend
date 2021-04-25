const express = require('express');
const router = express.Router();
const { getMessages, addMessage } = require('../controllers/message');
const { protect } = require('../middleware/protect');

// Get Coffee
router.route('/share').get(getMessages); //protect
router.route('/share').post(addMessage); //protect
// router.route('/add').post(addItems);


module.exports = router

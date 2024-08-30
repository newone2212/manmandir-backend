const express = require('express');
const push = require('../controllers/pushNotificationControllers');

const router = express.Router();

//route to add significance
router.post('/send',push.pushNotification);


module.exports = router

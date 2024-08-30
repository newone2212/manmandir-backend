const express = require('express');
const twilio = require('../controllers/twilioControllers');

const router = express.Router();

//route to send OTP
router.post('/send-otp',twilio.sendOtp);

//route to verify OTP
router.post('/verify-otp',twilio.verifyOtp);



module.exports = router

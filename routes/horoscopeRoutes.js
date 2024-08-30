// routes/horoscopeRoutes.js
const express = require('express');
const router = express.Router();
const horoscopeController = require('../controllers/horoscopeControllers');

// Route to get daily horoscope for a specific zodiac sign
router.post('/daily/:zodiacSign', horoscopeController.getDailyHoroscope);

module.exports = router;

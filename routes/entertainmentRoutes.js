// routes/fileRoutes.js
const express = require('express');
const fileController = require('../controllers/entertainmentControllers');

const router = express.Router();

// Routes
router.post('/upload', fileController.uploadFile);
router.get('/get-entertainments', fileController.getEntertainments);
router.get('/get-entertainment/:name', fileController.getAllEntertainments);
router.post('/convert', fileController.convert);

module.exports = router;

const express = require('express');

const image = require('../controllers/imageControllers');
const {upload} = require('../middleware/uploader')

const router = express.Router();

//route to upload image
router.post('/upload', upload.single('image') ,image.imageUpload);

module.exports = router
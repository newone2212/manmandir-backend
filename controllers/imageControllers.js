const express = require('express');
const router = express.Router();


module.exports = {

    //upload images
    imageUpload : async(req,res)=>{
        if (!req.file) {
            return res.status(400).send('No image file');
          }
          const imageUrl = `/uploads/${req.file.filename}`;
          res.send({ imageUrl });
        }
}
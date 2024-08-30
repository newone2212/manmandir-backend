// controllers
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');
const {Entertainment} = require('../models/Entertainments');

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage }).single('file');

const uploadFile = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    // Save file details to the database
    const newFile = new Entertainment({
            name: req.body.name,
            filename: req.file.filename,
            filePath: req.file.path,
          });
          
          newFile.save()
            .then((file) => {
              res.json({
                message: 'File uploaded successfully!',
                file: {
                  id: file._id,
                  name: file.name,
                  filename: file.filename,
                  filePath: file.filePath,
                },
              });
            })
            .catch((err) => {
              res.status(500).json({ error: err.message });
            });
          
    });
  }

  const getEntertainments=async(req,res)=>{
            Entertainment.find()
            .then(result => {
              res.status(200).json({
                entertainments:result
              })
            })
            .catch(err=>{
              console.log(err);
              res.status(500).json({
                error:err
              })
            })
  }

  const getAllEntertainments=async(req,res)=>{
    Entertainment.findOne({name:req.params.name})
    .then(result => {
      res.status(200).json({
        entertainments:result
      })
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({
        error:err
      })
    })
}

const convert=async(req,res)=>{
    const filename=req.body.filename;
    try {
        const pdfFilePath = path.join(__dirname, '../uploads',filename );
    
        if (!fs.existsSync(pdfFilePath)) {
          return res.status(400).json({ error: 'PDF file not found' });
        }
    
        const dataBuffer = fs.readFileSync(pdfFilePath);
        const data = await pdfParse(dataBuffer);
    
        // Extracted text from PDF
        const text = data.text;
    
        res.json({ text });
      } catch (error) {
        console.error('Error converting PDF to text:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

module.exports = {
  uploadFile,
  getEntertainments,
  getAllEntertainments,
  convert
};

const express = require('express');
const significance = require('../controllers/significanceControllers');

const router = express.Router();

//route to add significance
router.post('/add-significance',significance.addSignificance);

//route to get all significance
router.get('/get-all-significance', significance.ListofSignificance);

//route to get details of a particular significance
router.get('/details/:id',significance.significanceDetails);

//route to update significance details
router.patch('/update-significance/:id',significance.updateSignificance);

//route to delete significance
router.get('/delete-significance/:id',significance.deleteSignificance);




module.exports = router

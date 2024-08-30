const express = require('express');
const history = require('../controllers/historyControllers');

const router = express.Router();

//route to add history
router.post('/add-history',history.addHistory);

//route to get all history
router.get('/get-all-history', history.ListofHistory);

//route to get details of a particular history
router.get('/todays',history.historyDetails);




module.exports = router

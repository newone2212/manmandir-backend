const express = require('express');
const subscribe = require('../controllers/subscribeControllers');

const router = express.Router();

//route to add subscribe
router.post('/add-subscribe',subscribe.addSubscribe);

//route to get all subscibe
router.get('/get-all-subscribe', subscribe.ListofSubscribe);

//route to get details of a particular subscriber
router.get('/details/:id',subscribe.subscribeDetails);

//route to delete subscribe
router.delete('/delete-subscribe/:id/:name',subscribe.deleteSubscribe);




module.exports = router

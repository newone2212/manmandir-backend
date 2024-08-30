const express = require('express');
const mandir = require('../controllers/mandirControllers');

const router = express.Router();

//route to add mandir
router.post('/add-mandir',mandir.addMandir);

//route to get all mandirs
router.get('/get-all-mandirs', mandir.ListofMandirs);

//route to get details of a particular mandir
router.get('/details/:id',mandir.mandirDetails);

//route to update mandir details
router.patch('/update-mandir/:id',mandir.updateMandir);
//route to update mandir status details
router.patch('/update-status/:id',mandir.updateStatus);

//route to delete mandir
router.get('/delete-mandir/:id',mandir.deleteMandir);

//route to search mandir on the basis of a keyword
router.post('/search',mandir.search);

//route to get mandir randomly
router.get('/random',mandir.random);

//route to get unsubscribed mandirs of a particular user
router.get('/unsubscribed/:mobile',mandir.unsubscribed);




module.exports = router

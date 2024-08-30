const express = require('express');
const admin = require('../controllers/adminControllers');
const {adminAuth} = require('../middleware/adminAuth');

const router = express.Router();

//route to register admin
router.post('/register',admin.register);

//route to login admin panel
router.post('/login', admin.login);

//route to logout from admin panel
router.post('/logout' ,adminAuth, admin.logout);

//route to get profile of a particular admin
router.get('/profile/:id',admin.Profile);

//route to update profile of a admin
router.patch('/update-profile/:id',admin.updateProfile);

//route to change the password
router.post('/change-pwd/:id',adminAuth, admin.ChangePassword);

//route to update profile of a admin
router.post('/live-arti',admin.searchLiveArtiVideos);




module.exports = router

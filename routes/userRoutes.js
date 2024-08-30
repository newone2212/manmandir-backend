const express = require('express');
const user = require('../controllers/userControllers');

const router = express.Router();

//route to register user
router.post('/register',user.register);

//route to login user
router.post('/login',user.login);

//route to get profile of a particular user
router.get('/profile/:id',user.Profile);

//route to get profile of all users
router.get('/profile',user.allProfile);

//route to update profile of a user
router.patch('/update-profile/:id',user.updateProfile);

//route to update subscription of a user
router.patch('/update-subscribe/:id',user.updateSubscribe);

//route to update unsubscription of a user
router.patch('/update-unsubscribe/:id',user.updateUnubscribe);





module.exports = router

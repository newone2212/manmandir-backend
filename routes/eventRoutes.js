const express = require('express');
const event = require('../controllers/eventControllers');

const router = express.Router();

//route to add event
router.post('/add-event',event.addEvent);

//route to get all events
router.get('/get-all-events', event.ListofEvents);

//route to get details of a particular event
router.get('/details/:id',event.eventDetails);

//route to update event details
router.patch('/update-event/:id',event.updateEvent);

//route to delete event
router.delete('/delete-event/:id',event.deleteEvent);




module.exports = router

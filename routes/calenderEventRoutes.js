const express = require('express');
const calendarEvent = require('../controllers/calendarEventsControllers');

const router = express.Router();

//route to add event
router.post('/add-event',calendarEvent.addEvent);

//route to get all events
router.get('/get-all-events', calendarEvent.ListofEvents);

//route to get details of a particular event
router.post('/details/:id',calendarEvent.eventDetails);

//route to update event details
router.patch('/update-event/:id',calendarEvent.updateEvent);

//route to delete event
router.delete('/delete-event/:id',calendarEvent.deleteEvent);




module.exports = router

const express = require('express');
const router = express.Router();
const eventController = require('../controllers/events.controller')
const organizerController = require('../controllers/organizer.controller')

router.get('/events', eventController.getEvents)
router.get('/events/:id', eventController.getEvent)
router.post('/events', eventController.createEvent )

router.post('/organizer', organizerController.createOrganizer )

module.exports = router
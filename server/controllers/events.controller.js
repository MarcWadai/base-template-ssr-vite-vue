const eventService = require('../services/events.services')

async function createEvent(req, res, next) {
    try {
        const event = await eventService.create(req.body)
        res.json(event)
    } catch(err) {
        console.error(err)
        res.status(500).send('Internal server serror')
    }
}

async function getEvents(req, res, next) {
    // TODO filter by categories
    // TODO filter by dates 
    try {
        const events = await eventService.find({})
        res.json(events)
    } catch(err) {
        console.error(err)
        res.status(500).send('Internal server serror')
    }

}

async function getEvent(req, res, next) {
    try {
        const id = req.params.id
        const event = await eventService.findById(id)
        res.json(event)
    } catch(err) {
        console.error(err)
        res.status(500).send('Internal server serror')
    }

}


module.exports = {
    getEvents,
    getEvent,
    createEvent
}
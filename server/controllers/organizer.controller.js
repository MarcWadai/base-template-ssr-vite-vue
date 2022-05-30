const organizerService = require('../services/organizer.services')

async function createOrganizer(req, res, next) {
    try {
        const organizer = await organizerService.create(req.body)
        res.json(organizer)
    } catch(err) {
        console.error(err)
        res.status(500).send('Internal server serror')
    }
}


module.exports = {
    createOrganizer
}
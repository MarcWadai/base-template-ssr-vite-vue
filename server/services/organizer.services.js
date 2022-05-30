const OrganizerModel = require('../models/organizer.model')


function create(data) {
    const organizer = new OrganizerModel(data)
    return organizer.save()
}

module.exports = {
    create
}
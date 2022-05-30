const EventModel = require('../models/event.model')


function create(data) {
    const event = new EventModel(data)
    return event.save()
}

function find(filters) {
    return EventModel.find(filters).exec()
}

function findById(id) {
    console.log('in service event id', id)
    return EventModel
        .findById(id)
        .populate('organizer')
        .exec()
}


module.exports = {
    create,
    find,
    findById
}
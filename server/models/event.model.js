const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: String,
    startDate: Date,
    endDate: Date,
    website: String,
    visiolink: String,
    description: String,
    organizer: {
        type: mongoose.Types.ObjectId,
        ref: 'organizer'
    },
    categories: [String]
}, { timestamps: true})

module.exports = mongoose.model('event', eventSchema)
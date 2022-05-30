const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    company: String,
    contact: {
        phone: Number,
        email: String
    }
}, { timestamps: true})

module.exports = mongoose.model('organizer', eventSchema)
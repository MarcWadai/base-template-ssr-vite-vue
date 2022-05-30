const mongoose = require('mongoose')

try {
    mongoose.connect('mongodb://localhost:27017/visio')

    mongoose.connection.on('error', err => {
        console.error(err);
    });
} catch (err) {
    console.error(err);
}
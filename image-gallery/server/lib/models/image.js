const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    image: {
        title: String,
        description: String,
        url: String,
        wiki: String
    }
});

module.exports = mongoose.model('Image', songSchema);
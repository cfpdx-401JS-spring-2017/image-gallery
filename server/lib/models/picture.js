const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    title: String,
    description: String, 
    url: String,
});

module.exports = mongoose.model('Picture', schema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
      type: String,
      required: true
    },
    images: Array
});

module.exports = mongoose.model('Album', schema);
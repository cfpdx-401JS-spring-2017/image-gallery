const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const pom = require('./pom');

const schema = new Schema({
  name: { type: String },
  images: [pom.schema]
});

module.exports = mongoose.model('Album', schema);
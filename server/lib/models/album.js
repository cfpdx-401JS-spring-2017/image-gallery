const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({
  title: String,
  images: [{
    title: String,
    required: true 
  },
  {
    description: String,
    required: true
  },
  {
    url: String,
    required: true
  }]
});

module.exports = mongoose.model('Album', schema);
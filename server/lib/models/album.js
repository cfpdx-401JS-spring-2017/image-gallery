const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  images: [
    {
      title: String,
      description: String,
      url: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = mongoose.model('Album', schema);
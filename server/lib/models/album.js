const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    title: String,
    pictures: [{type: Schema.Types.ObjectId, ref: 'Picture'}]
});

module.exports = mongoose.model('Album', schema);

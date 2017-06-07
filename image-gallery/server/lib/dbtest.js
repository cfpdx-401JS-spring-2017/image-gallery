require('./connectDB.js');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    name: String,
    images:[{
        title: String,
        decription: String,
        url: String,
        wiki:String
    }]
});
const Album = mongoose.model('Album', albumSchema);

const albumData = require('./albumsApi.js');
albumData.forEach(albumData => {
    const album = new Album(albumData);
    album.save();
});

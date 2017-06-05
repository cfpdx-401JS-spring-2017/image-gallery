const express = require('express');
const app = express();
const morgan = require('morgan');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(morgan('dev'));
// app.use(express.static(__dirname + '../../app/public/index.html'));

const albums = require('./routes/albums');
const pictures = require('./routes/pictures');

app.use('/api/albums', albums);
app.use('/api/pictures', pictures);

module.exports = app;
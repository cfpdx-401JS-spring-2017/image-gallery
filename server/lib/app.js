const express = require('express');
const app = express();
const morgan = require('morgan');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(morgan('dev'));

const albums = require('./routes/albums');
const images = require('./routes/images');

app.use('/api/albums', albums);
app.use('/api/images', images);

module.exports = app;
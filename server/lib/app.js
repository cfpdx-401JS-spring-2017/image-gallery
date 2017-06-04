const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());

const teaImages = require('./routes/tea-images');

app.use('./teagallery', teaImages);

module.exports = app;
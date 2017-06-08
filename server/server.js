/* eslint no-console: "off" */
const app = require('./lib/app');
const http = require('http');
// require('dotenv').config();

const connect = require('./lib/connect');
const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/tea-image-gallery';
connect(dbUri);

const server = http.createServer(app);

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log('server running on', server.address().port);
});
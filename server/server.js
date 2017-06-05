/* eslint no-console: "off" */
const app = require('./lib/app.js');
const http = require('http');
require('./lib/connect');

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('server is running', server.address());
});
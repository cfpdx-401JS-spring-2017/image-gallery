/* eslint no-console: "off" */
const app = require('./lib/app');
const http = require('http');
require('./lib/connectDB');

const server = http.createServer(app);

server.listen(8080, () => {
    console.log('server running on', server.address());
});
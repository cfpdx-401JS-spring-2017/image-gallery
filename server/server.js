const app = require('./lib/app');
const http = require('http');
require('./lib/connect');

const PORT = process.env.PORT || 3001; 
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log('Serving running on port:', PORT);
});
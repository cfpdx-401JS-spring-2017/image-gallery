const app = require('./lib/app');
const http = require('http');
require('./lib/connect');

const PORT = 3001;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
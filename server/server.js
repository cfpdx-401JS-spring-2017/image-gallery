import app from './lib/app.js';
import http from 'http';

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('server is running', server.address());
});
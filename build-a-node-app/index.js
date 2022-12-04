const http = require('http');

http
  .createServer((req, res) => {
    console.log('Request received');
    res.end('hi from response', 'utf-8');
  })
  .listen(3000);

console.log('Server started');

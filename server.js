// server.js
const http = require('http');

// Set the port to the value of the environment variable PORT, or default to 8080
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}/`);
});

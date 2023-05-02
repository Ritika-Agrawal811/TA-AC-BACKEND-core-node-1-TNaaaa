// Creating Server
const http = require("http");

const host = "localhost";
const port = 3000;

const requestListener = (req, res) => {
  console.log(req.headers);
  console.log(req.url);
  console.log(req.method);
  res.end("Welcome!");
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Listening on server http://${host}:${port}`);
});

// Output

// Listening on server http://localhost:3000
// { host: 'localhost:3000', 'user-agent': 'curl/8.0.1', accept: '*/*' }
// /about
// GET

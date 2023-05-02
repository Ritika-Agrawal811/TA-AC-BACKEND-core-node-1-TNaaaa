// Creating Server
const http = require("http");

const host = "localhost";
const port = 4444;

const server = http.createServer((req, res) => {
  console.log(req.method);
  res.writeHead(201, { "Content-Type": "text/html" });
  res.end("<h1>Welcome!</h1>");
});

server.listen(port, host, () => {
  console.log("Server started");
});

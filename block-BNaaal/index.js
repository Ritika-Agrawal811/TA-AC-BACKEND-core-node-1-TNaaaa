const http = require("http");

http
  .createServer((request, response) => {
    response.end("Welcome");
  })
  .listen(4000, "localhost");

// Creating HTTP Server
const http = require("http");
const url = require("url");

const host = "localhost";
const port = 5000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const pathname = parsedUrl.pathname;

  if (req.method == "GET") {
    if (pathname == "/") {
      res.write("Welcome to homepage");
      res.end();
    } else if (pathname == "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h2>this is all about NodeJS</h2>");
    }
  } else if (req.method == "POST" && pathname == "/about") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(`{message: this is a post request}`);
  } else {
    res.writeHead(404);
    res.end("Page not Found");
  }
});

server.listen(port, host, () => {
  console.log("Starting Server...");
});

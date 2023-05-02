const http = require("http");
const url = require("url");
const fs = require("fs");

const host = "localhost";
const port = 5555;

const server = http.createServer(requestHandler);

function requestHandler(req, res) {
  const parsedUrl = url.parse(req.url);
  const pathname = parsedUrl.pathname;

  if (req.method == "GET") {
    if (pathname == "/file") {
      fs.readFile("./node.html", (err, content) => {
        if (err) console.log(err);
        res.end(content);
      });
    } else if (pathname == "/stream") {
      fs.createReadStream("./node.html").pipe(res);
    }
  } else {
    res.writeHead(404);
    res.end("Page not Found");
  }
}

server.listen(port, host, () => {
  console.log("Server Started");
});

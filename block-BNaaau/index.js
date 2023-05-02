// Q1

const http = require("http");
const host = "localhost";
const port = 5000;

const server = http
  .createServer((req, res) => {
    console.log(req, res);
    res.end("Welcome");
  })
  .listen(port, host, () => {
    console.log("Server Started");
  });

// Q2

const server2 = http.createServer((req, res) => {
  res.end("My first server in NodeJS");
});

server2.listen(5100, "localhost", () => {
  console.log("server started");
});

// Q3

const server3 = http
  .createServer((req, res) => {
    console.log(req.headers["user-agent"]);
    res.end(req.headers["user-agent"]);
  })
  .listen(5555, "localhost", () => {
    console.log("server started");
  });

// Q4

const server4 = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.end(`${req.url} ${req.method}`);
});
server4.listen(5566, "localhost", () => {
  console.log("server started");
});

// Q5

const server5 = http.createServer((req, res) => {
  let headers = req.headers;
  headers = JSON.stringify(headers);
  res.end(`${headers}`);
});

server5.listen(7000, "localhost", () => {
  console.log("server listening on port 7000");
});

// Q7

const server6 = http.createServer((req, res) => {
  res.statusCode = 202;
  res.end("Hello");
});

server6.listen(3333, "localhost", () => {
  console.log("server started");
});

// Q8

const server7 = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end(`<h3>Welcome to altcampus</h3>`);
});

server7.listen(8000, "localhost", () => {
  console.log("server started");
});

// Q9

// const server8 = http.createServer((req, res) => {
//   res.writeHead(200,{ "Content-Type": "text/html" });
//   res.end(`<h3>Welcome to altcampus</h3>`);
// });

// server8.listen(8000, "localhost", () => {
//   console.log("server started");
// });

// Q10

const server9 = http.createServer((req, res) => {
  res.writeHead({ "Content-Type": "application/json" });
  res.end(`{success: true, message: 'Welcome to Nodejs'}`);
});

server9.listen(8888, "localhost", () => {
  console.log("server started");
});

// Q11

const server10 = http.createServer((req, res) => {
  console.log(req.method);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<h2>posted for first time</h2>`);
});

server10.listen(5050, "localhost", () => {
  console.log("server started");
});

// Q12

const url = require("url");

const server11 = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const pathname = parsedUrl.pathname;

  if (req.method == "GET") {
    if (pathname == "/") {
      res.end("Ritika Agrawal");
    } else if (pathname == "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`<h2>Ritika Agrawal</h2>`);
    } else {
      res.statusCode = 404;
      res.end("Page not found");
    }
  }
});

server11.listen(2345, "localhost", () => {
  console.log("server started");
});

// Q13

const fs = require("fs");

const server12 = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const pathname = parsedUrl.pathname;

  if (req.method == "GET" && pathname == "/users") {
    fs.createReadStream("./form.html").pipe(res);
  } else if (req.method == "POST" && pathname == "/users") {
    res.end("Posted for the second time");
  }
});

server12.listen(2300, "localhost", () => {
  console.log("server started");
});

// Q14

const server13 = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl.pathname);
  console.log(req.url);
  console.log(parsedUrl.query);
  res.end(`${JSON.stringify(parsedUrl.query)}`);
});

server13.listen(2313, "localhost", () => {
  console.log("server started");
});

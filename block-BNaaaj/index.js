console.log("Welcome to Nodejs");

const os = require("os");
console.log(os.cpus());
console.log(os.freemem());
console.log(os.uptime());
console.log(os.version());

const { readFile, unlink } = require("fs");

let buff1 = Buffer.alloc(12);
buff1.write("Hello World!");
console.log(buff1.toString());

let buff2 = Buffer.allocUnsafe(12);

// Blocking code

console.log("Sync first");

console.time("task 1");
for (let i = 0; i < 10000; i++) {
  //some random code
}
console.timeEnd("task 1");

console.log("Sync last");

// non-blocking code

console.log("Async first");

console.time("task 2");
setTimeout(() => {
  console.log("inside setTimeout");
}, 1000);
console.timeEnd("task 2");
console.log("Async last");

// HTTP Protocol

const { parse } = require("url");

let parsedUrl = parse(
  "https://airindia.com/fares/calculate?from=delhi&to=detroit",
  true
);

console.log(parsedUrl.query);
console.log(parsedUrl.pathname);
console.log(parsedUrl.protocol);

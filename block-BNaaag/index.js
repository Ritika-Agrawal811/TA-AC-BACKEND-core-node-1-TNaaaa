const fs = require("fs");

// asynchronous
fs.readFile("./content.md", (err, content) => {
  console.log(content.toString());
});

// synchronous
const data = fs.readFileSync("./content.md");

console.log("synchronous");
console.log(data.toString());

let buff1 = Buffer.alloc(10);
console.log(buff1);

buff1.write("Welcome to Buffer");
console.log(buff1.toString());

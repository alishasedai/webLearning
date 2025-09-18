const http = require("http");
const fs = require("fs");


const hostname = "127.0.0.1";
const port = 3000;


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1> HELLO WORLD </h1>");
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});


// Example: using your module
const al = require("./mymodule2.js");
console.log(al, __dirname, __filename);







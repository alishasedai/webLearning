const express = require("express");
const app = express();
const port = 3000;
const blog = require('./routes/blog')
const fs = require("fs");

app.use(express.static("public"))

app.use('/blog', blog)

app.use((req, res, next) => {
    console.log(req.headers);
    req.harry = "I am not harry"
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    next()
});
app.use((req, res, next) => {
  console.log("m1");
  next(); // pass to the next middleware/route
});


app.get("/", (req, res) => {
  res.send("Hellow World!!");
});
app.get("/about", (req, res) => {
  res.send("Hellow about page!!" + req.harry);
});

app.get("/contact", (req, res) => {
  res.send("Hellow contact page!!");
});
app.listen(port, () => {
  console.log(`Example app listening in port ${port}`);
});

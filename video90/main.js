const express = require("express");
const app = express();
const port = 3000;

app.get("/", (reg, res) => {
  res.send("Hellow World!!");
});
app.get("/about", (reg, res) => {
  res.send("Hellow about page!!");
});

app.get("/contact", (reg, res) => {
  res.send("Hellow contact page!!");
});
app.listen(port, () => {
  console.log(`Example app listening in port ${port}`);
});

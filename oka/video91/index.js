const express = require('express');
const app = express();
const port = 3000
app.set("view engine", "ejs");
// app.get('/', (req, res) => {
//     res.sendFile("templates/index.html", {root: __dirname});
   // res.send("hello")
// })
app.get('/', (req, res) => {
    let siteName = "Adidas";
    let searchText = "Search now"
    let arr= ["hey", 54, 64];
    res.render("index", {siteName: siteName, searchText: searchText, arr})
})
app.listen(port, () => {
    console.log(`Example app listening in port ${port}`)
})
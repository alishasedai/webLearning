const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("Home page")

})
app.get("/about", function (req, res) {
  res.send("about page");
});

app.get("/gallery", function (req, res) {
  res.send("Gallery page");
  
});
app.listen(3000, function(){
    console.log("Server is running on port 3000");

})

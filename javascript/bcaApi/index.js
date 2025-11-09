const express = require("express");// yo express vaneko object hunxa 
const app = express();
app.use(express.json())
// nodemon = auto restart

app.get("/", function(req,res){
    res.send("Home page")

})

app.put("/:id", function(req, res){
  const id = req.params.id;
  res.send("Id is "+id);
})
app.post("/",function(req,res){
  console.log(req.body);
  res.send("post method send")
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

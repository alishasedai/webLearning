const express = require("express");
const app = express();


app.get("/user",function(req,res){
    res.send("Index page");
})
app.listen(3000,function(){
    console.log("server is running in port 3000")
})
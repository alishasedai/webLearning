const express = require("express");
const mongoose = require('mongoose'); 
const cors = require('cors');
mongoose.connect("mongodb://127.0.0.1:27017/college").then((res)=>{
    console.log("Database connect success")
}).catch((e)=>{
    console.log("Database connection error",e);
})
const studentSchema = new mongoose.Schema({
  name: String,  email:String,  address:String
});
const Student =  mongoose.model('Student', studentSchema);
const app = express();
app.use(express.json())
app.use(cors());
app.get("/",async(req,res)=>{
    let data =await Student.find({});
    return res.json(data)
})
app.post("/",async(req,res)=>{
    let insertData =await Student.create({...req.body})
    return res.json(insertData)
})
app.get("/:id",(req,res)=>{
    res.send("find data")
})
app.put("/:id",(req,res)=>{
    res.send("update data")
})
app.delete("/:id",(req,res)=>{
    res.send("delete data")
})
app.listen(3000,()=>{
    console.log("Server running at 3000")
})
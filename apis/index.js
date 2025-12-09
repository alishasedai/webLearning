const express = require("express");
const mongoose = require("mongoose");
const cors = require("")
mongoose.connect("mongodb://localhost:27017/colleges").then(() => {
    console.log("Database connect successsfully ");
}).catch((e) => {
    console.log("No connection");
});

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  grade: String,
});
const Student = mongoose.model("Student", studentSchema);


const app = express();
app.use(express.json());

// app.get("/", async (req, res) => {
//  let data = await Student.find({});
//  return res.send(data);
// });

// app.post("/", async (req, res) => {
//  let insertData = await Student.create({...req.body})
//  return res.send(insertData);
// });

app.get("/", (req, res) => {
  res.send("Hello world from  api");
});
app.put("/:id", (req, res) => {
  res.send("Update Data");
});
app.delete("/:id", (req, res) => {
  res.send("Delete Data");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

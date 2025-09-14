import mongoose from "mongoose";
import express from "express";
import { todo } from "./models/todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const todos = new todo({
    title: "Hey first todo list",
    desc: "todo app hehhe",
    isDone: true,
    days : 2
  });
  todos.save();
  res.send("Hellow ALisha sedai!!");
});

app.get("/al", async (req, res) => {
    let todoo = await todo.findOne({});
    res.json({title : todoo.title, desc: todoo.desc, isDone: todoo.isDone ,days: todoo.days})
})
app.listen(port, () => {
  console.log(`Example app listening in port ${port}`);
});

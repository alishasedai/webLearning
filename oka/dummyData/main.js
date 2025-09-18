
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const employee = require("./models/employees");


// Connect to MongoDB (no .then(), no async/await)
//mongoose.connect("mongodb://127.0.0.1:27017/company");
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { foo: "FOO" });
});

app.get('/generate',async (req, res) => {
  // Insert 10 employees
  for (let i = 0; i < 10; i++) {
   await employee.create({
      name: "Alisha",
      Salary: 40000,
      language: "PHP",
      city: "New York",
      isManager: true,
    });
  }
  res.send("10 employees have been sent");
});


// Start server immediately
mongoose.connect("mongodb://127.0.0.1:27017/company").then(() => {
  console.log("MongoDB connected!");
  app.listen(port, () => console.log(`Server running on port ${port}`));
});



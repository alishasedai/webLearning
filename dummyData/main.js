
const express = require('express')
const app = express();
const mongoose = require('mongoose');
const employee = require("./models/employees")


const port = 3000

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index', {foo : 'FOO' })
})

app.get('/generate', async (req, res) => {
    //generate random data
    for(let i = 0; i < 10 ; i++){
         await employee.create({
          name : "Alisha",
          Salary : 40000,
          language : "php",
          city : "New York",
          isManager : true,
        });
    }
    res.send("10 employees has been sent")
})
 mongoose.connect("mongodb://127.0.0.1:27017/company");
app.listen(port, () => {
    console.log(`app listening in port ${port}`)
})
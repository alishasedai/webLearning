const express = require('express');
const path = require('path');
const exportRoutes = require("./routes/posts")
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.use("/post/api", exportRoutes)
app.listen(5000, () => {
    console.log("server starting in port 5000")
})


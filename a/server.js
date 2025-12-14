const express = require('express');
const path = require('path');
const app = express();

// app.get('/', (req,res) => {
//     res.send("Hello world!!");
// })

// setup static folder


app.use(express.static(path.join(__dirname,'public')))
// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname,'public','index.html'))
// })
// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'))
// })
let posts = [
    {id:1, title: 'post One'},
    {id:2 , title: 'post Two'},
    {id:3, title:'Post three'}
]
//http://localhost:5000/public/posts
// app.get("/public/posts", (req, res) => { const ids = parseInt(req.params.id);
//     console.log(req.query)
//   res.json(posts);
// });
//Get all posts

app.get("/public/posts", (req,res) => {
    const limit = parseInt(req.query.limit);

    if(!isNaN(limit) && limit>0){
        res.status(200).json(posts.slice(0,limit))
    }
    else{
        res.status(200).json(posts);
    }
    
})

// app.get('/public/posts/:id', (req, res) => {
//     const ids = parseInt(req.params.id)
//     res.json(posts.filter((post) => post.id === ids));
// })

app.get("/public/posts/:id", (req,res) => {
    const ids = parseInt(req.params.id);
    const post = posts.find((post) => post.id === ids);
    if(!post){
        res.status(404).json({
            msg: `A post with the id of ${ids} was not found`
        })
    }
    else{
        res.status(200).json(post);
    }
})
app.listen(5000, () => {
    console.log("server starting in port 6000")
})
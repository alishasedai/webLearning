const express = require("express");
const router = express.Router();

// app.get('/', (req,res) => {
//     res.send("Hello world!!");
// })

// setup static folder


// router.use(express.static(path.join(__dirname,'public')))
// router.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname,'public','index.html'))
// })
// router.get('/about', (req, res) => {
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

router.get("/", (req,res) => {
    const limit = parseInt(req.query.limit);

    if(!isNaN(limit) && limit>0){
        res.status(200).json(posts.slice(0,limit))
    }
    else{
        res.status(200).json(posts);
    }
    
})
router.post("/",(req,res) => {
    let newPost = {
        id: posts.length +1,
        title: req.body.title,
    }
    if(!newPost.title){
      return  res.status(400).json({
            msg: "Please include a title"
        })
    }
    posts.push(newPost)
    res.status(200).json(posts)
})

// router.get('/public/posts/:id', (req, res) => {
//     const ids = parseInt(req.params.id)
//     res.json(posts.filter((post) => post.id === ids));
// })

// router.get("/public/posts/:id", (req,res) => {
//     const ids = parseInt(req.params.id);
//     const post = posts.find((post) => post.id === ids);
//     if(!post){
//         res.status(404).json({
//             msg: `A post with the id of ${ids} was not found`
//         })
//     }
//     else{
//         res.status(200).json(post);
//     }
// })
router.get("/:id", (req, res) => {
  const ids = parseInt(req.params.id);
  const post = posts.find((post) => post.id === ids);
  if (!post) {
    res.status(404).json({
      msg: `A post with the id of ${ids} was not found`,
    });
  } else {
    res.status(200).json(post);
  }
});
module.exports = router;
const express = require("express");
const {getPosts,getPost,insertPOst,updatePost,deletePost} = require("../controllers/postControllers")
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
// let posts = [
//     {id:1, title: 'post One'},
//     {id:2 , title: 'post Two'},
//     {id:3, title:'Post three'}
// ]

const logger = (req,res,next) => {
  console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`)
  next()
}
//http://localhost:5000/public/posts
// app.get("/public/posts", (req, res) => { const ids = parseInt(req.params.id);
//     console.log(req.query)
//   res.json(posts);
// });
//Get all posts

// router.get("/",logger, (req,res) => {
//     const limit = parseInt(req.query.limit);

//     if(!isNaN(limit) && limit>0){
//         res.status(200).json(posts.slice(0,limit))
//     }
//     else{
//         res.status(200).json(posts);
//     }
    
// })


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

//get the single data
router.get("/:id",getPost);
//post means adding
router.post("/", insertPOst);
//to update
router.put("/:id",updatePost);

//Delete Post

router.delete("/:id", deletePost);

module.exports = router;
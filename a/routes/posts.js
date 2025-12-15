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
router.get("/:id", (req, res,next) => {
  const ids = parseInt(req.params.id);
  const post = posts.find((post) => post.id === ids);
  if (!post) {
    // res.status(404)
    // .json({
    //   msg: `A post with the id of ${ids} was not found`,
    // });
    const err = new Error(`A post with the id of ${ids} was not found`);
    err.status = 404;
    return next(err)
  } else {
    res.status(200).json(post);
  }
});
//post means adding
router.post("/", (req, res,next) => {
  const title = req.body?.title;
  if (!title) {
    // return res.status(400).json({
    //   msg: "Please include a title",
    // });
    const err = new Error("Please include a title");
    err.status = 400;
    return next(err)
  }
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };
  posts.push(newPost);
  res.status(200).json(posts);
});
//to update
router.put("/:id", (req, res,next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  console.log(post)

  if (!post) {
    return res
      .status(404)
      .json({ msg: `A post with the id ${id} was not found ` });
  }
    if (!req.body || !req.body.title) {
      return res
        .status(400)
        .json({ msg: "Please include a title in the request body" });
      // const err = new Error("Please include a title in the request body");
      // err.status = 404;
      // return next(err)
    }
  post.title = req.body.title;
  console.log(posts)
  res.status(200).json(posts);
});

//Delete Post

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  console.log(post);

  if (!post) {
    return res
      .status(404)
      .json({ msg: `A post with the id ${id} was not found ` });
  }
 
  posts =posts.filter((post) => post.id !== id)
  console.log(posts);
  res.status(200).json(posts);
});

module.exports = router;
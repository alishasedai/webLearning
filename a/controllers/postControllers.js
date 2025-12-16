let posts = [
  { id: 1, title: "post One" },
  { id: 2, title: "post Two" },
  { id: 3, title: "Post three" },
];

// get all post
export const getPosts = (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.status(200).json(posts);
  }
};

//get single post
export const getPost = (req, res, next) => {
  const ids = parseInt(req.params.id);
  const post = posts.find((post) => post.id === ids);
  if (!post) {
    // res.status(404)
    // .json({
    //   msg: `A post with the id of ${ids} was not found`,
    // });
    const err = new Error(`A post with the id of ${ids} was not found`);
    err.status = 404;
    return next(err);
  } else {
    res.status(200).json(post);
  }
};

//insert
export const insertPOst = (req, res, next) => {
  const title = req.body?.title;
  if (!title) {
    // return res.status(400).json({
    //   msg: "Please include a title",
    // });
    const err = new Error("Please include a title");
    err.status = 400;
    return next(err);
  }
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };
  posts.push(newPost);
  res.status(200).json(posts);
};

//update post
export const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  console.log(post);

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
  console.log(posts);
  res.status(200).json(posts);
};

//delete post

export const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  console.log(post);

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
  console.log(posts);
  res.status(200).json(posts);
};

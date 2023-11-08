const Post = require("../models/Post");

exports.getAllPosts = async (req, res, next) => {
  try {
    const [posts, _] = await Post.findAll();

    res.status(200).json({ count: posts.length, posts });
  } catch (error) {
    next(error);
  }

  //res.send("Get all posts route");
};

exports.createNewPost = async (req, res, next) => {
  try {
    let { title, body } = req.body;
    let post = new Post(title, body);

    post = await post.save();

    res.status(201).json({ message: "Post created" });
    //console.log(post);
  } catch (error) {
    next(error);
  }

  //res.send("Create new post route");
};

exports.getPostById = async (req, res, next) => {
  try {
    let postId = req.params.id;

    let [post, _] = await Post.findById(postId);

    res.status(200).json({ post: post[0] });
  } catch (error) {
    next(error);
  }

  //res.send("Get Post By Id route");
};

// OMAT metodit
// OMA put
exports.putPostById = async (req, res, next) => {
  //console.log("PUT metodi");

  try {
    let postId = req.params.id;

    let [post, _] = await Post.findById(postId);
    let { title, body } = req.body;

    post = await Post.putPostById(postId, title, body);

    res.status(202).json({ message: "Post updated" });
  } catch (error) {
    next(error);
  }
};

// OMA delete
exports.deletePostById = async (req, res, next) => {
  // console.log("DELETE metodi");

  try {
    let postId = req.params.id;

    let [post, _] = await Post.findById(postId);
    let { title, body } = req.body;

    post = await Post.deletePostById(postId); // Kutsutaan poistometodia

    res.status(203).json({ message: "Post deleted" });
  } catch (error) {
    next(error);
  }
};

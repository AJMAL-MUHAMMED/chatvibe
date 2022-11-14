const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const post = await new Post(req.body).save();
    res.json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
     .populate("user", "first_name last_name picture username gender")
    // .populate({path: 'user', select: ['first_name', 'last_name']})
      .sort({ createdAt: -1 });
      console.log(posts);
    res.json(posts);
  } catch (error) {
    console.log(error.message, error.stack);
    return res.status(500).json({ message: error.message });
  }
};

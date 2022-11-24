const express = require("express");
const { createPost, getAllPosts, comment, deletePost } = require("../controllers/post");
const { authUser } = require("../middlwares/auth");

const router = express.Router();

router.post("/createPost", authUser, createPost);
router.get("/getAllPosts", authUser, getAllPosts);
router.put("/comment", authUser, comment);
router.delete("/deletePost/:id", authUser, deletePost);

module.exports = router;

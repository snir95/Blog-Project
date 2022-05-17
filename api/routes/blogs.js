const express = require("express");

const router = express.Router();
const Blog = require("../models/Blog");

// get back all posts
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.json({ message: err });
  }
});
//submit a post
router.post("/", async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    description: req.body.description,
    bgColor: req.body.bgColor,
  });
  try {
    const savedBlog = await blog.save();
    res.json(savedBlog);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific post
router.get("/:blogId", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.blogId);
    res.json(blog);
  } catch (err) {
    res.json({ message: err });
  }
});
//delete by id
router.delete("/:blogId", async (req, res) => {
  try {
    const removedBlog = await Blog.deleteOne({ _id: req.params.blogId });
    res.json(removedBlog);
  } catch (err) {
    res.json({ message: err });
  }
});

//update by id
router.put("/:blogId", async (req, res) => {
  try {
    const filter = { _id: req.params.blogId };
    const update = { ...req.body };

    const updatedBlog = await Blog.findOneAndUpdate(filter, update, {
      returnOriginal: false,
    });
    res.json(updatedBlog);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;

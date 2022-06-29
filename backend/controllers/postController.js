const asyncHandler = require("express-async-handler")
const Post = require("../models/postModel")
const mongoose = require("mongoose")

// @desc get all posts
// @route   GET /api/posts
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({}).sort({ createdAt: -1 })

  res.status(200).json(posts)
})

// @desc get a single post
// @route   GET /api/posts/:id
const getPost = asyncHandler(async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such post" })
  }

  const post = await Post.findById(id)

  if (!post) {
    return res.status(404).json({ error: "No such post" })
  }

  res.status(200).json(post)
})

// @desc create a new post
// @route   POST /api/posts
const createPost = asyncHandler(async (req, res) => {
  const { title, content } = req.body
  const user = req.user.id
  // add post to the database
  try {
    const post = await Post.create({ title, content, user })
    res.status(201).json(post)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// @desc delete a post
// @route DELETE /api/posts/:id
const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such post" })
  }
  const post = await Post.findById(id)
  if (!post) {
    return res.status(400).json({ error: "No such post" })
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error("User not found")
  }

  // Make sure the logged in user matches the goal user
  if (post.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error("User not authorized")
  }

  await post.remove()

  res.status(200).json({ post, status: "successfully deleted" })
})
// @desc update a post
// @route PATCH /api/posts/:id
const updatePost = asyncHandler(async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such post" })
  }

  const post = await Post.findById(id)

  if (!post) {
    return res.status(400).json({ error: "No such post" })
  }
  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error("User not found")
  }

  // Make sure the logged in user matches the goal user
  if (post.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error("User not authorized")
  }

  const updatedPost = await Post.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
    { returnDocument: "after" }
  )

  res.status(200).json(updatedPost)
})

module.exports = {
  getPosts,
  getPost,
  createPost,
  deletePost,
  updatePost,
}

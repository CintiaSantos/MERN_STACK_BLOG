const express = require("express")
const {
  getPosts,
  getPost,
  createPost,
  deletePost,
  updatePost,
} = require("../controllers/postController")

const router = express.Router()
const { protect } = require("../middleware/authMiddleware")

// GET all posts
router.get("/", getPosts)

// GET a single post
router.get("/:id", getPost)

// POST a new post
router.post("/", protect, createPost)

// DELETE a post
router.delete("/:id", protect, deletePost)

// UPDATE a post
router.patch("/:id", protect, updatePost)

module.exports = router

const mongoose = require("mongoose")

const Schema = mongoose.Schema

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Post title is required"],
    },
    content: {
      type: String,
      required: [true, "Post content is required"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Post", postSchema)

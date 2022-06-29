const mongoose = require("mongoose")
const { isEmail } = require("validator")

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a full name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
      lowercase: true,
      validate: [isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("User", userSchema)

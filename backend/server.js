require("dotenv").config()
const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")
const { errorHandler } = require("./middleware/errorMiddleware")
const postRoutes = require("./routes/postRoutes")
const userRoutes = require("./routes/userRoutes")

// express app
const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use("/api/posts", postRoutes)
app.use("/api/users", userRoutes)

app.use(errorHandler)

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database")
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })

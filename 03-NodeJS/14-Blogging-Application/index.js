const express = require("express");
const path = require("path");
const userRoute = require("./routes/users");
const blogRoute = require("./routes/blogs");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const { checkAuthCookie } = require("./middlewares/authentication");
const Blogs = require("./models/blogs");
const app = express();

const PORT = 8000;

mongoose.connect("mongodb://localhost:27017/blogging-application")
  .then(() => console.log("Connected to mongodb database"))
  .catch((error) =>
    console.log("ERROR: Failed to connnect to database - ", error)
  );

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(checkAuthCookie("token"));
app.use(express.static(path.resolve("./public")));


app.get("/", async (req, res) => {
  const allBlogs = await Blogs.find({}).sort({"createdAt":-1});
  res.render("home", {user: req.user, blogs: allBlogs});
});

app.use("/user", userRoute);
app.use("/blogs", blogRoute);

app.listen(PORT, () =>
  console.log(`Server Started on http://localhost:${PORT}`)
);

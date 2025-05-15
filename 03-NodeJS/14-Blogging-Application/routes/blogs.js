const { Router } = require("express");
const multer = require("multer");
const path = require("path");
const Blogs = require("../models/blogs");
const Comments = require("../models/comments");
const { marked } = require("marked");
const sanitize = require("sanitize-html");
const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(`./public/uploads`));
  },
  filename: function (req, file, cb) {
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

router.get("/addNew", (req, res) => {
  res.render("addBlogs", {
    user: req.user,
  });
});

router.get("/myBlogs", async (req, res) => {
  const myBlogs = await Blogs.find({ createdBy: req.user._id });
  res.render("myBlogs", {
    user: req.user,
    myBlogs,
  });
});

router.get("/delete/:id", async(req, res) => {
  try{
    await Blogs.findByIdAndDelete(req.params.id);
    res.redirect("myBlogs");

  } catch(error){
    console.log("Error in delete: ", error);
    res.redirect("/");
  }
})

router.get("/update/:id", async (req, res) => {
  const blog = await Blogs.findById(req.params.id);
  return res.render("updateBlog", {
    user: req.user,
    blog,
  });
});

router.post("/update/:id", async (req, res) => {
  const { title, body } = req.body;
  await Blogs.findByIdAndUpdate(req.params.id, {
    title,
    body,
  });
  res.redirect(`/blogs/${req.params.id}`);
});

router.get("/:id", async (req, res) => {
  const blog = await Blogs.findById(req.params.id).populate("createdBy");
  const blogContent = sanitize(marked(blog.body));
  const comments = await Comments.find({ blogId: req.params.id }).populate(
    "userId"
  );
  return res.render("blog", {
    user: req.user,
    blog,
    comments,
    blogContent,
  });
});

router.post("/", upload.single("coverImage"), async (req, res) => {
  const { title, body } = req.body;
  const blog = await Blogs.create({
    title,
    body,
    createdBy: req.user._id,
    coverImageUrl: `/uploads/${req.file.filename}`,
  });

  return res.redirect(`/blogs/${blog._id}`);
});

router.post("/comment/:blogId", async (req, res) => {
  await Comments.create({
    content: req.body.content,
    blogId: req.params.blogId,
    userId: req.user._id,
  });

  return res.redirect(`/blogs/${req.params.blogId}`);
});

module.exports = router;

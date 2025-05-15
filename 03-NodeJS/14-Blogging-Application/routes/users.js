const { Router } = require("express");
const router = Router();
const User = require("../models/users");
const Blogs = require("../models/blogs");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, path.resolve("./public/images"));
  },
  filename: function(req, file, cb){
    cb(null, `${Date.now()}-${file.originalname}`);
  },
}); 

const upload = multer({storage: storage});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/login", (req, res) => {
  return res.render("login");
});

router.get("/logout", (req, res) => {
  return res.clearCookie("token").redirect("/");

});

router.get("/profile", async (req, res) => {
  const userId = req.user._id;
  const {createdAt} = await User.findById(userId);
  const totalBlogs = (await Blogs.find({createdBy: userId})).length;
  return res.render("profile", {
    user: req.user,
    createdAt,
    totalBlogs,
  });
});

router.post("/profile",upload.single("profileImg"), async(req, res) => {
  try{
    const userId = req.user._id;
    await User.findByIdAndUpdate(userId, {
      fullName: req.body.fullName,
      profileImageUrl: `/images/${req.file.filename}`,
    })
    return res.redirect("/user/logout");
  } catch(Exception){
    return res.render("error", {
      user: req.user,
      error: `Failed to update: ${Exception}`
    });
  }

})

router.post("/signup", async (req, res) => {
  try{
  const { fullName, email, password } = req.body;
  await User.create({
    fullName,
    email,
    password,
  });
  return res.render("login");
}catch(error){
  return res.render("signup", {error: "Failed to create an account"});
}
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userToken = await User.matchPasswordAndGetToken(email, password);
    return res.cookie("token", userToken).redirect("/");
  } catch (error) {
    return res.render("login", { error: "Incorrect Email or Password" });
  }
});



module.exports = router;

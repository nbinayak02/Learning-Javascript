const { Router } = require("express");
const router = Router();
const User = require("../models/users");

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/login", (req, res) => {
  return res.render("login");
});

router.get("/logout", (req, res) => {
  return res.clearCookie("token").redirect("/");

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

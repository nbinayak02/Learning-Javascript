const users = require("../models/users");
const {v4: uuidv4} = require("uuid");
const { setUser } = require("../services/auth");

async function handleCreateNewUser(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(404)
      .json({ status: "Failed", message: "Provide user details" });
  }

  await users.create({
    name,
    email,
    password,
  });

  return res.redirect("/");
}

async function handleLogin(req, res) {
  const { email, password } = req.body;
  const sessionID = uuidv4();
  const user = await users.findOne({email, password});

  if(!user){
    return res.redirect("/login");
  }
  console.log("user from HandleLogin",user);
  setUser(sessionID, user);
  res.cookie("uid", sessionID);
  return res.redirect("/");
  
}

module.exports = {
  handleCreateNewUser,
  handleLogin,
};

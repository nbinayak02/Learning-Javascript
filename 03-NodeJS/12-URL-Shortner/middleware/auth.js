const { getUser } = require("../services/auth");

async function checkLogin(req, res, next) {
  const uuid = req.cookies?.uid;
  if (!uuid) return res.redirect("/login");

  const user = getUser(uuid);
  if (!user) return res.redirect("/signup");

  req.user = user;

  next();
}

async function checkAuth(req, res, next) {
  const uuid = req.cookies?.uid;
  const user = getUser(uuid);
  req.user = user;
  next();
}

module.exports = {
  checkLogin,
  checkAuth
};

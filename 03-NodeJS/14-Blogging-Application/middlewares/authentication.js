const { validateToken } = require("../services/authentication");

function checkAuthCookie(cookieName) {
  return (req, res, next) => {
    const token = req.cookies[cookieName];

    if (!token) {
      return next();
    }

    try {
      const payload = validateToken(token);
      req.user = payload;
      return next();
    } catch (error) {
      return next();
    }
    // next();
  };
}

module.exports = {
    checkAuthCookie,
}

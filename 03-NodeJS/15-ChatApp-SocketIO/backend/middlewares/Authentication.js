const JWT = require("jsonwebtoken");
const secret = "Chat@pp#134";


const verifyToken = (req, res, next) => {

  const authHeader = req.headers["authorization"];

  if (!authHeader)
    return res.status(400).json({ message: "Authorization header not found" });

  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(400).json({ message: "No token found" });
  
  JWT.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    } else {
      req.user = decoded;
    }
    next();
  });
};

module.exports = verifyToken;

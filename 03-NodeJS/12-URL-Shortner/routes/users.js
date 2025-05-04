const express = require("express");
const router = express.Router();
const { handleCreateNewUser, handleLogin } = require("../controllers/users");

router.post("/", handleCreateNewUser);
router.post("/login", handleLogin);

module.exports = router;
const express = require("express");
const { handleGetUserById } = require("../controller/User");
const { handleSaveMessage, handleGetMessages } = require("../controller/Message");
const router = express.Router();

router.get("/getUser", handleGetUserById);
router.post("/", handleSaveMessage);
router.get("/", handleGetMessages);
module.exports = router;

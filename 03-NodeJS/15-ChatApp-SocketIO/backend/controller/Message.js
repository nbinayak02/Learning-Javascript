const Message = require("../model/Message");
async function handleSaveMessage(req, res) {
  try {
    const msg = req.body.message;
    const user = req.user;
    const io = req.app.get("io");
    const createdMsg = await Message.create({
      username: user,
      message: msg,
    })
    
    await createdMsg.populate("username", "username");
    
    io.emit("recentMessage", createdMsg);
    return res.status(200);
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Something went wrong" });
  }
}

async function handleGetMessages(req, res) {
  try {
    const io = req.app.get("io");
    const last20Msg = await Message.find({})
      .populate("username", "username")
      .sort({ createdAt: -1 })
      .limit(20);
    io.emit("messages", last20Msg);
    return res.status(200);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong!" });
  }
}

module.exports = {
  handleSaveMessage,
  handleGetMessages,
};

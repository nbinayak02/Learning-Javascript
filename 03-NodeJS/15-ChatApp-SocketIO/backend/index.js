const express = require("express");
const authRouter = require("./routes/Auth");
const chatRouter = require("./routes/Chat");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const cors = require("cors");
const verifyToken = require("./middlewares/Authentication");
const { Server } = require("socket.io");
const { createServer } = require("http");

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:5173"],
  },
});

app.set("io", io);

io.on("connection", (socket) => {

  //broadcast typing to all except sender
  socket.on("typing", (state) => {
    io.emit("typing", state);
  });
});

mongoose
  .connect("mongodb://localhost/chatapp")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Connection error with MongoDB: ", error));

const corsOptions = {
  origin: ["http://localhost:5173"],
  "Access-Control-Allow-Credential": true,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/chat/user/", authRouter);
app.use("/chat/", verifyToken, chatRouter);

httpServer.listen(port, () => console.log("Server started at PORT: 5000"));

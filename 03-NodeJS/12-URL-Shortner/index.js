const express = require("express");

const router = require("./routes/url");
const staticRouter = require("./routes/staticRouter");
const userRouter = require("./routes/users");

const connectToDb = require("./configuration/connection");

const URL = require("./models/url");

const path = require("path");

const cookieParser = require("cookie-parser");

const { checkLogin, checkAuth } = require("./middleware/auth");

const app = express();
const PORT = 3000;

connectToDb("mongodb://127.0.0.1:27017/short-url")
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("Failed to connect: ", error));

//set view engine for ejs
app.set("view engine", "ejs");

app.set("views", path.resolve("./views"));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use("/url", checkLogin, router); //accepts request for url crud

app.use("/", checkAuth, staticRouter); //serves all static files

app.use("/user", userRouter); //accepts request for user login signup

app.get("/:shortUrlId", async (req, res) => {
  const shortId = req.params.shortUrlId;
  const result = await URL.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );

  if (result.redirectUrl) {
    res.redirect(result.redirectUrl);
  }
});

app.listen(PORT, () => console.log(`Server Started at ${PORT}`));

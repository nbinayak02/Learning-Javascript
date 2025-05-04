const express = require("express");
const multer = require("multer");
const path = require("path");
const PORT = 8000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.render("index");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const uploadFile = multer({ storage });

app.post("/uploads", uploadFile.single("fileUpload"), (req, res) => {
  return res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server started at: http://localhost:${PORT}`);
});

const experss = require("express");
const router = require("./routes/user");
const app = experss();
const {connectMongoDb} = require("./connection.js");

connectMongoDb().then(()=>console.log("MongoDB Connected"));

app.use(experss.urlencoded({ extended: false }));
app.use("/api/users",router);
app.listen(8000, () => { console.log("Server Started at 8000") });
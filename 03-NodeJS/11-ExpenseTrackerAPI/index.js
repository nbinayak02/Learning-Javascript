const express = require("express");
const router = require("./routes/expense");
const app = express();
const { connect } = require("./configuration/connection");

connect("mongodb://127.0.0.1:27017/expense").then(() => console.log("Connected to MongoDb Succssfully")).catch((error) => console.log("Error occured while connecting to MongoDb: ", error));

app.use(express.urlencoded({ extended: false }));
app.use("/api/expense", router);
app.listen(8000, () => console.log("Server started at port 8000"));
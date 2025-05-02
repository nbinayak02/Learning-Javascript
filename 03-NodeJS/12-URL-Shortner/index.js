const express = require("express");
const router = require("./routes/url");
const connectToDb = require("./configuration/connection");
const URL = require("./models/url");

const app = express();
const PORT = 3000;

connectToDb("mongodb://127.0.0.1:27017/short-url").then(() => console.log("Connected to database")).catch((error) => console.log("Failed to connect: ", error));

app.use(express.json());

app.use("/url", router);
app.get("/:shortUrlId", async (req, res) => {
    const shortId = req.params.shortUrlId;
    // console.log("ShortId: ",shortId);
    const result = await URL.findOneAndUpdate({ shortId }, { $push: { visitHistory: { timestamp: Date.now() } } });
    // console.log(result);
    res.redirect(result.redirectUrl);
})
app.listen(PORT, () => console.log(`Server Started at ${PORT}`));
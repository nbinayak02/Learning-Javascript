const shortid = require("shortid"); //generates random id see google for more info
const URL = require("../models/url");


async function handleGenerateNewShortUrl(req, res) {
    const body = req.body;
    // console.log(body);
    if (!body.redirectUrl) {
        return res.status(400).json({ error: "Provide a valid URL" });
    }

    const shortID = shortid();

    await URL.create({
        shortId: shortID,
        redirectUrl: body.redirectUrl,
        visitHistory: [],
    });

    return res.json({ id: shortID });
}

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.json({ totalClicks: result.visitHistory.length, analytics: result.visitHistory });
}

module.exports = {
    handleGenerateNewShortUrl,
    handleGetAnalytics
}
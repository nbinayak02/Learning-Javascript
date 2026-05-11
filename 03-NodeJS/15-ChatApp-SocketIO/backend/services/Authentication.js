const JWT = require("jsonwebtoken");
const secret = "Chat@pp#134";

function createToken(user){
    const payload = {
        _id: user._id,
    };

    const token = JWT.sign(payload, secret);

    return token;
}

module.exports = {
    createToken,
}
const mongoose = require("mongoose");

function connectToMongoDb(url){
    mongoose.connect(url);
}

module.exports = connectToMongoDb;


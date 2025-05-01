const mongoose = require("mongoose");

//define schema 
const userSchema = new mongoose.Schema({
    //define table structure
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    country: {
        type: String,
    },

    gender: {
        type: String,
        required: true
    }
});

const User = mongoose.model("user", userSchema);

module.exports = User;
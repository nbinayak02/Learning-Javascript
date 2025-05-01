const mongoose = require("mongoose");

//expense database schema
const expenseSchema = new mongoose.Schema({
    amount: {
        type: String,
        required: true,
    },
    remarks: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
});

const Expenses = mongoose.model("expense", expenseSchema);

module.exports = Expenses;
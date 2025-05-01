const Expenses = require("../models/expense");

async function handleCreateNewExpense(req, res) {
    const body = req.body;
    console.log(body);

    if (!body.amount || !body.remarks || !body.category || !body.date) {
        return res.status(404).json({ error: "Cannot accept empty data" });
    }

    const result = await Expenses.create({
        amount: body.amount,
        remarks: body.remarks,
        category: body.category,
        date: body.date
    });

    console.log("Expense recorded successfully: ", result);

    return res.status(201).json({ status: "Success" });

}

async function handleGetAllExpenses(req, res) {
    const allExpenses = await Expenses.find({});
    return res.status(200).json(allExpenses);
}

async function handleGetExpense(req, res) {
    const expense = await Expenses.findById(req.params.id);
    return res.status(200).json(expense);
}

async function handleUpdateExpense(req, res) {
    await Expenses.findByIdAndUpdate(req.params.id, req.body);
    return res.status(200).json({ status: "Success" });
}

async function handleDeleteExpense(req, res) {
    await Expenses.findByIdAndDelete(req.params.id);
    return res.status(200).json({ status: "Success" });
}

module.exports = {
    handleCreateNewExpense,
    handleGetAllExpenses,
    handleGetExpense,
    handleUpdateExpense,
    handleDeleteExpense,
}
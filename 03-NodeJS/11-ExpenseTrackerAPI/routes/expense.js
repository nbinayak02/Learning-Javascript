const express = require("express");
const router = express.Router();
const { handleCreateNewExpense,
    handleGetAllExpenses,
    handleGetExpense,
    handleUpdateExpense,
    handleDeleteExpense
} = require("../controllers/expense")

router.route("/")
    .get(handleGetAllExpenses)
    .post(handleCreateNewExpense)

router.route("/:id")
    .get(handleGetExpense)
    .patch(handleUpdateExpense)
    .delete(handleDeleteExpense)

module.exports = router;
const express = require("express")
const routers = express.Router();
const { handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateUser } = require("../controllers/user");

routers.route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)

routers.route("/")
.get(handleGetAllUsers)
.post(handleCreateUser)

module.exports = routers;
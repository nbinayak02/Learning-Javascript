const User = require("../models/users");

async function handleGetAllUsers(req, res) {
    const userData = await User.find({})
    return res.status(200).json(userData);
}

async function handleGetUserById(req, res) {
    const userData = await User.findById(req.params.id)
    if (!userData) return res.status(404).json({ message: "User not found" });
    return res.json(userData);
}

async function handleUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, req.body);
    return res.status(201).json({ status: "Success" });
}

async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id)
    return res.status(200).json({ status: "Success" });
}

async function handleCreateUser(req, res) {
    const body = req.body;
    // console.log(body);

    if (!body.firstName || !body.lastName || !body.gender || !body.email || !body.country) {
        return res.status(400).json({ status: "Cannot POST empty data" });
    }

    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        country: body.country,
        gender: body.gender
    });

    console.log("User Created: ", result);
    return res.status(201).json({ status: "Success" });
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateUser
}
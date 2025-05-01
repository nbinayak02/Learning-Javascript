const experss = require("express")
const mongoose = require("mongoose")
const app = experss()
const PORT = 8000

//middleware
app.use(experss.urlencoded({extended: false}))

//connection

mongoose.connect("mongodb://127.0.0.1:27017/user")
    .then(() => console.log("Connected to MongoDB Successfully"))
    .catch((error) => console.log("Error connecting to MongoDB: ", error));

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

//define model

const User = mongoose.model("user", userSchema);

//using model perform curd operations

app.route("/api/users/:id")
    .get(async (req, res) => {
        const userData = await User.findById(req.params.id)
        return res.status(200).json(userData);
    })
    .patch(async (req, res) => {
        await User.findByIdAndUpdate(req.params.id,req.body);
        return res.status(201).json({status: "Success"});
    })
    .delete(async(req, res) => {
        await User.findByIdAndDelete(req.params.id)
        return res.status(200).json({status: "Success"});
    })

app.get("/api/users", async (req, res) => {
    const userData = await User.find({})
    return res.status(200).json(userData);
})

app.post("/api/users", async (req, res) => {
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
})

app.get("/users", async (req, res) => {
    const allUsers = await User.find({});
    const html = `
    <h1>All Users</h1>
    <ul>
    ${allUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
    </ul>
    `;
    return res.send(html);
});

app.listen(PORT, () => { console.log("Server Started at http://localhost:" + PORT) });
const express = require("express")
const fs = require("fs")
const data = require("./MOCK_DATA.json")
const port = 8000
const app = express()

//middleware for parsing request body for post method
app.use(express.urlencoded({extended: false}))

//middleware for logging
app.use((req, res, next) => {
    fs.appendFile("log.txt", `${Date.now()} ${req.ip} ${req.method} ${req.path}\n\n`, (error) => {
        if(error){
            console.log("Log writing failed: ",error);
        }
    
    next();
        
    })
})

//GET /users => render html page containing user info
app.get("/", (req, res) => {
    const html = `
    <h1>All Users</h1>
        <ol>
            ${data.map((user) => `<li>${user.first_name} ${user.last_name}</li>`).join("")}
        </ol>
    `;

    return res.send(html);
});

//GET /api/users => return all users in json

app.get("/api/users", (req, res) => {
    return res.json(data);
})



//GET /api/users/:id => return users by id

// app.get("/api/users/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const user = data.find(u => u.id === id);
//     return res.json(user);
// })

//we can combine the methods with same route as

app.route("/api/users/:id").get((req, res) => {

    const id = Number(req.params.id);
    const user = data.find(u => u.id === id);
    return res.json(user);

}).patch((req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    console.log("Patch Body: ",body, "Id: ",id);
    data[id-1] = {id: id, ...body}
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(data), (err) => {
        if(err){
            console.log("Patch Error: ",err);
        } else {
            return res.json({status: "Success"});
        }
    })
})
.delete((req, res) => {

    const id = Number(req.params.id)
    console.log("The deleted data is: ",data.splice(id-1, 1));
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (err) => {
        if(err){
            console.log("Delete error: ",err);
        } else {
            return res.json({status: "Success"});
        }
    })
    

});

//POST /users => create user
app.post("/api/users", (req, res) => {

    // return res.json({ status: "pending" });

    const body = req.body;
    // console.log("Body: ",body); //undefined, we have to use urlencoded middleware
    data.push({id: data.length + 1, ...body});

    //write data in file
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(data),(error) => {
        if(error){
            console.error("Error encountered: ",error)
        } else {
            return res.json({status: "Created", id: data.length});
        }
    })
})

// //PATCH /users/:id => update user
// app.post("/api/users:id", (req, res) => {
//     return res.json({status: pending});
// })

// //DELETE /users:id =>delete user
// app.post("/api/users:id", (req, res) => {
//     return res.json({status: pending});
// })

app.listen(port, () => { console.log("Server started at port ", port) });
const express = require("express")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    if(req)
        console.log("Request received on home page");
    return res.send("Hello from home page")
});

app.get('/about', (req, res) => {
    if(req)
        console.log("Request received on about page")
    return res.send("Hello from about page")
});

app.listen(port, () => {
    console.log("The server is listening on url: http://localhost:"+port);
})
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const app = express();
const server = createServer(app);
const path = require("path");
const PORT = 8000;

const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(path.resolve("../Frontend/index.html"));
})

io.on('connection', (socket) => {

    console.log('A user is connected');

    socket.on('chat message', (msg) => {
        console.log('Message is: '+ msg);
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('A user is disconnected')
    });
});




server.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));

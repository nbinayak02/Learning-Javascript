const http = require('http');
const fs = require('fs');

const filePath = './log.txt';
var logdata = Date.now() + " Request received in server\n";

const myserver = http.createServer((req, res) => {
    if(req){
        fs.appendFile(filePath, logdata, (err) => {
            if(err){
                console.log("Failed to write data on file");
            } else {
                console.log("Log data written successfully");
            }
        });

        console.log("Request received in server");
    }
    res.end("This is an http response");
});

myserver.listen(8000);
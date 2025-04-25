//printing to the console
console.log("Hello World");

//creating web app

//step 1: include required module
var http = require("http");

//step 2: create a server

listener = function (request, response){
    //response header
    response.writeHead(200, {'Content-Type':'text/html'});
    //response body
    response.end('<h2>Hello World</h2>');
};

server = http.createServer(listener);
server.listen(3000);
console.log("Server listening at http://127.0.0.1:3000");

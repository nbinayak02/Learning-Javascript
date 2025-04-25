var something = "hello"; //local scope to module
console.log(something); 
console.log(global.something); //undefined, it is not truly global

console.log(global === globalThis) 

console.log("The filename is",__filename) //conosle is global similarly __filename
console.log("The directory name is",__dirname);

setInterval(function(){
    console.log("This line is printed every 2 seconds");
},2000);

//setInterval and setTimeout is also global, we need not to import anything to use them
//importing fs module
const fs = require('fs');
const filePath = "file.txt";
const afilePath = "afile.txt";

var content = "The nodejs includes fs module that enables\nto perform read/write operations on disks file"

console.log("Writing file\n");

//writing synchronously
fs.writeFileSync(filePath, content, "utf-8");
console.log("Sync file written successfully")

//writing asynchronously
fs.writeFile(afilePath, content, "utf-8", (error) => {
    if(error){
        console.log("Error writing file ",error);
    } else {
        console.log("Async file written successfully");
    }
})

console.log("\nReading file");
//reading file synchronously

var sfilecontent = fs.readFileSync(filePath,"utf-8");
console.log(sfilecontent,"\n");

//reading file asynchronously

fs.readFile(afilePath, "utf-8", (error, data) => {
    if(error){
        console.log("Error reading file: ",error);
    } else {
        console.log(data);
    }
})

const fs = require('fs');

var writeableStream = fs.createWriteStream('./writtenByProgram.txt');

writeableStream.write("Hello world from writable stream");

writeableStream.on("finish", () => console.log("Finished writing data on file"));

writeableStream.on("error", (error) => console.log("Error: ", error.message));

// close the stream
writeableStream.end();


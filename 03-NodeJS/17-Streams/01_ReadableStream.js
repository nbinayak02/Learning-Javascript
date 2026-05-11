// program to read file using readable stream and print it to console

const fs = require("fs");

var readableStream = fs.createReadStream("./large_text.txt");

readableStream.on("data", (chunk) => {
  console.log("Chunk size: ", chunk.length);

  //   console.log(chunk.toString());
});

readableStream.on("end", () => {
  console.log("Finished reading data from file!");
});

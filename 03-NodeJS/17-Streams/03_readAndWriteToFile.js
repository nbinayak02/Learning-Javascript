const fs = require("fs");

async function writeToFile(chunks, destinationFileName) {
  try {
    var writableStream = fs.createWriteStream(destinationFileName);
    for await (let chunk of chunks) {
      writableStream.write(`Writing ${chunk}`);
    }

    writableStream.on("error", (error) => {
      throw new Error(error);
    });

    writableStream.on("finish", () => {
      console.log("Finished writing to file");
    });

    writableStream.end();
  } catch (error) {
    console.error(error);
  }
}

var readableStream = fs.createReadStream("./writtenByProgram.txt");
writeToFile(readableStream, "simpleText.txt");

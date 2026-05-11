const fs = require("fs");
const { pipeline, Transform } = require("stream");

const transform = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  },
});

pipeline(
  fs.createReadStream("./text.txt"),
  transform,
  fs.createWriteStream("./transformedStream.txt"),
  (error) => console.log(error),
);

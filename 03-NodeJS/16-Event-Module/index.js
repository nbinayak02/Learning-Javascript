const EventEmitter = require("node:events");
const eventEmitter = new EventEmitter();

// adding a callback that will be executed when event is triggered
eventEmitter.on("start", () => {
    console.log("Event started");
});

// trigerring event
eventEmitter.emit("start",);

// we can pass arguments as
eventEmitter.on("count", (start, end) => {
    console.log(`start=${start} and end=${end}`);
});

eventEmitter.emit("count", 10, 20);

eventEmitter.emit("count", 20, 30);

// register a listener that executes only once
var num = 1;
eventEmitter.once("increment", () => {
    num++;
    console.log(`Num is: ${num}`);
});

eventEmitter.emit("increment");
eventEmitter.emit("increment");
eventEmitter.emit("increment");

//to remove listener

// eventEmitter.removeListener("count");

// eventEmitter.emit("count"); //throws error
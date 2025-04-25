const fs = require('fs');
const filePath = "tasks.json";

const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (error) {
        return [] //return empty array if file doesn't exist yet or other error
    }
}

const saveTasks = (task) => {
    const dataJson = JSON.stringify(task);
    fs.writeFileSync(filePath, dataJson);
}

const addTasks = (task) => {
    const existingTasks = loadTasks();
    existingTasks.push(task);
    saveTasks(existingTasks);
    console.log("Task added ", existingTasks);
}

const listTasks = () => {
    const tasks = loadTasks();
    tasks.forEach((task, index) => console.log(index, task));
}

const deleteTask = (index) => {
    if (!isNaN(index)) {
        const tasks = loadTasks()
        let newTasks;

        if (index == 0) {
            newTasks = tasks.slice(1)
            console.log(newTasks)
            
        } else {
            var left = tasks.slice(0, index);
            var right = tasks.slice(index + 1);
            // console.log("Left: ", left)
            // console.log("Right: ", right);
            newTasks = left.concat(right);
            // console.log("After concat: ", newTasks);
        }

        saveTasks(newTasks);

    }
}

const updateTask = (index, value) => {

    if(!isNaN(index)){

        const tasks = loadTasks();
        tasks[index] = value;
        saveTasks(tasks);
        console.log("Updated Successfully");
    }

}

const command = process.argv[2];
// console.log(command);
const argument = process.argv[3];
// console.log(argument);
const updateTo = process.argv[4];


if (command === "add") {
    addTasks(argument);
} else if (command === "list") {
    listTasks();
} else if (command === "delete") {
    deleteTask(parseInt(argument));
} else if(command === "update"){
    updateTask(parseInt(argument), updateTo);
} else {
    console.log("Invalid Command");
}
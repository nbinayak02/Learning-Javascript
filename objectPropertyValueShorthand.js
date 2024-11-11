function getUser(name, age){
    return {
        name: name, //key=name and value is variable name value
        age: age, //eg name:"Rahul", age:49
    }
}

console.log(getUser("Rahul",49))

// this can be simplified using shorthand method

function getUserInfo(name, age){
    return {
        name, //same as name:variable_name_value
        age, //same as age:variable_age_value
    }
}

console.log(getUserInfo("Vaidya", 34))

// Object have no limitation of having key as one of js keyword
let user = {
    for:"for loop",
    while:"while loop",
    const:"constant",
    let:"let keyword",
    12:"Twelve"
}

console.log(user.while, user[12])

//in operator for object checks whether certain key is on the object or not
console.log("for" in user) //true
console.log("45" in user) //false

//for..in loop to traverse object
for(let key in user){
    console.log("key = ",key ,"value = ", user[key])
}

function isEmpty(object){
    for(let key in object){
        return true;
    }
    return false;
}

let laptop = {hello:"woeld"}
if(!isEmpty(laptop)){
    console.log("object is empty");
    
}else{
    console.log("Object is not empty");
    
}

let salaries = {
    John:2308,
    Anuj:20000,
    Amrita:6000
}

var total = 0;
if(!isEmpty(salaries)){
    console.log("Total Salary: 0")
} else {
    for(let key in salaries){
        total+=salaries[key];
    }
    console.log("Total salary: ", total)
}

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


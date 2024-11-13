let animal = {
    legs:4,
    tail:1,
    food:"Grass",
}

let cat = {
    walks:"Cat walks",
    speaks: "Meow",
    __proto__:animal, //inheriting animal obj
}

console.log(cat)
console.log(cat.legs) //cat obj doesnt have this property so it takes it from animal object

// When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”.

//here, we can say that animal is prototype of cat or cat prototypically inherits animal

let eatsMouse = {
    food: "Mouse",
    __proto__: cat,
}

console.log(eatsMouse.speaks) //same as cat.speaks
console.log(eatsMouse.tail) //same as animal.tail

// There are only two limitations:

// The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
// The value of __proto__ can be either an object or null. Other types are ignored.
// Also it may be obvious, but still: there can be only one [[Prototype]]. An object may not inherit from two others.

console.log(eatsMouse.food) //it has food property so js doesn't search it in prototype

for (let a in cat){
    console.log(a, cat[a]) //iterates over inherited properties also
}

//to check if the properties is inherited, we can use function obj_name.hasOwnProperty(key)

for(let a in cat){
    if(cat.hasOwnProperty(a)){
        console.log("Cat only property: ",a, cat[a])
    }
}

//we did not created hasOwnProperty() in cat object so it is also inherited from Object.prototype.hasOwnProperty


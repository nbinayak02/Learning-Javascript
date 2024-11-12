//object can be created by calling Object constructor
let pens = new Object();

//using object literal
// let books = {}
let books = {
    name:"Gita",
    author:"Veda Vyas"
}

//accessing object properties
console.log(books.name)
console.log(books["author"])

//updating/setting object properties
pens.type = "Gell pen";
pens.cost = 10;
console.log(pens)

//deleting properties from object
delete pens.cost;

//the property name can be multiword also
let boy = {
    name:"Hero boy",
    "loves music":true
}

console.log(boy)

//accessing multiword
// console.log(boy.loves music) error
console.log(boy["loves music"]);

//dot doesn't works for multiword
boy["favourite singer"] = "Shreya"
console.log(boy["favourite singer"])

let key = "Fav male singer";
boy[key] = "Arijit";
console.log(boy[key])

//computed properties
// let fruit = prompt("Enter fruit name", "apple");
// let fruits = {
//     [fruit]:"300 per kg"
// }
// console.log(fruits.apple) //if input is apple


// A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned.

Object.freeze(boy);
boy.name = "Zero boy"; //this change doesnt reflect because object is frozen
console.log(boy)
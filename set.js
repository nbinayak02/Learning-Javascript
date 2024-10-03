// const letters = new Set(["a","b","c"]);

// for(var x of letters){
//     console.log(x);
// }

//cannot add duplicate element
// var even = new Set();
// even.add(2);
// even.add(4);
// even.add(4);
// even.add(8);
// console.log(even);

// var numset = new Set([1,76,3,56,3,2,43,57,8,9]);
// console.log(numset); 
//even we have duplicate number, it outputs/saves by eliminating duplicate number

// numset.delete(56);
// console.log(numset);

// console.log(numset.has(76));

// var fruits = new Set(["apple","banana","cherry"]);
// var veggies = new Set(["cauliflower","pototo","tomato"]);

// //union operation
// var plantsproducts = new Set([...fruits, ...veggies]);
// console.log(plantsproducts)

//intersection operation
var a = new Set([1,2,3,4,5,6]);
var b = new Set([2,4,6,8]);

// for(var x of a){
//     if(b.has(x)){
//         console.log(x)
//     }
// }

console.log(a.intersection(b))

//difference a-b
// for(var x of a){
//     if(!b.has(x)){
//         console.log(x)
//     }
// }
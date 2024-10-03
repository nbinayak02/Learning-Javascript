const num1 = [1,2,3,4,5,6];
const num2 = [7,8,9,10];
// const concat = [...num1, ...num2];
// console.log(concat)

//clone the array
//without using spread
const num4 = num1;
console.log("Before pushing 100 without spread: "+num4);

//when num1 is updated num4 updates automatically
num1.push(100);
console.log("After pushing 100 without spread: "+num4)

const num5 = [...num2];
console.log("Before pushing 100 with spread: num5="+num5)
num2.push(100);
console.log("After pushing 100 with spread: num5="+num5)
console.log("After pushing 100 with spread: num2="+num2)



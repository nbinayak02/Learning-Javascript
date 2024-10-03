//this program only runs on browser

var value1 = 30;

function a(){
    var value2 = 24;
    console.log("Value1 from inside function: "+value1);
    console.log("Value2 from inside function: "+value2);
    window.value3 = 37;
    console.log("Value3 from inside function: "+value3);

}

a()
console.log("Value1 from outside function: "+value1);
// console.log("Value2 from outside function: "+value2); error because value2 is not defined in global scope. it is only accessible from function where it is defined
console.log("Value3 from outside function: "+value3);

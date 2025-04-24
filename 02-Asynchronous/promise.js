//method 1 - creating promise
const promiseOne = new Promise(function (resolve, reject) {
  //asynchronous task is done here
  //let the async task be settimeout
  setTimeout(function () {
    console.log("Async task 1 is done");
    resolve();
  }, 1000);
});

//method 1 - consuming promise
promiseOne.then(function () {
  console.log("Async task 1 promise is fulfilled");
});

//method 2 - creating and consuming promise
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 is done");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async task 2 promise is fulfilled");
});

//passing arguments
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 3 is done");
    resolve({ name: "biratnagar kings", marquee: "sandeep lamichhane" });
  }, 1000);
});

promiseThree.then(function (team) {
  console.log(team);
  console.log("Async task 3 promise is fulfilled");
});

//reject
const promisFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve("Async task 4 is done");
    } else {
      reject("ERROR: Some error has been occured");
    }
  }, 1000);
});

promisFour
  .then((status) => console.log(status)) //resolve returns here
  .catch((status) => console.log(status)); //reject returns here

//chaining

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ name: "Karnali Yaks", marquee: "Sompal Kami" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFive
  .then((team) => {
    console.log(team.name);
    return team.marquee; //something returned from higher order is returned to lower order in chaining
  })
  .then((marquee) => console.log(marquee)) //chaining then to get value returned from up
  .catch((error) => console.log(error))
  .finally(() => console.log("Promise is either resolved or rejected")); //finally is executed regardless of resolve or reject

//using async await to handle the promise
const promiseSix = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve("Async task 6 is done");
    } else {
      reject("Error: Something went wrong in async task 6");
    }
  }, 1000);
});

async function consumePromiseSix() {
  //async keyword denotes that fn is asynchronous
  try {
    const response = await promiseSix; //use await keyword in time consuming task
    console.log(response);
  } catch (error) {
    console.log(error);
  }
  //error is not automatically handeled by async await, instead we have to surround it with try catch to  handle error
}

consumePromiseSix();

async function getDataFromAPI() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); //fetch is time consuming task so use await keyword
    // console.log(response);
    const data = await response.json(); //converting string to object is also time consuming task
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// getDataFromAPI()

//doing same thing using .then
fetch("https://jsonplaceholder.typicode.com/users")
  .then((jsondata) => {
    return jsondata.json();
  })
  .then((objdata) => console.log(objdata))
  .catch((error) => console.log(error));


  //then can receive both success and fail
  const promise = new Promise((resolve, reject) => {
    let e = true
    if(!e){
        resolve("hello resolve")
    } else{
        reject("hello reject")
    }
})

promise.then((success) => {
    console.log("Success "+success)
}, (fail) => {
    console.log("Failed "+fail)
})
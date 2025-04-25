function log(message){
    console.log(message);
}

//export function so that it can be reused in another file
// module.exports.log = log;

//we can pass function or object. the above is an example of passing object

module.exports = log; //passing only one function
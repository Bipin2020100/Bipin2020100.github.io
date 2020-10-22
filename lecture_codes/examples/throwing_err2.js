/*eslint-disable */

var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")();



function readData() {
    let json = '{ "age": 30 }'; // incomplete data, missing name property
    try {
        let user = JSON.parse(json);
        // console.log(x); // this line throws a Reference Error
        if (!user.name) {
            throw new SyntaxError("Incomplete data: no name");
        }
        console.log(user.name);
    } catch (e) {
        if (e instanceof SyntaxError) {
            console.log("JSON Error: " + e.message);
        } else {
            throw e; // rethrow (*)  //must be caught by outer try..catch or kills script (runtime exception)
        }
    }
}

try{
    readData();
}catch(err){
    console.log("Escaped error caught: "+ err.name);
}

/*eslint-disable */

var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")();

// const alert = console.log;

class ValidationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "ValidationError"; // (2)
  }
}

function test() {
  throw new ValidationError("Whoops!");
}

try {
  test();
} catch (err) {
  if (err instanceof ValidationError) { // or can be if ( err === "ValidationError")
    alert(err.message); // Whoops!
    alert(err.name); // ValidationError
    //  alert(err.stack); // a list of nested calls with line numbers for each
  } else {
    /*...*/
  }
}
/*eslint-disable */

var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")();

// const prompt = require('prompt-sync')();

let num = +prompt("Enter a positive integer number: ")
let diff, result;

function fib(n) {
    
    if (n < 0 ) {
        throw new Error("Must not be negative, and also an integer.");
    }
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
let start = Date.now();

try {
    result = fib(num);
} catch (e) {
    result = null;
} finally {
     diff = Date.now() - start;
}

console.log(result || "error occurred");
 console.log(`execution took ${diff}ms`);
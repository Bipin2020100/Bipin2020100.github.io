/*eslint-disable */

var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")();


function getRandomEven() {
    let n = Math.round(Math.random() * 10);
    console.log(n);
    if (n % 2 !== 0)
        throw new Error("It's odd");
    return n;
}

try {
    // setTimeout(getRandomEven,2000);
     getRandomEven();
} catch (err) {
    console.log("Error caught: " + err.message);
}

console.log("Remaining part of the program execution....");

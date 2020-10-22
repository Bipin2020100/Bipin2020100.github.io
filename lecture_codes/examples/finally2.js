/*eslint-disable */

var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")();


function func() {
    try {
        return 1;
    } catch (e) {
        /* ... */
    } finally {
        console.log('finally');
    }
}
console.log(func()); // first works alert from finally, and then this one
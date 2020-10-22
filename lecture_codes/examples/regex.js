/*eslint-disable */

var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")();


const str = "1 First 2 Second 3 Third 100 last";
const exp = /\d+/g;
const arr = str.replace(exp, "");
console.log(arr);

/*eslint-disable */

var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")();


let json = "{accountNo:123, balance:430.00}";
try{
    JSON.parse(json);
}catch(err){
    console.log("Error: "+err.message);
}
console.log("program continues here...")
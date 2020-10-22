/*eslint-disable */

var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")();


const fs = require('fs');
try{
    const data = fs.readFileSync(__dirname+'/test_file1.txt', 'utf-8');
    console.log(data);
}catch(err){
    console.log("Error: "+err.message);
}
console.log("program continues here....");
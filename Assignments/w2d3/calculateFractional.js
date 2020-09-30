var log = console.log;  //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log;  //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")(); //this will prompt in node and not affect browser prompt


function factorial(n){
  if (n === 1){
    return 1;
  } else {
return (n * factorial(n -1));
}
}
alert( factorial(5) )
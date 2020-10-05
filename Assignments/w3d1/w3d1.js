
var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")();


// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

// Make two variants of the solution.

// Using setInterval.
// Using nested setTimeout.

function printNumbers(from, to) {


  let current = from;
  const watchID = setInterval(log, 1000);
  
  /**
   * returns {undefined}
   */
  function log() {
    console.log(current);
    if (current === to) {
      clearInterval(watchID);
    } else {
    current = current + 1;
  }
}
}
// printNumbers(2,6)

///////////////////////////////////////////////////////////////////

function printNumbersNested(from, to) {

  let current = from;
  
  setTimeout(function go(){
    alert(current);
    if (current < to){
      setTimeout(go,1000);
    }
    current = current + 1;
  },1000)

}

// alert(printNumbersNested(3,9))

//What will setTimeout show?

// setTimeout will run only after the current code is finished. So set timeout will run only when i = 10000000 i.e the last value.

//////////////////////////////////////////////////////////////////////////

// Fix a function that loses "this"

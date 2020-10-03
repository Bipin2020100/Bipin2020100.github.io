
var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")(); //this will prompt in node and not affect browser prompt

// // The function sayHi uses an external variable name. When the function runs, which value is it going to use?

// let name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete";

// sayHi(); // what will it show: "John" or "Pete"?

// // Yes it will pick up the last changes and the output is going to be "Hi Pete"

// //////////////////////////////////////////////////////////////////

// // Will it have access to the outer variables from its creation place, or the invocation place, or both?

// function makeWorker() {
//   let name = "Pete";

//   return function() {
//     alert(name);
//   };
// }

// let name = "John";

// // create a function
// let work = makeWorker();

// // call it
// work(); // what will it show?
// // Which value it will show? “Pete” or “John”?
// // The value will be "Pete" because it will first into the outer lexical environment where the variable is declared as "Pete"


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Here we make two counters: counter and counter2 using the same makeCounter function.

// // Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?

// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// alert( counter() ); // 0
// alert( counter() ); // 1

// alert( counter2() ); // ?
// alert( counter2() ); // ?

// //Yes bothe the counters are independent and the output will be 0,1 even for counter2 because each time the function is called it will hold a different lexical element for different functions.

// /////////////////////////////////////////////////////////////////////////////////////////

// // Here a counter object is made with the help of the constructor function.

// // Will it work? What will it show?

// function Counter() {
//   let count = 0;

//   this.up = function() {
//     return ++count;
//   };
//   this.down = function() {
//     return --count;
//   };
// }

// let counter = new Counter();

// alert( counter.up() ); // 1
// alert( counter.up() ); // 2
// alert( counter.down() ); // 1

// // Yes, it will work fine because even it is a constructor function it will return a value when specifically returnd some value. Both count up and count down will work because both these sub functions share a same variable count from the lexical environment.

// /////////////////////////////////////////////////////////////////////////

// // Look at the code. What will be the result of the call at the last line?

// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }

// sayHi();

// // The result will show error because the function sayHi is inside a if statement. So, there is no sayHi outside that if statement. That function cannot be called form outside if statement.

// ////////////////////////////////////////////////////////////////

// //Write function sum that works like this: sum(a)(b) = a+b.

// function sum(n){
//   return function(b){
//     return n+b;
//   };
// }

// log(sum(1)(2));

// //For the second parenthesis to work the first one must return a function. (vvv Imp)

// /////////////////////////////////////////////////////////////

// // What will be the result of this code?

// let x = 1;

// function func() {
//   console.log(x); // ?

//   let x = 2;
// }

// func();

// //(Didnot understand)

// ///////////////////////////////////////////////////////////////////

/* .. your code for inBetween and inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

function inBetween(from,to){
  return function(value){
    if (value >= from && value <= to){
      return true
    } else {
      return false;
    }
  }
}

function inArray(arr){
  return function(value){
    for (let s of arr){
      if ( s === value){
        return true;
      } else {
        return false;
      }
    }
  }
}



















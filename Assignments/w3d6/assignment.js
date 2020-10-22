
/*eslint-disable */

var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")();


// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// alert( rabbit.eats ); // true

//////////////////////////////////////////////////////////////////////

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();
// Rabbit.prototype = {};


// alert( rabbit.eats ); //  It is only going to affect the new ones not the existing ones. IF that code Rabbit.prototype is on the line 24 than the return is undefined. In this problem it's still true. That is interesting. I thought that would be undefined.

// ////////////////////////////////////////////////////////

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype.eats = false;

// alert( rabbit.eats ); // false. This is obvious

/////////////////////////////////////////////////////////////////////

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete rabbit.eats;

// alert( rabbit.eats ); // true because eats is inside prototype not inside rabbit so is not delelted by rabbit.eats

////////////////////////////////////////////////////////////////////

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete Rabbit.prototype.eats ;

// alert( rabbit.eats ); // undefined because eats property is not inside the rabbit object and neither it is found in the prototype of rabbit. Therefore, it is undefined.

/////////////////////////////////////////////////////////////////////////

// Add to the prototype of all functions the method defer(ms), that runs the function after ms milliseconds.

// After you do it, such code should work:

// Function.prototype.defer = function(ms) {
//   setTimeout(this, ms);
// };

// function f() {
//   alert("Hello!");
// }

// f.defer(1000);// shows "Hello!" after 1 second

////////////////////////////////////////////////////////////////////////////////////////////////
// Function.prototype.defer = function(ms) {
//   let f = this;
//   return function(...args) {
//     setTimeout(() => f.apply(this, args), ms);// Didnot understand 
//   }
// };

// // check it
// function f(a, b) {
//   alert( a + b );
// }

// f.defer(1000)(1, 2);; // shows 3 after 1 second

//////////////////////////////////////////////////////////////////////////////////////////

// function Rabbit(name) {
//   this.name = name;
// }
// Rabbit.prototype.sayHi = function() {
//   alert(this.name);
// };

// let rabbit = new Rabbit("Rabbit");
// // These calls do the same thing or not?

// rabbit.sayHi();// Rabbit
// Rabbit.prototype.sayHi();//undefined
// Object.getPrototypeOf(rabbit).sayHi();//undefined
//  rabbit.__proto__.sayHi(); //undefined

 ///////////////////////////////////////////////////////////////////



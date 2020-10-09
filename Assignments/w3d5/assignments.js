var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")();



// Here’s the code that creates a pair of objects, then modifies them.

// Which values are shown in the process?

let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

// alert( rabbit.jumps ); // true

delete rabbit.jumps;

// alert( rabbit.jumps ); // null

delete animal.jumps;

// alert( rabbit.jumps ); // undefined

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// he task has two parts.

// Given the following objects:

let head = {
  glasses: 1,
};

let table = {
  pen: 3 ,
  __proto__ : head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__ : table
};

let pockets = {
  money: 2000 ,
  __proto__: bed
};
// log(pockets.pen)

// Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
// Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.
//In modern programming performance wise there is no change because the program runs twice and first it remembers if it is in the main property or the inherated one. In the execution system is smart to go to that property directly.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// We have rabbit inheriting from animal.

// If we call rabbit.eat(), which object receives the full property: animal or rabbit?

// let animal = {
//   eat() {
//     this.full = true;
//   }
// };

// let rabbit = {
//   __proto__: animal
// };

// rabbit.eat();

// Rabbit will get the full property once we call rabbit.eat because while calling the method eat, this refers to an object before the dot(.) which is rabbit itself.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// We have two hamsters: speedy and lazy inheriting from the general hamster object.

// When we feed one of them, the other one is also full. Why? How can we fix it?

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster,
  stomach : []
};

let lazy = {
  __proto__: hamster,
  stomach : []
};

// This one found the food
speedy.eat("apple");
// alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
// alert( lazy.stomach ); // apple

// Since there is no stomach property in each objects speedy and lazy, this in the method eat(food) is first going to look through the object before the dot(.). If nothing is found there with the property named "stomach" it will go to the prototype object and make edit to the stomach there. This error can be easily avoided by adding the stomach property in each objects i.e speedy and lazy.

////////////////////////////////////////////////////////////////////////////////////////////////////////
function Calculator(){

  this.read = function(){
     this.a = +prompt("enter a number: ", 0);
     this.b = +prompt("enter another number: ", 0)
  };

  this.add = function(){
    return this.a + this.b;
  };

  this.mul = function(){
    return this.a * this.b
  };
}

let calculator = new Calculator();
calculator.read();

// alert( "Sum=" + calculator.add() );
// alert( "Mul=" + calculator.mul() );

/////////////////////////////////////////////////////////////////////////////////////////////////

function Accumulator(n){
  this.value = n ;
  this.read = function(){
    this.value += +prompt('How much to add', 0)
  }
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")(); //this will prompt in node and not affect browser prompt

const numArray = [5, 0, 77, -20, 300, 51, 2]
const peopleArray = [{
  name: "Sam",
  age: 15
}, {
  name: "William",
  age: 6
}, {
  name: "Lucy",
  age: 13
}, {
  name: "Barney",
  age: 80
}]

function double(arr) {
  return arr.map(n => n * 2); // maps the array of numbers and doubles them
}

function doubleAge(arr) {
  return arr.map(n => n.age * 2); // maps into the array of objects and gets the age element to double it
}

function filterEven(arr) {
  return arr.filter(n => (n % 2) == 0); //filters out numbers that are even and create a different array.
}


function filterGreaterThan10(arr) {
  return arr.filter(n => (n > 10))
}


function findEven(arr) {
  return arr.find(n => (n % 2) == 0);
}


function includeEven(arr) {
  return arr.includes(n => (n % 2) == 0)
}

function findAgeGreaterThan10(arr) {
  return arr.find(n => (n.age > 10))
}
// console.log(findAgeGreaterThan10(peopleArray));

function includeAgeGreaterThan10(arr) {
  return arr.includes(n => (n.age < 10)) // not working
}
// console.log(includeAgeGreaterThan10(peopleArray));

function sumOfNumbers(arr) {
  return arr.reduce((sum, n) => sum + n, 0);
}
// console.log(sumOfNumbers(numArray))

function avgOfNumbers(arr){
  return arr.reduce((sum, n) => sum + n, 0)/arr.length ;
}
// console.log(avgOfNumbers(numArray))

function maxOfNumbers(arr){
  return arr.reduce((a, b ) => a < b ?  , 0)  ;
}

console.log(maxOfNumbers(numArray))
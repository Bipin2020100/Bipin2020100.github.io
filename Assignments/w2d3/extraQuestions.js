var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")(); //this will prompt in node and not affect browser prompt

const numArray = [5, 20, 77, -20, 300, 51, 2]
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
// log(lterEven(numArray))


function filterGreaterThan10(arr) {
  return arr.filter(n => (n > 10))
}
// log(filterGreaterThan10(numArray))


function findEvenIndex(arr) {
  return arr.findIndex(n => (n % 2) === 0);
}
// log(findEvenIndex(numArray))

function findEven(arr) {
  return arr.find(n => (n % 2) === 0);
}
// log(findEven(numArray))


function includeEven(arr) {
  return arr.includes(20)
}
// log(includeEven(numArray))

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
 console.log(sumOfNumbers(numArray))

function avgOfNumbers(arr){
  return arr.reduce((sum, n) => sum + n, 0)/arr.length ;
}
// console.log(avgOfNumbers(numArray))

function maxOfNumbers(arr){
  return arr.reduce((a, b ) => a < b ? b : a, 0)  ;
}

// console.log(maxOfNumbers(numArray))

function maxForAges(arr){
  return arr.reduce((a, b) => a < b.age ? b.age : a, 0)
}
// console.log(maxForAges(peopleArray))
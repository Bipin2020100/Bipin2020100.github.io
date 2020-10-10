const {
  firebrick
} = require("color-name");

// "use strict";
var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")(); //this will prompt in node and not affect browser prompt



function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt('How much to add?', 0);
  };

}

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);


function sumTo(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// log(sumTo(5));

function sumToRecursion(n) {
  if (n === 0) {
    return n;
  } else {
    n += sumToRecursion(n = 1)
  }
}

// log(sumTo(3));



function factorialsRecursion(n) {
  if (n === 1) {
    return n;
  } else {
    n = n * factorialsRecursion(n - 1);
    return n;
  }
}

// log(factorialsRecursion(3));

function factorials(n) {
  let m = 1;
  do {
    m = m * n;
    n--
  } while (n > 1)
  return m;
}
// log(factorials(5));

function fab(n) {
  let b = 1;
  let c = 1;
  for (let i = 3; i <= n; i++) {
    let a = b + c;
    b = c;
    c = a;
  }
  return c;
}

// log(fab(7));log(fab(3));log(fab(77));

function fabRecursion(n) {
  if (n <= 1) {
    return n;
  } else {
    return fabRecursion(n - 1) + fabRecursion(n - 2);
  }
}

// log(fabRecursion(7))
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(listed) {
  while(listed){
    alert(listed.value);
    listed = listed.next;
  }
}

// log(printList(list));

function printListRecursive(listed){
    alert(listed.value) ;
  if (listed.next !== null){
    printListRecursive(listed.next)
  }
}
// log(printListRecursive(list));

class TreeNode {
 constructor(value) {
 this.value = value;
 this.descendents = [];
 }
}
// create nodes with values
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');
// associate root with is descendents
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);

function consoleNames(list){
  // log(list.descendents.length)
  alert(list.value);
  if (list.descendents.length !== 0){
  for( let n of list.descendents){
    consoleNames(n)
  }
  }
}
log(consoleNames(homer));



var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")(); //this will prompt in node and not affect browser prompt

function makeCounter() {
  let count = 0;
  return function(a) { 
    if (a > 3){return "Warning: increment was by value greater than 3: " + count } else 
    return count+ a; };
  }
  const mycounter = makeCounter();
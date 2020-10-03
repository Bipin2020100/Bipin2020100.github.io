var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")(); //this will prompt in node and not affect browser prompt

function mapper(arr){
  let brr = [];
  let i = 0;
  for (let i of arr){
   brr[i] = i;
   i++
  }
  return brr;
}

function myMap(arr, func){
  const newArray = [];
  for (const element of arr){
    newArray.push(func(element));
  }
  return newArray;
}

let testArray = [1,2,3];
function double(num){
  return 2*num;
}

console.log(myMap(testArray, double))
'use strict';

function sum(arr){
  let sum = 0;
  for (let s of arr){
    sum += s;
  }
  return sum;
}

function mult(arr){
  let mult = 1;
  for (let s of arr){
    mult *= s;
  }
  return mult;
}

let b = [2,3,4];
console.log(sum(b));
console.log(mult(b));
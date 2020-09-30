'use strict';
/**
 * 
 * @param {a} is  number 
 * @param {b} is number
 */
function pow(a,b){
  let mul = 1;
  for (let i = 0 ; i < b ; i ++){
    mul *= a;
  }
  return mul;
}

console.log(pow(4,2))
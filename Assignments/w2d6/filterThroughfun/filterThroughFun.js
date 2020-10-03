"use strict";

/* .. your code for inBetween and inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

/**
 * @param {number} a is smallest number to include
 * @param {number} b is largest number to include
 * @returns {function } a function that will be called by Array.filter with a number arguemnet and then will retrun true if the number in the range
 */

function inBetween(a,b){
 /**
  * 
  * @param {number} number is what filter will give us
  * @return {number} true if the number is in the range 
  */
  function between(number){
    if ( a <= number && number <= b){
      return true;
    } else {
      return false;
    }
    return between;
  }

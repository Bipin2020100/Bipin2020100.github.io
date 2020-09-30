"use strict";
/**
 * @param {a} is a number
 * @param {a} is a number
 * @param {a} is a number
 * @returns {number}
 */

function maxOfThree(a,b,c){
  
  if (( a >= b) && (a >= c )){
    return a;
  } else if (( b >= a) && (b >= c )){
    return b;
  } else if (( c >= a) && (c >= b)){
    return c;
  } 
  }

  alert(maxOfThree(4,5,6));

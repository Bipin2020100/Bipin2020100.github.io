/* eslint-disable require-jsdoc */
/* eslint-disable strict */


function filterLongWords(arr,i){
  let j = 0;
  let output = [];
  for (let s of arr){
    if (s.length > i){
    output[j] = s;
    j++
    }
  }
  return output;
}
///////////////////////////////////////////////////
function findLongestWord(arr){
  let length = 0 ;
  let highest = 0;
  for ( let s of arr){
    length = s.length; 
    if (length > highest){
      highest = length;
    } 
  }
  return highest;
}
////////////////////////////////////////////////////

function maxOfThree(a,b,c){
  
  if (( a >= b) && (a >= c )){
    return a;
  } else if (( b >= a) && (b >= c )){
    return b;
  } else if (( c >= a) && (c >= b)){
    return c;
  } 
  }
////////////////////////////////////////////////

  function reverseArray(arr) {
    let output = "";
    let j = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
      output += arr[i];
      j++;
    }
    return output;
  
  }

//////////////////////////////////////////////////////

/**
 * 
 * @param {arr} arr is array of numbers 
 */

function sum(arr){
  let sum = 0;
  for (let s of arr){
    sum += s;
  }
  return sum;
}

///////////////////////////////////////////////////

function isVowel(a){
  if (( a === 'a') || ( a === 'e') ||( a === 'i') ||( a === 'o') ||( a === 'u') ){
    return true;
  }else {
    return false;
  }

}
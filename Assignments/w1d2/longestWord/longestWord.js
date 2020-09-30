'use strict';

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
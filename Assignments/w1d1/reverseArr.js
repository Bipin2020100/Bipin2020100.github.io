'use strict';

function reverseArray(arr) {
  let output = [];
  let j = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    output[j] = arr[i];
    j++;
  }
  return output;

}

let b = [5, 4, 'string']
console.log(reverseArray(b));


function reverseArrInPlace(arr) {
  for (let i = 0 ; i < arr.length /2 ; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length -1 -i];
    arr[arr.length -1 -i] = temp;
  }
  return arr;
}

let c = [5, 3, 2, 7];
console.log(reverseArrInPlace(c));
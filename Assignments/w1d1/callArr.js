'use strict';

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // ?

// Output is a,b,funciton(){alert(this);} because alert converts the array into string.
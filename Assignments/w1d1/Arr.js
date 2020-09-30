'use strict';

let arr = ['Jazz', 'Blues'];
arr.push('Rock-n-Roll');
arr[Math.floor(arr.length /2)] = 'Classics';
let strip = arr.shift;
console.log(strip);
arr.unshift('Rap','Reggae')
console.log(arr);
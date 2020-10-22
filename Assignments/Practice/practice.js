/* eslint-disable */

var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")(); //this will prompt in node and not affect browser prompt

// function Clock({ template }) {

//   let timer;

//    bipin = function() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//     timer = setInterval(bipin, 1000);
//   }

//   this.stop = function() {
//     clearInterval(timer);
//   };

//   // this.start = function() {
//   //   this.bipin();
//   //   timer = setInterval(bipin, 1000);
//   // };

// }
// // Clock.bipin()
// let clock = new Clock({template: 'h:m:s'});
// // clock.start();
// clock.bipin()

// class User {
//   constructor(name) { this.name = name; }
//   sayHi() { alert(this.name); }
// }

// // proof: User is a function

// class squu{
//   constructor(a){this.length = a}
//   area(){return this.length * this.length}
// }

// let bb = squu(4);
// log(bb)

// function Dog(name){
//   this.name = name;
//     this.walk = function(){
//       alert(this.name + ' is walking . . ');
//     }
//     return 1
// }

// let myDog =  Dog('Candy');
//  console.log(myDog);
//  myDog.walk();
// function highestNum(arr) {
//   let brr = [];

//   for (let i of arr) { //n
//     let highest = 0; //1*n
//     for (let j of i) { // n*n =n2
//       if (j > highest) { n2
//         highest = j; n2
//       }
//     }
//     brr.push(highest);
//   }
//   return brr;
// }


// for(let i of arr){   //n
//   sum+=arr[i] /1*n
// }
// let arr = [1, 2, 3, 4, 5]

// console.log(highestNum([
//   [4, 3, 2, 1],
//   [5, 7, 9, 10],
//   [100, 101, 200, 209]
// ])) //[4, 10, 209]

class Account{

  constructor( ){
     let balance = 0;
     this.getBalance = function(){
       return balance

     };

     this.setBalance=function(amt){
       return balance + amt
     }
  }

 

  
}

let myAccount = new Account();
console.log(myAccount.hasOwnProperty("balance"))


console.log(myAccount.getBalance())
console.log(myAccount.setBalance(5))
console.log(myAccount.balance)

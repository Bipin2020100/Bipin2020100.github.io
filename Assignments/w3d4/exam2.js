// "use strict";


var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")();

// function sayHi(){
//   console.log("Hello");
//   return function (){
//     console.log('Bye');
//   }
// }
//   // setTimeout(sayHi,2000);


/////////////////////////////////////////////////////////////////////

// function perimeter(){
//   console.log(this);
//   return 4 * this.side;
// }
// const shape = {side : 5 , perimeter : perimeter};
// log(shape.perimeter());// this line will return to console. If not given console.log the returned value just vanishes

/////////////////////////////////////////////////////////////////////


// function perimeter(){
//   console.log(this);
//   return 4 * this.side;
// }
// const shape = {side : 5 , perimeter : perimeter};
// shape.perimeter();
// const myPerim = shape.perimeter;
// // myPerim();

/////////////////////////////////////////////////////////////////////

// function perimeter(){
//   console.log(this);
//   return 4 * this.side;
// }
// const shape = {side : 5 , perimeter : perimeter};
// const myPerim = shape.perimeter;
// // myPerim();

//////////////////////////////////////////////////////////////////////

let john = {name : "John", surname : "Smith" , age : "10"};
let pete = {name : "Pete", surname : "Hunt" , age : "2"};
let people = [john , pete]

let output = people.map( user => {
  return {
    fullname:  `${user.name} ${user.surname}`,
    age : user.age
  }
})
// log(output)

////////////////////////////////////////////////////////////////////////

let numArray = [5,44,10,33];

let get = numArray.reduce((a,b)=> a < b ? a : b, 100000);
// log(get);

////////////////////////////////////////////////////////////////////////

// let young = people.reduce((a, b) =>{
//   let count = 0
//   console.log("A", ++count,a);
//   console.log( "B.age",b.age);
//   if ( b.age > a ){
//     console.log("if",a, b.age)
//     console.log("if b.age", b.age)
//     return b.age;
//   }
//   console.log("after if", a)
//   return a
// }, 0)
// console.log(young)


let young = people.reduce((a, b) => a > b.age ?  b.age : a , 30 )
// console.log(young)  //10, 5

/////////////////////////////////////////////////////////////////////////

// closure , makeAccount() to keep track of an account balance

function makeAccount(){
    let balance = 0;
    return function(op, value){
    if ( op === "add"){
      balance += value;
    } else if ( op === "debt"){
      balance -= value;
    }
}
return balance;
}
let account1 = makeAccount();
log(account1("add", 10));
log(account1("add", 10));
log(account1("debt", 4));

/////////////////////////////////////////////////////////////////////////////////////////
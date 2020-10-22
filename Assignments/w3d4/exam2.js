// "use strict";
// console.log(findAgeGreaterThan10(peopleArray));
/* eslint-disable */
var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")();


function sayHi(){
  console.log("Hello");
  return function (){
    console.log('Bye');
  }
}
  setTimeout(sayHi,2000);
  console.log(setTimeout)


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

// let john = {name : "John", surname : "Smith" , age : "10"};
// let pete = {name : "Pete", surname : "Hunt" , age : "2"};
// let people = [john , pete]

// let output = people.map( user => {
//   return {
//     fullname:  `${user.name} ${user.surname}`,
//     age : user.age
//   }
// })
// log(output)

////////////////////////////////////////////////////////////////////////

let numArray = [5,44,1,33];
// log(Math.min(...numArray))

let get = numArray.reduce((a,b)=> a < b ? a : b, Infinity);
// log(get);

////////////////////////////////////////////////////////////////////////

let john = {name : "John", surname : "Smith" , age : 10};
let pete = {name : "Pete", surname : "Hunt" , age : 20};
let people = [john , pete]

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


let young = people.reduce((a, b) => a < b.age ?  a : b.age , Infinity )
// log(young)  //10, 5

/////////////////////////////////////////////////////////////////////////

// closure , makeAccount() to keep track of an account balance

function makeAccount(){
    let balance = 0;
    return function(op, value){
    if ( op === "add"){
      balance += value;
      return balance;
    } else if ( op === "debt"){
      balance -= value;
      return balance;
    } 
}
}
// let account1 = makeAccount();
// log(account1("add", 10));
// log(account1("add", 10));
// log(account1("debt", 4));

///////////////////////////////////////////////////////////////////////////////////////////////////

let node4 = {name : "label", children : null};
let node5 = {name : "input", children : null};
let node3 = {name : "p", children : null};
let node2 = {name : "div", children : [node4, node5]};
let node1 = {name : "boday", children : [node2, node3]}

function classAdder(node){
  if(node.children === null ){
    node.class = "classNode";
  } else {
    node.class = "classNode";
    for (let element of node.children){
      classAdder(element);
    }
  }
}
// console.log(node1)
// classAdder(node1)
// console.log(node1)
// console.log(node4)
// console.log(node5)

/////////////////////////////////////////////////////////////////////////////////////////////////

function sumToN(num){
  if (num === 1){
    return 1;
  } else {
    return num + sumToN(num -1);
  }
}

// log(sumToN(5))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function tenClock(){
  let tickCount = 10;
  const watchId = setInterval(logTime, 1000)
  function logTime(){
    let currentTime = new Date()
    let hrs = currentTime.getHours()
    let min = currentTime.getMinutes()
    let sec = currentTime.getSeconds()
    log(hrs + ":" + min + ":" + sec)
    if (tickCount === 0){
      clearInterval(watchId);
    } else {
      tickCount -- ;
    }
  }
}
// log(tenClock())



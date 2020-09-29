/* eslint-disable require-jsdoc */
"use strict";
/**
 * this function countes the number of guesses you take to guess the computer generated number
 */
const prompt = require("prompt-sync")();

function guessGame() {
 let  x = document.getElementById("inputNumber");
  let yay;
  yay = Math.random() * 10;
  yay = parseInt(yay);
   x=parseInt(x);
  let count = 0;
  //let x=0;
  do {
   x =  prompt("enter another number : ");
   x=parseInt(x);
  //  x = prompt("enter the number ");
  //   x = parseInt(x);
    count++;
  } while (x !== yay);
  //return count;
  // console.log(count)
   document.getElementById("result").innerHTML="You guessed right in " + count + " attempts";
}

// console.log(guessGame());
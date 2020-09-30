'use strict';
/**
 * user is an empty object
 * user is later on filled with element and deleted the element named name
 */
const alert = require("alert")();

const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

/**
 * 
 * @param {isEmpty} is a function that takes object and return true if the object has elements else false 
 */

function isEmpty(obj){
  for (let key in obj){
    return false;
  }
  return true;
}

let salaries = {
  John : 100,
  Ann : 160,
  Pete : 130
}

let sum = 0 ;
for (let key in salaries){
  sum += salaries[key];
}
 console.log(sum);

 let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
/**
 * 
 * @param {multiplyNumeric} is a function that multiplies each value of object by two. 
 */
function multiplyNumeric(obj){
  for(let key in obj){
    if(typeof obj[key] == 'number'){
    obj[key] *= 2;
  }
}
}

// Objects: the basics



function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); //  Error: Cannot read property 'name' of undefined since this is not defined inside ref: Says cannot read property name of undefined.

//Create a calculator

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

/////////////////////////////////////

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this;
  }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

// or it can also be used like

ladder.up().up().down().showStep(); 

// or we can also use syntex like this:

ladder
      .up()
      .up()
      .down()
      .up()
      .down()
      .showStep(); // this returns 1
      














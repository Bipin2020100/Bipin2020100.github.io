
/*eslint-disable */

var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")();

// The Clock class is written in functional style. Rewrite it the “class” syntax.

// P.S. The clock ticks in the console, open it to see.

class Clock {
  constructor({ template }){
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  };

  start(){
    this.render();
    this.timer = setInterval(()=>this.render(),1000);
  };

}

let clock = new Clock({template: 'h:m:s'});
// clock.start();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//   run(speed) {
//     this.speed = speed;
//     alert(`${this.name} runs with speed ${this.speed}.`);
//   }
//   stop() {
//     this.speed = 0;
//     alert(`${this.name} stands still.`);
//   }
// }

// let animal = new Animal("My animal");

// class Rabbit extends Animal {
//   hide() {
//     alert(`${this.name} hides!`);
//   }
// }

// let rabbit = new Rabbit("White Rabbit");

// rabbit.run(5); // White Rabbit runs with speed 5.
// rabbit.hide(); // White Rabbit hides!
// log(rabbit.name);
// log(rabbit.speed);
// rabbit.run(2);   These are just practice to see how it works.

/////////////////////////////////////////////////////////////////////////////////

// Here’s the code with Rabbit extending Animal.

// Unfortunately, Rabbit objects can’t be created. What’s wrong? Fix it.

class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
alert(rabbit.name);// when the child class has to use the parent class with the same name property, we need to use super.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
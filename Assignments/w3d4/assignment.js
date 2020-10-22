
/*eslint-disable*/

var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")();

////////////////////////////////////////////////////////////////////
// Fix a function that loses "this"

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },

// };
//  let abc =user.loginOk
//askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
//  askPassword(function(){user.loginOk}, function(){user.loginFail()});
//  askPassword(function(){(user.loginOk.call(user))},function(){user.loginFail.call(user)});
// askPassword(function(){(user.loginOk.apply(user))},function(){user.loginFail.apply(user)});
// askPassword.apply(user, [user.loginOk.bind(user), user.loginFail.bind(user)]);
// askPassword.call(user, user.loginOk.bind(user), user.loginFail.bind(user));
// // OR
// askPassword(() => user.loginOk.call(user), () => user.loginFail.call(user));


//////////////////////////////////////////////////////////////////////////

// What should we pass askPassword in the code below, so that it calls user.login(true) as ok and user.login(false) as fail?

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   login(result) {
//     alert( this.name + (result ? ' logged in' : ' failed to log in'));
//   }
// };
// askPassword(user.login.bind(user, true),user.login.bind(user,false));
// askPassword(function(){user.login(true)},function(){user.login(false)});

///////////////////////////////////////////////////////////////////

// Fix the code below using an arrow function and then using bind

// let group = {
//  title: "Our Group",
//  students: ["John", "Pete", "Alice"],
//  showList() {
//  this.students.forEach((student) =>{
//  // Error: Cannot read property 'title' of undefined
//  alert(this.title + ': ' + student)
//  });
//  }
// };

//  group.showList();

/////////////////////////////////////////////////////////////////////

// let user = {
//   firstName: "John",
//   sayHi() {
//   alert(`Hello, ${this.firstName}!`);
//   }
//   };
//   setTimeout(()=>user.sayHi(), 1000); // Hello, undefined!
  
///////////////////////////////////////////////////////////////////////


class User {
  constructor(name = "Anonymous") {
      this.name = name;
  }
  sayHi() {
      console.log(`Hello, ${this.name}!`);
  }
}
fred = new User();
console.log(fred);
console.log(fred.__proto__);
console.log(User.prototype);
fred.sayHi();
bob = new User("Bob");
console.log(bob);
bob.sayHi();





















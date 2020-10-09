
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
// let abc =user.loginOk
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
// askPassword(function(){user.loginOk()}, function(){user.loginFail()});
// askPassword(function(){(user.loginOk.call(user))},function(){user.loginFail.call(user)});
// askPassword(function(){(user.loginOk.apply(user))},function(){user.loginFail.apply(user)});

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

///////////////////////////////////////////////////////////////////

// Fix the code below using an arrow function and then using bind

// let group = {
//  title: "Our Group",
//  students: ["John", "Pete", "Alice"],
//  showList() {
//  this.students.forEach(function(student) {
//  // Error: Cannot read property 'title' of undefined
//  alert(this.title + ': ' + student)
//  });
//  }
// };
// group.showList.call(group.showList.bind(group));

/////////////////////////////////////////////////////////////////////



























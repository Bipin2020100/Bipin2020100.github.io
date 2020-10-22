

/* eslint-disable */

var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")();


// Create an object called Teacher derived from the Person class, and implement a method called teach
//  which receives a string called subject, and prints out:
//  [teacher's name] is now teaching [subject]
//  Here is code for Person and an example of a Student function constructor. Write Mocha tests that verify
//  the describe, learn, and teach methods work as expected for students and teachers.
 var Person = function() {};
 Person.prototype.initialize = function(name, age)
 {
  this.name = name;
  this.age = age;
 }
 Person.prototype.describe = function()
 {
  return this.name + ", " + this.age + " years old.";
 }
 var Student = function() {};
 Student.prototype = new Person();
 Student.prototype.learn = function(subject)
 {
  console.log(this.name + " just learned " + subject);
 }
 var me = new Student();
 me.initialize("John", 25);

 me.learn("Inheritance");

 
//  let Teacher = function() {};
//  Teacher.prototype = new Person();
//  Teacher.prototype.teach = function(subject)
//  {
//   console.log(this.name + " is teaching " + subject);
//  }

// let he = new Teacher();
// he.initialize("Bipin", 30);

// he.teach("Inheritance");


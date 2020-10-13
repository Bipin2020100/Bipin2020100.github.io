
"use strict";

/*eslint-disable */

var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")();


const assert = require('chai').assert;
const app = require('../app.js');

describe("Account balance in the bank", function () {
  // ...
  it("This should return true for being equal ",
    function () {
      assert.equal(myAccount.deposit(200), 200);
    });

    it("This should return true for being equal ",
    function () {
      assert.equal(myAccount.withdraw(50), 150);
    });

});
var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")(); //this will prompt in node and not affect browser prompt


// body: null
// div: null
// label: Name
// input: was typed by a user
// p: This is text in the a paragraph
let node3 = {
  name: "p",
  value: "This is text in the a paragraph",
  children: null
};
let node4 = {
  name: "label",
  value: "Name",
  children: null
};
let node5 = {
  name: "input",
  value: "this was typed by a user",
  children: null
};
let node2 = {
  name: "div",
  value: null,
  children: [node4, node5]
};
let node1 = {
  name: "body",
  children: [node2, node3],
  value: null,
};

/**@param {object} node is a tree node
 * @returns {undefined}
 * we are just printing, not returning anything.
 */

function printName(node) {
  /*base case -- if children is null or empty */
  if (node.children === null) {
    console.log(node.name + ":"
      + node.value);
  } else { // reductive recursion step
    console.log(node.name + ":"
      + node.value);
    for (let child of node.children) {
      printName(child)
    }
  }
}
  //  printName(node1);


  /**@param {object} node is a tree node
   * @param {string } target is a string we are matching
   * @returns {Boolean} true if target is true else false
   * we are just printing, not returning anything.
   */

  function contains(node, target) {
    /*base case -- if children is null or empty */
    if (node.children === null) {
      if (node.name === target) {
        return true;
      } else {
        return false;
      }
    } else { // reductive recursion step
      //  if (node.name === target)? true : false ;
      if (node.name === target) {
        return true;
      }
      for (let child of node.children) {
        childResult = contains(child, target);
        if (childResult === true) {
          return true;
        }
      }
      return false; //didnot find the target
    }
  }

    log(contains(node1, "div")) ;

    log(contains(node1, "input")) ;
    log(contains(node2, "p")) ;
    log(contains(node1, "p")) ;


    /////////////////////////////////////////////
    const numArray = [5,0, 7, 77, -20, 300, 51, 2] 
    const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name: "Barney", age: 80}] map: - double numbers - double age filter: - filter all even numbers - filter all age > 10 - find even, include even - find age > 10, include age > 10 reduce - find sum of numbers - find average of numbers - find max of numbers - find max for ages - use a chain of map filter reduce to find the average age of people with even number ages - use a chain of map filter reduce to find the average age of people with odd number ages
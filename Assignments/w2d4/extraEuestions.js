/* eslint-disable*/

var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")(); //this will prompt in node and not affect browser prompt


class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendents = [];
  }
}
// create nodes with values
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');
// associate root with is descendents
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);

//  log(abe);
//  log(homer);
//  log(lisa);

function everyOneInTree(tree) {
  log(tree.value)
  if (tree.descendents.length !== 0) {
    for (let child of tree.descendents){
      everyOneInTree(child)
    }
  }
}

 log(everyOneInTree(abe));

/**@param {object} node is a tree node
 * @param {string } target is a string we are matching
 * @returns {Boolean} true if target is true else false
 * we are just printing, not returning anything.
 */

function contains(node, target) {
  /*base case -- if children is null or empty */
  if (node.descendents.length === 0) {
    if (node.value === target) {
      return true;
    } else {
      return false;
    }
  } else {
     // reductive recursion step
     if(node.value === target){
      return true;
     }
    for (let child of node.descendents) {
    abc = contains(child, target);
      if (abc === true) {
        return true;
      }
    }
    return false;
  }
}

// log(contains(homer, "bart"))
// log(contains(lisa, "bart"))

//////////////////////////////////////////////////////////////////////////

// Given a target value, return the subtree with the found node or null if no match. Extend the tree to have a more interesting test. Create a mocha test to run at least 2 or 3 tests on your tree.
// findSubtree(tree, “Homer”) → subtree with Homer as the root

////////////////////////////////////////////////////////////

// 7. Write code to illustrate the use of the spread operator for the following use cases
// a) Concatenate arrays into new arrays 

// let a, b, c, d, e;
// a = [1,2,3,4]
// b = ["Bipin", "Bisesh"]
// c = "Nepal"
// d = [23,30, "awesome"]

// e = [...a, b, c, ...d] // see how it keeps b as an array itself
// let f = [...a,...b, c, ...d]
// log(e);
// log(f);

///////////////////////////////////////////////////////////////////

// b) Make the copy of an array.

// let happy = [...f]
// log(happy)
///////////////////////////////////////////////////////////////////
// c) Concatenate an array and a new array element

// let extra = [...a, "ram", "kathmandu"]
// log(extra);
///////////////////////////////////////////////////////////////////
// d) Use an array as arguments



//  e) Use Math.min and Math.max
// let arr = [243, 157, 21, 22, 5689];

// alert( Math.max(...arr) )
// alert( Math.min(...arr) )
// f) Combine several objects into a single object
// 8. Write code to illustrate the use of the rest operator 


/////////////////////////////////////////////////////////

// Write a recursive function, treeModifier, that will take a tree and a modifier function as
// parameters. Walk through the tree and apply the function to each node. The function should
// apply some operation to a node. Write a function that will change the value of a node to be all
// caps. Write another that will change the value to have *** in front and behind the node value.
// Write another that will reverse the string of the node value. Call your recursive function with
// each of these modifier functions.
// treeModifier(tree, modiferFunc)
// allCaps(node)
// addStars(node)
// reverseNode(node)

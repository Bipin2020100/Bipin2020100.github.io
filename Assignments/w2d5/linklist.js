
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

let node4 ={ val :10 , next : null};
let node3 ={ val :10 , next : node4};
let node2 ={ val :10 , next : node3};
let node1 ={ val :10 , next : node2};

//to cut node3 out of list
node2.next = node4

//add node 3 back in
node2.next = node3;

//find with value 109 starting at the head

function findVal(head){
  currentNode = head;
  while(true){
    if(currentNode.val ===109){
      return currentNode;
    } else {
      if (currentNode.next === null){return null}
      currentNode = currentNode.next;
    }
  }
}


//to see for any arguments

function findNode(head, target){
  let currentNode = head;
  while(true){
    if(currentNode.val === target){
      return currentNode;
    } else {
      if (currentNode.next === null){return null}
      currentNode = currentNode.next;
    }
  }
}

//////////////////////////////////////////////////////////////////////////

// Write a recursive function tree modifier Q6. w2d5
/**
 * @param {*} treeNode is some node in a tree
 * @param {*} modFunc function to apply to each node
 * @returns {null}
 * This function modifies the value of each node in the tree using the modFunc
 */

function treeModifier(treeNode, modFunc){
 modFunc(treeNode);
  if (treeNode.descendents === null){
    // return null;
  } else { //loop through the array of descendents and recursively call treeModifier
   for (let node of treeNode.descendents){
     treeModifier(node);

   }
  }
}

console.log(treeModifier(abe, startFunction))
/**
 * 
 * @param {object} node from simpson tree
 * @returns {undefined}
 * changes the node value to have ***   ***
 */

function starFunction(node){
  node.value = "***" + node.value + "***";
}
/**
 * @param {object} Node is some node in a tree
 * @returns {null}
 * This function modifies the value of each node in the tree using the modFunc
 */
function caps(node){
  node.value = node.value.toUpperCase()
}

console.log(treeModifier(abe,caps));
console.log("now tree has starts", abe);
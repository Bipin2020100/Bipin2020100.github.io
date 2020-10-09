var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")(); //this will prompt in node and not affect browser prompt


function sortThis(a,b,c){
  let result= [a,b,c];
  
  return result.sort((a,b)=> a - b);
  } ; 
  // console.log(sortThis(2,1,1))

  /**
   * 
   * @param {array} array of values to reduce
   * @param {function} func to callback to do the reduction
   * @param {*} init value to start as the accumulator
   * @return {*} the final value of the accumulator
   */

  function myReduce(array, func, init){
   let accumulator = init;
    for (const element of arr){
      accumulator = func(accumulator, element);
    }
    return accumulator;
  }
  let testArray = [1,2,3,4];
  // let result = myReduce(testArray, (sum, ele) => sum + ele , 0)
  const result = myReduce(testArray, function(acc,curr){ return acc* curr}, 1)

  // console.log(result)



function myMap(arr,func){
  let newArr = []
 for (let element of arr){
   let result = func(element);
   newArr.push(result);
 }
 return newArr;
}

let testArray = [1,2,3,4,5,6]

let mapResult = myMap(testArray,double);

function double(num){return num *2}

log('map result is ', mapResult)












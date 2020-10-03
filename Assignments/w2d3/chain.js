const peopleArray = [{
  name: "Sam",
  age: 15
}, {
  name: "William",
  age: 6
}, {
  name: "Lucy",
  age: 13
}, {
  name: "Barney",
  age: 80
}];


/**
 * 
 * @param {object} obj is object.
 * @returns {number} it returns average of the even age in the object.
 */
function mappedObjAge(obj) {
  return obj.map(obj => obj.age);
}
console.log(mappedObjAge(peopleArray))

function filterEvenAge(value) {
  return value.filter(element => element % 2 === 0);
}
console.log(filterEvenAge(mappedObjAge(peopleArray)))

function reducedAverageAge(arr) {
  return arr.reduce((prev, current) => (prev + current), 0) / arr.length;
}
console.log(reducedAverageAge(filterEvenAge(mappedObjAge(peopleArray))))

const evArr = filterEvenAge(mappedObjAge(peopleArray))
console.log ((reducedAverageAge(filterEvenAge(mappedObjAge(peopleArray))))/evArr.length)
//////////////////////////////////////////////////
//without chaining

function findAverages(){
  let x=peopleArray.filter(item=>item.age%2!==0)
  let y=x.map(item=>item.age)
  let z=y.reduce((accumulator,item)=>accumulator+item,0)
  return z/y.length
  }
  console.log(findAverages())
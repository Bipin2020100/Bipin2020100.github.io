// Write a function filterLongWords() that takes an array of words and an integer i and
// returns the array of words that are longer than i. 

function filterLongWords(arr,i){
  let j = 0;
  let output = [];
  for (let s of arr){
    if (s.length > i){
    output[j] = s;
    j++
    }
  }
  return output;
}

// let b = ["Bipin", "ram", "hari"]
// let c = ["Bipin", "ram", "hari", "paudel"]

// console.log(filterLongWords(b,3))
// console.log(filterLongWords(c,4))
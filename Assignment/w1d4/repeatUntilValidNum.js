const prompt = require("prompt-sync")();
function readNumber() {
  let x;

  do {
    x = parseInt(prompt("enter a valid number:", 0))
    console.log(x)
  } while (!x);

  if (x === null || num === "") {
    return null;
  }
  console.log(`${x}`);

}


console.log(readNumber());
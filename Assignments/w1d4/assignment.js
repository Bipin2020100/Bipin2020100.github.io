// Can I add a string property?

Cannot create property 'test' on a string 

undefined when no strict mode...  

///////////////////////////////////

let x = +prompt("enter a number");
let y = +prompt ("enter a number");
alert (x +y);

/////////////////////////////////////

// Why 6.35.toFixed(1)==6.3

toFixed gives the desired number of decimals. The number 6.35 is stored with a small prescision loss which gets counted for 0.3499999. So cannot be rounded of to 6.35. The best way is to multiply by 10 and write toFixed command.


/////////////////////////////////////////

let i = 0;
while (i != 10) {
  i += 0.2;
}

// This loop will never end because of the precision loss of number. That is the reason we always need to be very careful working with decimal numberss . When working with equality checks always avoid fractions.

//////////////////////////////////////////

function random(min, max){
  return (min + (Math.random()*max);
}

//////////////////////////////////////////


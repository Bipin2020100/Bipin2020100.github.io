'use strict';

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}

// no there is no difference even if we use else in this stateent

// Re-writing using '?'

console.log(checkAgeo(16));

function checkAgeq(age){
 return ( age > 18 )? true : confirm ('Did parents allow you?');
} 

//Re-writing using '||'

function checkAgeo(age){
  return (age > 18) ||  confirm ('Did parents allow you?');

}
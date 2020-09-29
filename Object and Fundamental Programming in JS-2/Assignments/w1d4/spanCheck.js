'use strict'
///////////////////////
//to check the includes method in the function

function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return (lowerStr.includes('viagra') || lowerStr.includes('xxx'));
}


/**
 * 
 * @param {min} min is a number which is always less than the final generated number
 * @param {max} max is a number which is always greater than the final generated number 
 * This function generates a random number between min and max
 */
function random(min, max){
  return parseInt( (Math.random()*(max - min)) + min )
}
 console.log(random(10,30))
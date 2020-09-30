'use strict'

// eslint-disable-next-line valid-jsdoc
/**
 * 
 * @param {str} str is a string which is to be shortened. 
 * @param {maxLength} maxlength is the length of str to be displayed.
 * @returns the str with some hidden characters after maxLength.
 * @returntype is string
 */
function truncate(str, maxlength) {
  if ((str.length > maxlength)){
    str = str.slice(0, maxlength - 1);
    str = str + "...";
}
return str
}

console.log(truncate("Bipin is awesome", 10));

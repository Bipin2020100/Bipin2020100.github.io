"use strict";

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");
	
    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}    

/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles(){
    let titles = [];
    for (let book of library) {
        titles.push(book.title);
    }
    return titles;
}


/**
 * Event handler to display library titles scrambled by word size
 * @returns {undefined}
 */
function scramble() {

    /* get all the titles */
    const allTitles = findTitles();

    /* put all of the words into an array */
    const combinedTitles = allTitles.join(" ");  //the strings together separated by a space
    const allWords = combinedTitles.split(" ");  //make array with each word as an element

    /* find all words of different lengths and put each into own array --> array of arrays*/
    const sizedArray = collateWords(allWords);

    /* join each array back into a string --> array of strings */
    const wordStringArray = concatWords(sizedArray);  //array holding concatenated strings of n letter words

    /* join the array of strings into a single string with \n line breaks */
    const scrambleString = wordStringArray.join("\n");

    /* display in the text area */
    const textArea = document.getElementById("displayArea"); 
    textArea.innerHTML = scrambleString;
}

/**
 * 
 * @param {object} arr is 2d array with words as elements of each inner array, some elements may be empty
 * @return {object} new array with the empty elements removed and inner arrays turned into strings
 */
function concatWords(arr){
    const stringArray = [];
    for (const inner of arr) {
        if (inner !== undefined) {
            stringArray.push(inner.join(" "));  
        }
    }
  return stringArray;
}


/**
 * 
 * @param {object} arr is array of words
 * @return {object} 2-d array where nth element is array of length n words
 */
function collateWords(arr){
    let wrapper = [];  //array holding the arrays of same length words
    /* for each words get length and then push into the array of element n.  check for first time and initial if necessary */
    for (const word of arr) {
        const length = word.length;
        let sameSize = wrapper[length]; 
        if (sameSize === undefined) {
            sameSize = []; 
            wrapper[length] = sameSize;
        }
        sameSize.push(word);
    }
    return wrapper;
}
"use strict";


/**
 * 
 * @param {Array} arr of values to reduce
 * @param {Function} func to callback to do the reducing
 * @param {*} init value to start as the accumulator
 * @returns {*} the final value of the accumulator
 */
function myReduce(arr, func, init) {

    let accumulator = init;
    for (const element of arr) {
        accumulator = func(accumulator, element);
    }
    return accumulator;
}
/* eslint-disable */
function myMap(arr, func) {

    const newArr = [];
    for (const element of arr) {
        const result = func(element);
        newArr.push(result);
    }
    return newArr;
}

const testArray = [1, 2, 3, 4, 5, 6];

const mapResult = myMap(testArray, double);

function double(num){ return 2*num;}
console.log('map result is: ' , mapResult);


//const result = myReduce(testArray, (sum, ele)=> sum + ele, 0);

const result = myReduce(testArray, function (acc, curr) { return acc * curr; }, 1);

//const result = myReduce(testArray, sumFn, 0);

/* eslint-disable */
function sumFn(acc, curr) {
    return acc + curr;
}


console.log(result);
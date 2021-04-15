"use strict";

// 1. Define a function named `isBoolean` that takes in a value and returns a boolean if the argument provided is a boolean value or not.
//
// isBoolean(true)             // true
// isBoolean(false)            // true
// isBoolean(0)                // false
// isBoolean(null)             // false
// isBoolean("")               // false
// isBoolean("kwiw")           // false
// isBoolean([1, 2])           // false

// //Question 1
// function isBoolean(x){
//     return x === false || x === true
// }
//

// 1. Define a function named `isString` that takes in a value as an input and returns a boolean if the input provided is a string or not. Numeric strings will count as strings and should return true.
//
// isString("Hello")           // true
// isString("Codeup")          // true
// isString("123")             // true
// isString(4)                 // false
// isString(true)              // false
// isString([1, 2, 3])         // false
// isString()                  // false
// isString(null)              // false

// // Question 2
// function isString(x){
//     return typeof x === "string";
// }
//

// 1. Define a function named `isNotString` that accepts an input and returns `true` or `false` based on whether an input is not a string. Numeric strings will count as strings and should return `false`.
//
// isNotString(4)                 // true
// isNotString(true)              // true
// isNotString([1, 2, 3])         // true
// isNotString()                  // true
// isNotString(null)              // true
// isNotString("Hello")           // false
// isNotString("Codeup")          // false
// isNotString("123")             // false

// // Question 3
// function isNotString(x){
//     return typeof x !== "string";
// }
//

// 1. Define a function named `isEmptyString` that will return `true` when passed an argument with the value of "", i.e. an empty string. All other arguments should return false.
//
// isEmptyString("")                // true
// isEmptyString(" ")               // false
// isEmptyString("Hello")           // false
// isEmptyString("Codeup")          // false
// isEmptyString("123")             // false
// isEmptyString(true)              // false
// isEmptyString([1, 2, 3])         // false
// isEmptyString(null)              // false
// isEmptyString()                  // false

// // Question 4
// function isEmptyString(x){
//     if (x === ""){
//         return true
//     } else {
//         return false
//     }
// }
//

// 1. Define a function named `isNotANumber` that accepts an input and returns `true` or `false` based on whether an input is a non-numeric value or not. Numbers as strings are not a number and should return true.
//
// isNotANumber("")               // true
// isNotANumber(true)             // true
// isNotANumber("Bob")            // true
// isNotANumber([1,2,3])          // true
// isNotANumber("42")             // true
// isNotANumber(23)               // false
// isNotANumber(3.141)            // false

// //  Question 5
// // function isNotANumber(x){
// //     if ( typeof x === "Number"){
// //         return true
// //     } else {
// //         return false
// //     }
// // }
//
// function isNotANumber(x){
//     return typeof x !== "number";
// }
//

// 1. Define a function named `isNegative` that accepts a number and returns `true` or `false` based on whether the input is less than zero.
//
// isNegative(-1)              // true
// isNegative(-5)              // true
// isNegative("-3")            // true
// isNegative(0)               // false
// isNegative(6)               // false
// isNegative("10")            // false
// isNegative(true)            // false
// isNegative(false)           // false
// isNegative("Bob")           // false
// isNegative([-1, 2, 3])      // false
// isNegative(null)            // false

// //Question 6
// function isNegative(x){
//     if (x < 0) {
//         return true
//     } else {
//         return false
//     }
// }
//

// 1. Define a function named `isPositive` that accepts an input and returns `true` or `false` based on whether the input is above zero. Any non-numeric input should return false.
//
// isPositive(1)               // true
// isPositive("6")             // true
// isPositive(3.141)           // true
// isPositive(-1)              // false
// isPositive(-5)              // false
// isPositive("-4")            // false
// isPositive(0)               // false
// isPositive("Bob")           // false
// isPositive(true)            // false

// //Question 7
// function isPositive(x){
//     return x > 0;
// }

//1. Define a function named `isZero` that will return `true` when passed an argument of the numeric value `0`, and return `false` for all other arguments.
//
//         isZero(0)                 // true
//         isZero("0")               // true
//         isZero("Hello")           // false
//         isZero("Codeup")          // false
//         isZero("123")             // false
//         isZero(true)              // false
//         isZero([1, 2, 3])         // false
//         isZero(null)              // false
//         isZero()                  // false

// //Question 8
// function isZero(x){
//     return Number(x) === 0;
// }

//1. Define a function named `isArray` that takes in an input and returns a boolean whether or not that input is an array or not.
//
//         isArray([])                 // true
//         isArray([1, 2, 3])          // true
//         isArray(['a', 'b'])         // true
//         isArray(false)              // false
//         isArray(12)                 // false
//         isArray("Bob")              // false
//         isArray({'some': 'object'}) // false
//         isArray(true)               // false
//         isArray()                   // false

// //Question 9
// function isArray(x){
//     if (typeof x === Array) {
//         return true
//     } else {
//         return false
//     }
// }

//1. Define a function named `upperCase` that takes in a single input. If the input is not a string, return `false`. If the input is a non-numeric string, then return it with all the letters capitalized.
//
//         upperCase("Codeup")         // "CODEUP"
//         upperCase("javascript")     // "JAVASCRIPT"
//         uppercase("45")             // "45"
//         upperCase(23)               // false
//         upperCase(null)             // false
//         upperCase([1, 2, 3])        // false
//         upperCase(true)             // false
//         upperCase()                 // false

// //Question 10
// function upperCase(x){
//     if (typeof x !== "string") {
//         return false
//     } else {
//         return x.toUpperCase()
//     }
// }
//



/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
// Question 0
// The comments to the right of the function call example demonstrate the output of the function's operation on the provided input(s).
// Add your function definitions to solutions.js. Refresh index.html to run automated tests for feedback on your solutions.



// Question 1
// Define a function named isTrue that takes in any input and returns true if the input provided is exactly equal to true
// in value and data type.

function isTrue (input){
    return input === true;
}

// Question 2
// Define a function named isFalse that takes in a value and returns a true if and only if the provided
// input is equal to false in both type and value.
//

function isFalse(input){
    return input === false
}

// isFalse(false)             // true
// isFalse(true)              // false
// isFalse(0)                 // false
// isFalse(null)              // false
// isFalse("")                // false
// isFalse("Banana")          // false
// isFalse([1, 2])            // false
//
// Question 3
// Define a function named not that takes in any input and returns the boolean opposite of the provided input.
//

function not(input){
    return !input
}


// not(false)                  // true
// not(0)                      // true
// not("")                     // true
// not(null)                   // true
// not(NaN)                    // true
// not(undefined)              // true
// not(true)                   // false
// not("something")            // false
// not(Infinity)               // false
// not(123)                    // false
//
// Question 4
// Define a function named addOne that takes in a single input. If the input is a number or a numeric string, return the value plus one.
//

function addOne(input){
    return Number(input)+1
}

// addOne(0)                    // 1
// addOne(2)                    // 3
// addOne(-5)                   // -4
// addOne(5.789)                // 6.789
// addOne(Infinity)             // Infinity
// addOne("2")                  // 3
// addOne("0")                  // 1
// addOne("banana")             // NaN
// addOne(true)                 // NaN
// addOne(NaN)                  // NaN
//
// Question 5
// Define a function named isEven that takes in a single input. If the input is an even number or
// a string containing an even number, return true. Any other input should return false for the output.
//

function isEven(input){
    if (input%2 === 0){
        return true;
    }
    else if (!Number(input)){
        return false
    }
    else{
        return false;
    }}

// isEven(2)                   // true
// isEven(-8)                  // true
// isEven(0)                   // true
// isEven("42")                // true
// isEven(1)                   // false
// isEven("-3")                // false
// isEven(false)               // false
// isEven("banana")            // false
//
// Question 6
// Define a function named isIdentical that takes in two input arguments. If each input is equal both in data type and in value,
// then return true. If the values are not the same data type or not the same value, return false.
//

function isIdentical(In1, In2){
    return In1 === In2;
}

// isIdentical(3, 3)                     // true
// isIdentical(false, false)             // true
// isIdentical("hello", "hello")         // true
// isIdentical(3, 3.0)                   // true
// isIdentical(undefined, undefined)     // true
// isIdentical(2, "2")                   // false
// isIdentical("javascript", "java")     // false
//
// Question 7
// Define a function named isEqual that takes in two input arguments. If each argument is equal only in value, then return true.
// Otherwise return false.
//

function isEqual(a,b) {
    return a == b;
}

// isEqual(3, "3")                       // true
// isEqual("abc123", "abc123")           // true
// isEqual(true, 1)                      // true
// isEqual(0, false)                     // true
// isEqual(4, -5)                        // false
// isEqual("java", "javascript")         // false
//
// Question 8
// Define a function named or that takes in two input arguments. The output returned should be the result of an or operation on both inputs.
//

function or(c,d){
    return (c < d) || (c > d);
}

// or(true, true)                    // true
// or(true, false)                   // true
// or(false, true)                   // true
// or(false, false)                  // false
// or("hello", "world")              // "hello" (this behavior is non-obvious, research more!)
//
// Question 10
// Define a function named and that takes in two input arguments and returns the result of a logical and operation of both inputs.
//

function and(x,y){
    return x === y && y === x;
}

// and(true, true)                    // true
// and(true, false)                   // false
// and(false, true)                   // false
// and(false, false)                  // false
// and("hello", "world")              // "world" (this behavior is non-obvious, research more)
//
// Question 11
// Define a function named concat that takes in two input arguments. If both arguments are strings,
// then return the concatenated result. If two numbers are provided, then return the string concatenation of each set of numerals.
//

function concat(x,y){
    return x.toString() + y.toString();
}
//
// concat("code", "up")                // "codeup"
// concat("connect", 4)                // "connect4"
// concat("hello", "world")            // "helloworld"
// concat(4, 2)                        // "42"
// concat(true, true)                  // "truetrue"
// // Hints



"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

// Question 1:
function isANumber(num){
    if (typeof (num) === 'number'){
        return true
    }else{
        return false
    }
}

// Question 2:
function increment(num){
    if (isANumber(num)){
        return num + 1
    }else{
        return false
    }
}

// Question 3:
function decrement(num){
    if (isANumber(num)){
        return num - 1
    }else{
        return false
    }
}

// Question 4: Not Correct
function getHighestNumber(x, y, z){
    var sorted = [...x,y,z].sort((a,b)=>b-a);
    var firstChar = sorted.unshift()
    if (isANumber(x) && isANumber(y) && isANumber(z)){
        return firstChar;
    }else{
        return false
    }
}

//math.max

// Question 5:
function parseNumber(num){
    return Number(num);
}

// Question 6: Not correct

function add(x, y){
    if (isANumber(x) && isANumber(y)) {
        return x + y
    }else{
        return false
    }
}

// Question 7:
function multiply(x, y){
    if (isANumber(x) && isANumber(y)) {
        return x * y
    }else{
        return false
    }
}

// Question 8:
function square(x){
    if (isANumber(x)) {
        return x * x
    }else{
        return false
    }
}

// Question 9:
function sumOfSquares(x, y){
    if (isANumber(x) && isANumber(y)) {
        return ((x * x) + (y * y));
    }else{
        return false
    }
}

// Question 10:
function isPalindrome(x){
    var reverseX = x.reverse();
    if (isANumber(x)) {
        return false;
    }else if (x === reverseX){
        return true;
    }
}

function firstEnd(input){
    var together = input.shift() + input.pop();
    var newArray = [];
    newArray = together.split("");
    return newArray;

}

console.log(firstEnd(["a", "b", "c", "d"]));

//return input.tolowercase() === input.split("").reverse().join("").tolowercase();
//            Bob becomes bob        becomes array/ reverse/ make string/ lowercase



// Write a function named calculateTax that takes in two inputs representing the totalPaid and the taxPercent. If both inputs are numeric or numeric strings, calculateTax should return the total with tax added in a string looking like: "$XX.XX". If either or both inputs are not numeric or numeric strings, calculateTax should return false.

//calculateTax(25, 8)				 // "$27.00"
// calculateTax(10, 12)             // "$11.20"
// calculateTax(120, 15.5)			 //	"$138.60"
// calculateTax(10, true)           // false
// calculateTax([1, 2, 3], 10)      // false
// calculateTax("Codeup", 100)      // false
// calculateTax()                   // false



// function calculateTax (x, y){
//     var tax = y * .01;
//     var total = (tax * x)+ x;
//     if(x === typeof (Number) && y === typeof (Number)){
//         console.log("$" + total);
//     }
//     else{
//         console.log("Sorry, Your total could not be calculated");
// }}
//
// calculateTax(10,8);





//Topics covered on the 2nd JS assessment.
// Working with values, variables, and data types
// Using assignment and comparision operators
// Working with JS internal functions to make decisions and perform actions.
// Using conditional logic to make decisions inside functions
// Writing functions that take in inputs, process, and return outputs.
// :party_blob:
// 2
// :orangutan:
// 1
// :face_with_monocle:
// 2
// :+1:
// 2

//checking for data types
//assignment and comparison operators
//google search js


// function startsAndEndsWithVowel(x) {
//
//     var endChar = x.indexOf(-1);
//     var firstChar = x.indexOf (0);
//
//     if (endChar === /[^aeiou]/gi || firstChar === /[^aeiou]/gi){
//         return true
//     }
//     else return false;
// }
//
//
// console.log(startsAndEndsWithVowel("ubuntu"));// true, "Exercise 49");
// console.log(startsAndEndsWithVowel("banana"));// false, "Exercise 49");
// console.log(startsAndEndsWithVowel("mango"));// false, "Exercise 49");
//
// //Test from March 1st
//
// /**
//  * Write your solutions here.
//  *
//  * **Note**: While normally it is good practice to wrap your javascript in an
//  * immediately invoked function expression (iife), you should _not_ do that
//  * here. If you do, the automated tests will not be able to see your functions.
//  */
//
// Question 1:
function isANumber(num){
    if (typeof (num) === 'number'){
        return true
    }else{
        return false
    }
}

//parseFloat(!NaN)
//
// // Question 2:
// function increment(num){
//     if (isANumber(num)){
//         return num + 1
//     }else{
//         return false
//     }
// }
//
// // Question 3:
// function decrement(num){
//     if (isANumber(num)){
//         return num - 1
//     }else{
//         return false
//     }
// }
//
// // Question 4: Not Correct
// function getHighestNumber(x, y, z){
//     var sorted = [...x,y,z].sort((a,b)=>b-a);
//     var firstChar = sorted.unshift()
//     if (isANumber(x) && isANumber(y) && isANumber(z)){
//         return firstChar;
//     }else{
//         return false
//     }
// }
//
// //math.max
//
// // Question 5:
// function parseNumber(num) {
//     return Number(num);
// }
//
// // Question 6: Not correct
//
// function add(x, y){
//     if (isANumber(x) && isANumber(y)) {
//         return x + y
//     }else{
//         return false
//     }
// }
//
// // Question 7:
// function multiply(x, y){
//     if (isANumber(x) && isANumber(y)) {
//         return x * y
//     }else{
//         return false
//     }
// }
//
// // Question 8:
// function square(x){
//     if (isANumber(x)) {
//         return x * x
//     }else{
//         return false
//     }
// }
//
// // Question 9:
// function sumOfSquares(x, y){
//     if (isANumber(x) && isANumber(y)) {
//         return ((x * x) + (y * y));
//     }else{
//         return false
//     }
// }

// Question 10:
// function isPalindrome(x){
//     var reverseX = x.reverse();
//     if (isANumber(x)) {
//         return false;
//     }else if (x === reverseX){
//         return true;
//     }
// }


function isPalindrome(input){
         if (isANumber(input)) {
            return false;
         }else if(input.toLowerCase() === input.split("").reverse().join("").toLowerCase()){
         return true;
         }}

console.log(isPalindrome("145"));;

//            Bob becomes bob        becomes array/ reverse/ make string/ lowercase

"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * lowerCase()
 * subtract()
 * multiplyBy2()
 * getLowestNumber()
 * isEvenlyDivisible()
 * inBetween()
 * replace()
 * addStringLengths()
 * convertHourToSec()
 * calculateChange()
 */

// Define a function named lowerCase that takes in an input and returns that input as a string in all lower case letters. Returns false if the input passed is not a string.
//
// lowerCase('CODEUP')                 // codeup
// lowerCase('George WashingTon')      // george washington
// lowerCase(0)                        // false
// lowerCase(true)                     // false
// lowerCase('BoBby')                  // bobby
// lowerCase(null)                     // false
// lowerCase([1,2,3])                  // false
// lowerCase({fName: 'Bruce', lName: 'Wayne'})    // false

//question 1
// function isANumber(input){
//     return typeof (input) === 'number';
// }

function lowerCase (input){
    if(isNaN(input) && typeof input === "string"){
        return input.toLowerCase()
    }else{
        return false;
    }
}

// Write a function named subtract that takes in two inputs. If both inputs provided are numeric or numeric strings, subtract will return the difference when the second input is subtracted from the first input. If one or both inputs is not numeric or numeric strings, subtract should return false.
//
// subtract(10, 2)                     // 8
// subtract(0, 0)                      // 0
// subtract(-4, 1)                     // -5
// subtract("10", 2)                   // 8
// subtract(5, true)                   // false
// subtract(true, false)               // false
// subtract("Monday", "Tuesday")       // false
// subtract()                          // false

//question 2

function subtract (inputA, inputB){
    if(isNaN(inputA) || typeof inputA === "boolean" || isNaN(inputB) || typeof inputB === "boolean"){
        return false
    }else{
        return inputA - inputB;
    }
}

// Define a function named multiplyBy2 that takes in an input and multiplies it by 2 if the input is numeric. If the input is Not A Number, then return false.
//
// multiplyBy2(2))                     // 4
// multiplyBy2("4"))                   // 8
// multiplyBy2("-5.5"))                // -11.0
// multiplyBy2(5.5))                   // 11
// multiplyBy2(null))                  // false
// multiplyBy2(true))                  // false
// multiplyBy2(false))                 // false

//question 3

function multiplyBy2 (input){
    if(isNaN(input) || typeof input === "boolean" ||  input === null){
        return false
    }else{
        return input * 2;
    }
}

// Write a function named getLowestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the lowest number. If any of the 3 inputs is missing or non-numeric, then return false.
//
// getLowestNumber(1, 3, 2)            // 1
// getLowestNumber("0", 1, 2)          // 0
// getLowestNumber(9, 3, -20)          // -20
// getLowestNumber(2, 2, 2)            // 2
// getLowestNumber(2, 5, 5)            // 2
// getLowestNumber(1, 2, 'x')          // false
// getLowestNumber("a", "b")           // false
// getLowestNumber()                   // false

//question 4

function getLowestNumber (a, b, c){
    if(isNaN(a) || typeof a === "boolean" || a === null || isNaN(b) || typeof b === "boolean" || b === null || isNaN(c) || typeof c === "boolean" || c === null){
        return false
    }else{
        return Math.min(a, b, c);
    }
}



// Define a function named isEvenlyDivisible that takes in two inputs: a numeric value and divisor. If the numeric value can be evenly divided by the divisor, then return true. Otherwise, return false.
//
// isEvenlyDivisible(100, 2)           // true
// isEvenlyDivisible("100", 3)         // false
// isEvenlyDivisible(150, 3)           // true
// isEvenlyDivisible(15.5, 5)          // false
// isEvenlyDivisible(5, 5)             // true
// isEvenlyDivisible("70", "7")        // true
// isEvenlyDivisible(null, 7)          // false
// isEvenlyDivisible(3, "three")       // false
// isEvenlyDivisible()                 // false

//question 5

function isEvenlyDivisible(a, b) {
    if (a === null || b === null){
        return false
    }else {
        return (a % b === 0);
    }}

// Define a function named inBetween that takes in three numeric inputs: a value, a low, and high. If the first numeric value is in-between the ranges of the low and high values, then return true. Otherwise, return false.
//
// inBetween(10, 0, 12)                // true
// inBetween(10, -20, 20)              // true
// inBetween(0, 1, 5)                  // false
// inBetween(4, 4, 10)                 // false
// inBetween("four", 0, 10)            // false
// inBetween("10", 0, 25)              // false
// inBetween(true, 0, 5)               // false
// inBetween(null, 0, 10)              // false
// inBetween(5.5, -3, 6.0)             // true

//question 6

function inBetween (a, b, c){
    if(isNaN(a) || typeof a === "string" || typeof a === "boolean" || a === null || isNaN(b) || typeof b === "boolean" || b === null || isNaN(c) || typeof c === "boolean" || c === null){
        return false;
    }else if (a <= b || a >= c ) {
        return false;
    }else{
        return true;
    }
}

// Write a function named replace that takes in three inputs. The first input is a string, the second input is the string that is to be replaced, the third is the string that you are replacing the second input with. Only replace the first occurrence of the matched string. Return the string with the newly replaced values. If the first input is not a string, return false.
//
// replace("codedown", "down", "up")   // codeup
// replace("linux", "linux", "unix")   // unix
// replace("aaa", "a", "b")            // baa
// replace("abcde", "e", "a")          // abcda
// replace(12345, "5", "6")            // false
// replace("1011", 0, "1")             // 1111
// replace(null, null, null)           // false
// replace()                           // false

//question 7

function replace (a, b, c){

    if(!isNaN(a) || typeof a === "boolean" || typeof a === "undefined" || a === null || !isNaN(b) || typeof b === "undefined" || typeof b === "boolean" || b === null || !isNaN(c) || typeof c === "undefined" || typeof c === "boolean" || c === null){
        return false;
    }else{
        return a.replace(b, c);
    }
}

// Write a function named addStringLengths that takes in two inputs. If both inputs provided are strings, addStringLengths returns the sum after adding the length (number of characters) of both strings. If either or both inputs are not strings, return false.
//
// addStringLengths(1, 2)              // false
// addStringLengths("code", "up")      // 6
// addStringLengths("1 2 3", "4 5 6")  // 10
// addStringLengths("ranking", 1)      // false
// addStringLengths(null, null)        // false
// addStringLengths(true, false)       // false
// addStringLengths(["code", "up"], "rocks!")  // false
// addStringLengths("", ""));          // 0

//question 8

function addStringLengths(a, b) {
    if (typeof a === "string" && typeof b === "string"){
        return a.length + b.length
    }else {
        return (a % b === 0);
    }}

// Define a function named convertHourToSec that takes in one input Hours. Return the conversation of the number of hours into total seconds. If the input is not numeric or a numeric string, convertHourToSec, should return false.
//
// convertHourToSec(0)                 // 0
// convertHourToSec(1)                 // 3600
// convertHourToSec(1.5)               // 5400
// convertHourToSec(true)              // false
// convertHourToSec(-1)                // false
// convertHourToSec(null)              // false
// convertHourToSec("2")               // 7200

//question 9

function convertHourToSec (input){
    if(isNaN(input) || typeof input === "boolean" ||  input === null || input < 0){
        return false
    }else{
        return input * 3600;
    }
}

// Write a function named calculateChange that takes in two inputs, totalPaid and totalCost. If both inputs are numeric or numeric strings, calculateChange should return the change after subtracting the cost from the amount paid. The return should be in \$x.xx format as a string. If either or both inputs are not numeric or numeric strings, calculateChange should return false.
//
// calculateChange(7.50, 1.50)         // \$6.00
// calculateChange(10, 5)              // \$5.00
// calculateChange("100", 50)          // \$50.00
// calculateChange(10, true)           // false
// calculateChange([1, 2, 3], 10)      // false
// calculateChange("Codeup", 100)      // false
// calculateChange()                   // false

function calculateChange(totalPaid, totalCost) {
    if (isNaN(totalPaid) || typeof input === "boolean" ||  input === null && isNaN(input) || typeof input === "boolean" ||  input === null){
        return a.length + b.length
    }else {
        var newAmt = totalCost - totalPaid
        return newAmt.toFixed(2).toString();
    }}




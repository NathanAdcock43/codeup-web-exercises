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
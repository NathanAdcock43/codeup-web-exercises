"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)

// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'cyan'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)]
//
// console.log(randomColor);
//
// if (randomColor === "blue"){
//     console.log("blue is the color of the sky");
// } else if(randomColor === "red"){
//     console.log("Strawberries are red");
// } else if(randomColor === "cyan"){
//     console.log("I don't know anything about cyan");
// } else {
//     console.log("Are you sure you don't want to pick a different color?");
// }

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */


// switch (randomColor) {
//     case "blue":
//         console.log("blue is the color of the sky");
//         break;
//     case "red":
//         console.log("Strawberries are red");
//         break;
//     case "cyan" :
//         console.log("I don't know anything about cyan");
//         break;
//     default:
//         console.log("Are you sure you don't want to pick a different color?");
//
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var choosenColor = prompt("Choose a color, any color?")
//
// function analyzeColor (colorToCheck){
//     if (colorToCheck === "blue"){
//         return "blue is the color of the sky";
//     } else if(colorToCheck === "red") {
//         return "Strawberries are red";
//     } else if(colorToCheck === "cyan"){
//        return "I don't know anything about cyan";
//     } else {
//         return "Are you sure you don't want to pick a different color?";
//     }}
//
// alert(analyzeColor(choosenColor))


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// var numberList= [0,1,2,3,4,5];
// var luckyNumber= numberList[Math.floor(Math.random() * numberList.length)];
// console.log(luckyNumber);
// var amtSpent = Number(prompt("What was your total cost of goods?"));
//
//     function percentSaved (totalAmt){
//         if (luckyNumber === 0){
//         alert("Tough luck you didn't save anything today");
//         return 0;
//     }
//         else if (luckyNumber === 1) {
//         alert("You saved 10%");
//         return totalAmt * .10;
//     }
//         else if (luckyNumber === 2){
//         alert("You saved 25%");
//         return totalAmt * .25;
//     }
//         else if (luckyNumber === 3){
//         alert("You saved 35%");
//         return totalAmt * .35;
//     }
//         else if (luckyNumber === 4){
//         alert("You saved 50%");
//         return totalAmt * .50;
//
//     }
//         else                       {
//         alert("WOW you are lucky! You saved 100%");
//         return totalAmt * 1;
//     }
// }
// var discountPercent = percentSaved(amtSpent)
// var howMuch = amtSpent-(discountPercent)
//
// alert("Did you know you spent $" + howMuch.toFixed(2) + " dollars and saved $" + discountPercent.toFixed(2) + " dollars on todays purchases")


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */



// function choose (){
//     var playGame = confirm("Hello, Would you like to pick a number?");
//     if (playGame === true){
//         var pickNum = Number(prompt("Please, Choose a number between 1 and 100"));
//         console.log(pickNum);
//         if(!Number(pickNum)) {
//             return alert("This is not a number?");
//         }
//         var evenodd = ((pickNum%2) === 0 ) ? "Your number is even" : "Your number is odd";
//         var plus = (pickNum+100);
//         var posNeg = (pickNum>=0) ? "Your number is positive" : "Your number is odd" ;
//         alert(evenodd);
//         alert(plus + " Is your number plus 100");
//         alert(posNeg);
//     }
//     else {
//         return alert("See you later!");
//     }
// }
//
// choose()


var numberList= [.1,.2,.35,.50,1,0];
var luckyNumber= numberList[Math.floor(Math.random() * numberList.length)];
console.log(luckyNumber);
var amtSpent = Number(prompt("What was your total cost of goods?"));

alert("you saved " + (luckyNumber*100) + "% or $" + (luckyNumber*amtSpent) + " your total is now $" + (amtSpent- (luckyNumber*amtSpent)))


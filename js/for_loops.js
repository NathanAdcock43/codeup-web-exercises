// Loops Exercises



//Exercise 1

// Create a function named showMultiplicationTable that accepts a number and console.logs
// the multiplication table for that number (just multiply by the numbers 1 through 10)

// function showMultiplicationTable(x){
//     for (var i = 1; i <= 10 ; i++) {
//        console.log(x + " X " + i + " = " + (i * x));
//     }
// }

// Trying to log the odd numbers but problem with "i % 2"
// for (var i = 1 ; i <= 5 ; i++){
//     if (i%2 = true){
//         console.log(i);
//     } else {
//
//     }
// }
// showMultiplicationTable(10);


// function MultiplicationTableOneToTen (){
//     for (var j = 1; j <= 10; j++) {
//         showMultiplicationTable(j);
//     }
// }
//
//     MultiplicationTableOneToTen()

//Kennith and Sam's example
//
//Exercise 1:
// set 1
// set 2
// set 3
// set 4
//Exercise 1:
// set 1
// set 2
// set 3
// set 4
//
//  for (var exLoop = 1; exLoop <= 4; exLoop++){
//    console.log("Exercise " + exLoop + ":");
//
//      for (var setLoop = 1; setLoop <= 3; setLoop++){
//          console.log("Set " + setLoop);
//      }
//  }
//
// or alternatively
//
// function listSets(numberOfSets)(var exLoop = 1; exLoop <= numberOfSets; exLoop++){
//    console.log("Exercise " + exLoop + ":");
//
//      for (var setLoop = 1; setLoop <= 3; setLoop++){
//          console.log("Set " + setLoop);
//      }
//  }
//

//Exercise 2

// Use a for loop and the code from the previous lessons to generate 10 random numbers
// between 20 and 200 and output to the console whether each number is odd or even.
// var randomNumber = Math.floor((Math.random() * 3) + 1);
// for (var i = 0; i >=10 ; i++) {
//
// }


// function randomNumbers() {
//     for (var i = 1; i <= 10; i++) {
//         var randomMaker = Math.floor((Math.random() * (201 - 20) + 20));
//             if (randomMaker%2 == true){
//                 console.log(randomMaker + " is an odd Number")
//             }
//
//             else{
//                 console.log(randomMaker + " is even")
//             }
//     }
// }
//
// randomNumbers()

// Exercise 3
//
// Create a for loop that uses console.log to create the output shown below.

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
//
// function shapeLoop = (width, height); This was the example that Samuel gave to help explain
// in settings ungroup similar to see the output expanded
//
//     for (var i = 1; i <= 9; i++) {
//         var output = "";
//         for (var j = 1; j <= i ; j++) {
//             output = output + i.toString();
//
//         }
//         console.log (output);
//     }



//Exercise 4

// Create a for loop that uses console.log to create the output shown below.
//
//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5


// function BackFromHundred (){
//     for (var i = 100; i >= 5 ; i = i - 5) {
//        console.log(i);
//     }
// }
//
// BackFromHundred();

// function inside (){
//     for (var j = 1; j <= i; j++) {
//         outside(j);
//     }
// }
//
//     inside()



// for loop inside of for loop
//
// for(var i = 1; i <= 9; i++){
//     console.log(i + " outer Loop");
//     for(var j = 1; j <= 9; j++){
//         console.log("outer loop " + i + " inner Loop " + j );
// }}


// Code Before final refactor
//Code Up Cafe Restaurant example from class
//1 order some food [entrees] [do/while loop] <asking how many entrees>
//2 Back of the house- Preparation of food [while loop] <processing those entrees>
//3 how did we do? how many orders did we have? [for Loop]

// do {
//     var orderingFood = true;
//     var entrees = parseInt(prompt("How many codeuporders did you want?"));
//
//     if (entrees <= 0 || inNaN(entrees)) {
//         alert("Hey - you need to order at least one plate of food!");
//     } else {
//         orderingFood = false
//         alert("Alright, we'll get your " + entrees + "orders of curry going in our kitchen!");
//     }
// } while (entrees > 0)
// {
// //    Condition inside () and then do some stuff inside {}
//     alert("We still have some orders to get out!");
//     var orderUp = confirm("Did you get that plate up? Is this entree ready to serve?")
//     if (orderUp) {
//         entrees--;
//         alert("Yeah! Let's see if we have another ticket left!");
//     } else {
//         alert("Alright - let's see if we have another ticket left!");
//     }
// }
//
// alert("Phew,that was a lot of orders, but we got them out!");
//
// //for loop = set up the structure to Show Amt of entrees [manager in the office counting num of entrees]
// // Entrees = a num to use {subtract a entree fulfilled after each complete
//
// for (entrees; entrees > 0; entrees--) {
//     console.log(entrees);
//     alert("Entering ticket into spreadsheet- " + entrees + " left to enter into our spreadsheet!")
//

//Refactored version of the CodeUp Cafe
//
// function codeupCafe() {
//
//     var entrees = "";
//     var orderingFood = true;
//
//     do {
//
//         entrees = parseInt(prompt("How many codeuporders did you want?"));
//
//         if (entrees <= 0 || inNaN(entrees)) {
//             alert("Hey - you need to order at least one plate of food!");
//         } else {
//             orderingFood = false
//             alert("Alright, we'll get your " + entrees + "orders of curry going in our kitchen!");
//         }
//     } while (orderingFood)
//
//     var totalOrders = entrees;
//
//     while (entrees > 0){
// //    Condition inside () and then do some stuff inside {}
//         alert("We still have some orders to get out!");
//         var orderUp = confirm("Did you get that plate up? Is this entree ready to serve?")
//         if (orderUp) {
//             entrees--;
//             alert("Yeah! We've got " + entrees + "to go!");
//         } else {
//             alert("Alright - lets get moving we have " + entrees + "tickets left!");
//         }
//     }
//
//     alert("Phew,that was a lot of orders, but we got them out!");
//
// //for loop = set up the structure to Show Amt of entrees [manager in the office counting num of entrees]
// // Entrees = a num to use {subtract a entree fulfilled after each complete
//
//     for (totalOrders; totalOrders > 0; totalOrders--) {
//
//         alert("Entering ticket into spreadsheet- " + totalOrders + " left to enter into our spreadsheet!")
//     }
//     alert("Another great day, looking forward to seeing you tomorrow")
// }
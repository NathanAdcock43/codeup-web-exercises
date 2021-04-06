// Loops Exercises



//Exercise 1

// Create a function named showMultiplicationTable that accepts a number and console.logs
// the multiplication table for that number (just multiply by the numbers 1 through 10)

// function showMultiplicationTable(x){
//     for (var i = 1; i <= 10 ; i++) {
//         var i =
//        return (x + " X " + i + " = " + (i * x));
//     }
// }

// function showMultiplicationTable(x){
//     for (var i = 1; i <= 10 ; i++) {
//        var mult = (x + " X " + i + " = " + (i * x));
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

// function pipeFix(numbers){
//     var min = Math.min(...numbers);
//     var max = Math.max(...numbers);
//     var arr = []
//     for( var i = min; i <= max; i++)
//     arr.push(i)
//     return arr
// }



// Write a function named printRecipe that accepts a recipe object. A recipe object will have properties of title (a string), servings (a number), and ingredients (an array of strings). printRecipe will console.log each property in this format:
//     Example object:
//     var caldoRecipe = {name: "Caldo con Pollo", servings: 4, ingredients: ["whole chicken", "carrots", "cabbage", "potatoes", "jalapeno", "cilantro", "salt", "pepper", "cumin", "onion powder", "garlic powder"]}
// Expected look in console from running printRecipe(caldoRecipe):
// Caldo con Pollo
// Serves: 4
// Required ingredients: whole chicken, carrots, cabbage, potatoes, jalapeno, cilantro, salt, pepper, cumin, onion powder, garlic powder

// var recipe = {
//     title: "",
//     servings: "number",
//     ingredients: [""],
// }

// var caldoRecipe = {name: "Caldo con Pollo", servings: 4, ingredients: ["whole chicken", "carrots", "cabbage", "potatoes", "jalapeno", "cilantro", "salt", "pepper", "cumin", "onion powder", "garlic powder"]}
//
// function printRecipe(recipe){
//     for (var i in recipe){
//         console.log(recipe[i]);
//     }
// }
//
// printRecipe(caldoRecipe);




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
// Code Up Cafe Restaurant example from class
// 1 order some food [entrees] [do/while loop] <asking how many entrees>
// 2 Back of the house- Preparation of food [while loop] <processing those entrees>
// 3 how did we do? how many orders did we have? [for Loop]

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

// Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
// totalPets([{name: 'Fernando Mendoza', numPets: 1},{name: 'Douglas Hirsh', numPets: 8}, {name: 'Kenneth Howell', numPets: 3}]) //11
// var petsArray = [{
//     name: "Fernando Mendoza",
//     numPets: 1
// },{
//     name: "Douglas Hirsh",
//     numPets: 8
// },{
//     name: "Kenneth Howell",
//     numPets: 3
// }]
// our gameplan:
//     * write the function first
// * one parameter
// * deal with the array
// ** extract what we need (RV) AND we probably need a LOOP [FD]
// *** need a loop? that's what a for loop is FOR!
//     *** extraction: extract each individual numPets in this loop
// ** how about a BUCKET [a place to store our running sum]
// our function:


// function totalPets(petsArray){
//     var sum = 0;
//     for(var i = 0; i < petsArray.length; i++){
//         sum = sum + petsArray[i].numPets;
//         // console.log("var 'sum' is currently " + sum) //uncomment if you want to track the running total of sum
//     }
//     return sum;
// }
// var numberofPets = totalPets(petsArray);
// console.log("In all the total number of pets is " + numberofPets);
//
// function petDeduction(petsArray){
//     var total = 12;
//     for(var i = 0; i < petsArray.length; i++){
//         total = total - petsArray[i].numPets;
//     }
//     return total;
// }
//
// var petsLeft = petDeduction(petsArray);
//
// console.log("We sold a total of " + numberofPets + " and we have " + petsLeft + "pets left.");

// // more drills:
// // Write a function named countPosi that accepts an array of numbers and returns the number of positive numbers in the array.
// function countPosi (array){
//     var posi = 0;
//     array.forEach(function(arr){
//         if (arr > 0){
//             posi++;
//         }
//     });
//     console.log(posi);
// }
// countPosi([-2, 7, 4, -9, 1]) //3
// countPosi([3, 6, 9, -1]) //3
// countPosi([10]) //1
// // Write a function named printRecipe that accepts a recipe object. A recipe object will have properties of title (a string), servings (a number), and ingredients (an array of strings). printRecipe will console.log each property in this format:
// // Example object:
// //




// var caldoRecipe = {name: "Caldo con Pollo", servings: 4, ingredients: ["whole chicken", "carrots", "cabbage", "potatoes", "jalapeno", "cilantro", "salt", "pepper", "cumin", "onion powder", "garlic powder"]}
// // Expected look in console from running printRecipe(caldoRecipe):
// // Caldo con Pollo
// // Serves: 4
// // Required ingredients: whole chicken, carrots, cabbage, potatoes, jalapeno, cilantro, salt, pepper, cumin, onion powder, garlic powder
// //
// function printRecipe(recipe){
//     console.log(recipe.name);
//     console.log("Serves: " + recipe.servings);
//     console.log("Required ingredients: " + recipe.ingredients);
// }
// printRecipe(caldoRecipe);


// Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
function convertAddressToObject(string){
    var array = string.split(" ");
    var address = {};
    address.streetNumber = array[0];
    // var streetName =
    address.streetName = array[1] +" " + array[2];
    console.log(address);
}
// convertAddressToObject('8626 Sunny Oaks') // {streetNumber: '8646', streetName: 'Sunny Oaks'}
// convertAddressToObject('5408 Villa Nueva') // {streetNumber: '5408', streetName: 'Villa Nueva'}



// function warnTheSheep(queue) {
//     var n = 0;
//     while (n < queue.length){
//         if (queue.length[-1] === "wolf"){console.log("Pls go away and stop eating my sheep")
//         }else {console.log("Oi! Sheep number 1! You are about to be eaten by a wolf!") break;
//         }
//     }
// }
//
//
// function warnTheSheep(queue) {
//     const position = queue.reverse().indexOf('wolf');
//     return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
// }

// function warnTheSheep(queue) {
//     var position = queue.length - queue.indexOf('wolf') - 1;
//     if (position === 0){
//         return "Pls go away and stop eating my sheep";
//     } else {
//         return "Oi! Sheep number"+ ${position} +"! You are about to be eaten by a wolf!";
//     }
// }


// "use strict";
// console.log("Welcome to intro to arrays");
// /* ***************************************************************
// * 							INTRO TO ARRAYS
// *************************************************************** */
//
//
// // An array is a data structure that holds an ordered list of items
// // Each slot in a JavaScript array can hold any type of data
//
//
//
// /* ***************************************************************
// * 					DECLARING AN ARRAY
// *************************************************************** */
// // We declare an array with square brackets ==> []
//
// // an empty array ==> []
//
// // An array with one element ==> [1]
//
// // An array with 5 elements ==> [1, 2, 3, 4, 5]
//
// // An array with 3 elements all of different types ==> 	["one", 42, [8, 9, 10]]
// // Notice that the array above does *not* have 5 elements, rather the last element is itself an array with 3 elements in it
//
// //TODO TOGETHER: Declare an empty array set equal to the variable `pies` - then console.log `pies`
//
//
//
// //TODO TOGETHER: Set the following array equal to `pies` - then console.log `pies`
// // ["apple", "cherry", "key lime", "huckleberry"];
//
// var pies = ["apple", "cherry", "key lime", "huckleberry"];
//
// // TODO TOGETHER: Set the following array equal to variable called `shapes`. Console.log the variable
// //  ['square', 'rectangle', 'circle', 'triangle'];
//
// var shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
// // TODO: Set the following array equal to a variable called `instructors` - then console.log the variable
// //  ["douglas", "kenneth", "samuel", "justin", "fernando"]
//
// var instructors = ["douglas", "kenneth", "samuel", "justin", "fernando"];
//
// // TODO: Set the following array equal to a variable called `daysOfTheWeek` - then console.log the variable
// //  ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
//
// var daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
//
// // TODO: create an array of favorite foods and set to a variable called `favoriteFoods` - then console.log the variable
//
// var favoriteFoods = ['Bread', 'Milk', 'Bacon', 'Eggs'];
// /* ***************************************************************
// * 					COUNTING AN ARRAY
// *************************************************************** */
//
// //We can also count the length of an array by using the `.length` property
//
// // TODO TOGETHER: Log the length of shapes array
//
// // console.log("The length of shapes is: " + );
//
//
// // TODO: console.log the length of the instructors array
//
// // console.log("The length of instructors array is: " + );
//
//
// // TODO: console.log the length of the daysOfTheWeek array
//
// // console.log("The length of days of week array is: " + );
//
//
// // TODO: console.log the length of the favoriteFoods array
//
// // console.log("The length of favorite foods array is: " + );
//
//
// /* ***************************************************************
// * 				ACCESSING ARRAY ELEMENTS
// *************************************************************** */
// // ** NOTE ** Arrays are zero-indexed, which means the first slot in an array is 0.
//
//
// // TODO TOGETHER: What do we expect the following to output?
//
// // 	console.log(shapes[0]); //
// // 	console.log(shapes[1]); //
// // 	console.log(shapes[2]); //
// // 	console.log(shapes[3]); //
// // 	console.log(shapes[4]); //
//
//
//
// // TODO: console.log each element of the instructors array
//
//
//
// // TODO: console.log the first three elements of the daysOfTheWeek array
//
//
//
// // TODO: console.log the first three elements of the favoriteFoods array
//
//
//
// // TODO: create a function called `returnLastElement` that accepts an array and returns the last element of that array
//
// // we know we have to get the length of the array - 1
// // array.length - 1 <== represents the last item in an array
//
// //1. create function named returnLastElement
// //2. this function accepts an array
// //3. get the last item in the array by using array.length - 1
// //4. return the last item
//
//
// // console.log(returnLastElement(instructors)); //fernando
// // console.log(returnLastElement(daysOfTheWeek)); //sunday
//
//
//
//
//
// /* ***************************************************************
// * 					ITERATING ARRAYS
// *************************************************************** */
// //  TODO TOGETHER: Log each element of the shapes array
// // TODO TOGETHER: Using a for loop, iterate through the shapes array and log each shape
//
//
//
//
// // TODO TOGETHER: Alert "that's my favorite shape!" when your favorite shape is iterated over in the loop.
//
//     for(var i = 0; i < shapes.length; i++){
//         console.log("Looping through the shapes array. We are at " + shapes[i] + " at position " + i)
//         if(shapes[i] === "rectangle"){
//             alert(shapes[i] + " is my favorite shape!");
//         }
//     }
//
// // TODO: What happens if we change var i = 1? or var i = 2; the count starts at a different position
// // TODO: What are benefits of using loops to iterate?
// // TODO: How does the loop know when to stop iterating?
//
//
//
//
// // TODO: Using a for loop, iterate through the instructors array and console.log each instructor
//
// for ( var j = 0; j < instructors.length; j++){
//     console.log( instructors[j] );
// }
//
// // TODO: Using a for loop, iterate through the daysOfTheWeek array and console.log each day of the week
//
// for (var i = 0; i < instructors.length; i++){
//     console.log(daysOfTheWeek[i])
// }
//
// // TODO: Using a for loop, iterate through the favoriteFoods array and console.log each favorite food
//
// for (var i = 0; i < instructors.length; i++) {
//     console.log(favoriteFoods[i])
// }
//
// // TODO: Refactoring the instructor loop, alert "hey, I know <INSTRUCTOR NAME HERE>" if you have had class with that instructor. If you have not had class with that instructor, alert "I haven't had class with <INSTRUCTOR NAME HERE> yet!"
//
// for ( var j = 0; j < instructors.length; j++){
//     if(j !== 4){
//         console.log("I know " + instructors[j]);
//         } else if (j === 4){
//         console.log("I have never met " + instructors[j]);
//     }
// }
//


/* ***************************************************************
* 						FOR EACH ARRAY (higher order)
*************************************************************** */

// TODO TOGETHER: Using a for each loop, console.log each shape from the shapes array

shapes.forEach(function(shape) {
    console.log('Here is a lovely shape: ' + shape + '.');
});


// TODO TOGETHER: Using a for each loop, console.log each element from the following array: var pies = ["apple", "cherry", "key lime", "huckleberry"];

pies.forEach(function(pies) {
    console.log(pies);
});

// TODO: Using a for each loop, iterate through the instructors array and console.log each instructor

instructors.forEach(function(instructor) {
    console.log(instructor);
});

// TODO: Using a for each loop, iterate through the daysOfTheWeek array and console.log each day of the week

daysOfTheWeek.forEach(function(daysOfTheWeek) {
    console.log(daysOfTheWeek);
});

// TODO: Using a for each loop, iterate through the favoriteFoods array and console.log each favorite food

favoriteFoods.forEach(function (favoriteFoods) {
    console.log(favoriteFoods);
});


// 7. Create an array named colors that contains five different names of colors as strings.
// colors = ["red", "blue", "yellow", "violet", "green"];

// *************  SUGGESTION FROM LIZ:  *************
// Don't forget the var keyword whenever you create a new variable, as in: var colors = [];
// *************  ********************  *************

var colors = ["red", "blue", "yellow", "violet", "green"];

// 8. Access the first color in the array and print it to the console using console.log()
console.log(colors[0])


// 9. Now do the same with the third color in the list. (Remember that array indexes start at 0, not at 1!)
console.log(colors[2])



// 10. Write one line of code that changes the value of the last color in the list to "ultraviolet" (overwriting the previous value).
colors[4] = "ultraviolet";
console.log(colors)



// 11. Create a new variable called fourthColor and set it equal to the fourth color in the list.
fourthColor = "violet";
colors[3] = fourthColor;
console.log(colors);

// *************  SUGGESTION FROM LIZ:  *************
// Again, don't' forget the var keyword when creating new variables!
// Also, here what I meant was:  var fourthColor = colors[3];
// where the new variable is initialized with the value taken from colors[3]
//    -- small difference in interpretation! no prob :)
// *************  ********************  *************

// 12. Add another color to the end of the list.
colors[5] = ("pink");
console.log(colors);

// *************  SUGGESTION FROM LIZ:  *************
// Better to use the push() method so that way your new color will ALWAYS go at the end of list.
// The way you did it here works fine, but isn't as extensible/reusable because the index is hard-coded.
// *************  ********************  *************

// 13. Add another color to the beginning of the list.
colors.unshift("white");
console.log(colors);



// 14. Print the length of the array to the console with console.log()
console.log(colors.length)



// 15. Remove the last color from the end of list, and then print the length of the array to the console one more time.
colors.pop();
console.log(colors.length)



// 16. Write a for loop to iterate through every color in the array and print each color's value to the console.
for (var i = 0; i < colors.length; i++)
{
    console.log(colors[i]);
}



// 17. Copying from that loop you just wrote, modify it to print every color's value and every color's index in this format: 3, purple or 0, blue etc.
for (var i = 0; i < colors.length; i++)
{
    console.log(i + ": " + colors[i]);
}

// *************  SUGGESTION FROM LIZ:  *************
// Code looks good, but just be careful about following the formatting in the instructions
// -- the specified format was:   "3, purple"   or    "0, blue"   etc.
// *************  ********************  *************


// 18. Create a variable named lastColor that will always point to the last element of the colors array, no matter how many colors are in the list. (Hint: make use of the array's length property for this!)
var len = colors.length - 1
var lastColor = colors[len]
console.log(lastColor)

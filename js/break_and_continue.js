// Number to skip is: 27
//
// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// Here is an odd number: 31
// Here is an odd number: 33
// Here is an odd number: 35
// Here is an odd number: 37
// Here is an odd number: 39
// Here is an odd number: 41
// Here is an odd number: 43
// Here is an odd number: 45
// Here is an odd number: 47
// Here is an odd number: 49

// BREAK AND CONTINUE: Ways to manipulate the behavior of your loop [stop vs skip]


// console.log("Number to Skip is: 27");
// for (var i = 1; i <= 50; i++) {
//     if (i % 2 && i !== 27){
//         console.log(("Here is an odd number: " + i));
//     } else if (i === 27) {
//         console.log(("Yikes! Skipping number: " + i));
//     } else {
//     }
// }

// 2) Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

// var pickNum = 2
//
// while (pickNum >= 50 || pickNum <= 0  || pickNum % 2 === 0){
//     pickNum = Number(prompt("Pick an odd number between 1 and 50"));
// }
// console.log(pickNum);


// 3) Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.


// for (var i = 1; i <= 50; i = i + 2){
//     if (i === pickNum){
//         console.log("Yikes! Skipping number: " + i);
//         continue
//     }
//     console.log("Here is an odd number: " + i)
// }





// Create a while loop that uses console.log() to create the output shown below.
//
//
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

// var i = 2
//
// while(i <= 64000){
//     console.log(i);
//     i = i * 2;
// }

// Do While Loop
// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number
// between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should
// generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while
// loop to log to the console the amount of cones sold to each person. This is a way get the random numbers for this exercise.
//
//
// This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
// The output should be similar to the following:
//
//     5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones

// var allCones = Math.floor(Math.random() * 50) + 50;
// function conesLeft (x){
//     return allCones - x;
// }
//
// do {
//     var sale = conesLeft(Math.floor(Math.random() * 5) + 1)
//     console.log('We sold ' + sale + ' cones. Still have ' + conesLeft);
// } while (conesLeft > 0);

//This is the one that works

// var allCones = Math.floor(Math.random() * 50) + 50;
// console.log("You have " + allCones + " to sell today")
// do {
//     var sales = Math.floor(Math.random() * 5) + 1;
//     if (sales <= allCones){
//         allCones = allCones - sales;
//         console.log("You sold " + sales + " cones, and have " + allCones);
//     }else {
//         console.log("Sorry I don't have " + sales + " to sell, I have " + allCones)
//     }
// } while (allCones >= sales);
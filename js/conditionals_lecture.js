//conditionals lecture

//****** If statement Using automatic true
// if(true){
//     console.log("You should see this, I am inside of the if statement.");
// }

//****** If statement Using triple equals
// var myAge = 22;
//
// var requiredAge = 13;
//
// var myName = "Nathan"
//
// if(myName==="Nathan"){
//     console.log("Hey my name is Nathan too.");
// }

//***** If statement using comparison operators
// var myAge = 22;
//
// var requiredAge = 13;
//
// var myName = "Nathan"
//
// if(myAge >= requiredAge){
//     console.log(myName + " can make an account");
// }

//****** Using if/else statement



//**** this one does work; thanks to Shan

// var myAge = 36;
//
// var requiredAge = 13;
//
// var myName = "Nathan"
//
// var userAge = Number(prompt("how old are you?"));
//
// if(userAge >= requiredAge && userAge !== myAge){
//     console.log("You can make an account!");
//  }
// else if (userAge === myAge) {
//    console.log( myName + " you know you are old enough! Stop wasting our time.");
//  }
// else {
//     console.log ("Sorry you are not old enough to create an account.");
// }


//***** this one works

// var favoriteColor = "Blue";
//
//
// if(favoriteColor === "red"){
//     console.log("Red is not a color I like");
//  }
//  else if (favoriteColor === "Blue") {
//    console.log("Blue is my favorite color")
//  }
//  else {
//     console.log ("We don't have that color")
// }


//*** Ternary Operator (short hand if / else) Example

//****(condition)**************(if)**********************(then)********
// (myAge >= requiredAge) ? console.log("you can") : console.log("you can't");
// ******* conditional chains if you want to add more items together

//******* Using Switch Statements ******* "Default" works just like else

// var favoriteColor = "Grey"
//
// switch (favoriteColor) {
//     case "purple":
//         console.log(("Fav color is purple too"));
//         break;
//     case "blue":
//         console.log(("Fav color is blue too"));
//         break;
//     case "Green" :
//         console.log(("Fav color is Green too"));
//         break;
//     case "Cyan":
//         console.log(("Fav color is Cyan too"));
//         break;
//     case "Red":
//         console.log(("Fav color is Red too"));
//         break;
//     default:
//         console.log(("Sorry " + favoriteColor + " is not my fav"));
//
// }

//**************
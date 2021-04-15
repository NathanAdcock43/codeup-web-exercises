js/es6-lec-pt1.js

"use strict";

/*****************************
 *    VAR VS. LET VS. CONST
 *****************************/

function checkWeather(isRaining) {
    if (isRaining) {
        var umbrella = "Get an umbrella"
    } else {
        var sunglasses = "Grab your glasses!"
        console.log(umbrella);
    }

}

//checkWeather(false); //what happens?



function checkWeatherTwo(isRaining) {
    if (isRaining) {
        const umbrella = "Get an umbrella"
    } else {
        const sunglasses = "Grab your glasses!"
        console.log(umbrella);
    }

}

//checkWeatherTwo(false) //What happens?


/*==============================================*/


// let instructor = 'Douglas';
// instructor = 'Kenneth';
// console.log(instructor); //Kenneth




// const instructor = 'Douglas';
// console.log(instructor); // Douglas
// instructor = 'Kenneth';
// console.log(instructor); // Uncaught TypeError: Assignment to constant variable.








/*==============================================*/




/*
* let and const (block scope vs. function scope)
*/

{
    var a = 10;
}
{
    let b = 20;
}

const c = 30;

// console.log(a); // 10
// console.log(b); // Uncaught ReferenceError: b is not defined
// console.log(c += 3); //Uncaught TypeError: Assignment to constant variable.





/*==============================================*/




// if (false) {
//    var x = 2; //Undefined
// }

// if (false) {
//     let x = 2; //Uncaught ReferenceError: x is not defined
// }

// console.log(x);




/*****************************
 *    Template Strings
 *****************************/

//oldway
let firstName = "Douglas";
let lastName = "Hirsh";
let greeting = "Hello my name is " + firstName + ' ' + lastName + '.';

// console.log(greeting);

//TODO: Refactor code from above, using template strings.


// console.log(newGreeting);









/*==============================================*/

//TODO: Create an HTML string that contains the following items in an unordered list

let items = ['apple', 'grape', 'orange'];


//old way
let itemsHtml = "";
itemsHtml += "<ul>";
itemsHtml += "<li>" + items[0]+ "</li>"
itemsHtml += "<li>" + items[1]+ "</li>"
itemsHtml += "<li>" + items[2]+ "</li>"
itemsHtml += "</ul>";

// console.log(itemsHtml);


//new way

let newItemsHtml =


// console.log(newItemsHtml);


/*==============================================*/

//TODO: Create a paragraph from the following program object

let program = {
    name: "Codeup",
    location: "Dallas and San Antonio",
    length: "22 weeks",
    technology: "HTML, CSS, JS, Java"
}


// console.log(programLetter);






/*****************************
 *       For Of Loops
 *****************************/


// const arr = ["one", "two", "three"];
// for (let ele of arr) {
//     console.log(ele);
// }





/*==============================================*/
//TODO: Using for of loops, log each day

const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]



/*==============================================*/

//TODO: Using for of loops, log each instructors name

const instructors = ["Douglas", "Kenneth", "Justin", "Casey", "David"]




/* ****************************
 *       Arrow Functions
 *****************************/
//TODO TOGETHER: Rewrite the following function using arrow function syntax


function sayHello(name){
    return `Hello ${name}`;
}




// console.log(sayHelloAgain("Douglas")); //Hello Douglas
// console.log(sayHelloAgain("Justin")); //Hello Justin
// console.log(sayHelloAgain("Kenneth")); //Hello Kenneth



/*==============================================*/
//TODO TOGETHER: Rewrite the following function using arrow function syntax

// function sum(a,b){
// 	return a + b;
// }


let sum = (a, b) => a + b

console.log(sum(5, 3)); //8
console.log(sum(5, 20)); //25
console.log(sum(1, 9)); //10


/*==============================================*/
//TODO: Rewrite the following function using arrow function syntax

//Function declaration
function addOne(arg1) {
    return arg1 + 1;
}


//function expression
let addOneA = function(arg1){
    return arg1 + 1;
}


//refactor. Remove function keyword and add =>
let addOneB = (arg1) => {
    return arg1 + 1;
}

// remove curly braces (if only one statement)
let addOneC = (arg1) => arg1 + 1;

//remove parens if only 1 input
const addOneD = arg1 => arg1 + 1;






// console.log(addOne(1));
// console.log(addOneA(2));
// console.log(addOneB(2));
// console.log(addOneC(3));
// console.log(addOneD(5));






/* ****************************
 *       Default Function
 *       Parameter Values
 *****************************/
//TODO Together: Refactor the following using ES6

// old way
function sayHello(name) {
	if (typeof name === 'undefined') {
		name = 'World';
	}

	return 'Hello, ' + name + '!';
}

let sayHello2 = (name = "World") => `Hello, ${name}`


console.log(sayHello2());; // "Hello, World!"
console.log(sayHello2('codeup'));; // "Hello, codeup!"



/*==============================================*/

// TODO: Refactor the following function using arrow syntax, default function parameter values, and template strings.

function helloCohort(greeting, cohort){
    if(typeof greeting === "undefined"){
        greeting = "Good Morning";
    }
    if(typeof cohort === "undefined"){
        cohort = "Marco";
    }

    return greeting + " " + cohort;
}




// 212  js/es6-lec-pt2-objects.js
// @@ -0,0 +1,212 @@
    /* **************************************************************
    *
    *       Object Property Variable Assignment Shorthand
    *
    *****************************************************************/
//TODO TOGETHER: Create a newDog object using shorthand syntax

// let breed = "Mutt";
// let age = 8;
// let dogName = "Kewpie";
// let isCute = true;

//old way
// let oldDog = {
// 	breed: breed,
// 	age: age,
// 	dogName: dogName,
// 	isCute: isCute
// }
//
// console.log(oldDog);

// //new way

// let newDog = {
//     breed,
//     age,
//     dogName,
//     isCute,
// }
//
// console.log(newDog);


    /*****************************************************************
     *                       Object Destructuring
     *          Shorthand for creating variables from object properties
     *          Based on the name of the key
     *****************************************************************/

var personA = {
        name: 'codeup',
        age: 4
    };

// // old way
// var name = personA.name;
// var age = personA.age;
//
//
// console.log(name); // 'codeup'
// console.log(age); // 4


//TODO TOGETHER: REFACTOR the above approach using ES6


const {name, age} = personA;


console.log(name);
console.log(age);


/*==============================================*/


const pals = {
    dog: "Spike",
    cat: "Tom",
    mouse: "Jerry"
};

//old way
// let myDog = pals.dog;
// let myCat = pals.cat;
// let myMouse = pals.mouse;



// console.log(myDog); //Spike
// console.log(myCat); //Tom
// console.log(myMouse); //Jerry


//TODO TOGETHER: REFACTOR the above approach using ES6
//new way

let {dog, cat, mouse} = pets

console.log(dog);
console.log(cat);
console.log(mouse);


/*==============================================*/

//TODO: Use object destructuring with the following object

const theFlash = {
    name: "Barry Allen",
    alias: "The Flash",
    occupation: "Forensic Scientist",
    powers: "Super Speed"
}

let {alias, powers} = theFlash

console.log(alias);
console.log(powers);


/*==============================================*/
//Destructuring with Arrays

let cats = ["CJ", "Claude", "Max"];

//oldway
// let cat1 = cats[0];
// let cat2 = cats[1];
// let cat3 = cats[2];


//new way

let [cat1, cat2, cat3] = cats

console.log(cat1);
console.log(cat2);
console.log(cat3);


/*==============================================*/

const alphabet = ['A', 'B', 'C', 'D', 'E'];

//old way
// const a = alphabet[0];
// const b = alphabet[1];
// const c = alphabet[2];


//TODO TOGETHER: new way

// let [a, b, c] =  alphabet


// console.log(a);
// console.log(b);
// console.log(c);



//TODO TOGETHER: To skip an element...

// let [a, , c] =  alphabet

// console.log(a);
// // console.log(b);
// console.log(c);
// console.log(d);


//TODO TOGETHER: To get all elements...Spread operator *BONUS

// let [a, b, c, ...rest] = alphabet

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(rest);


/*==============================================*/
// Using with functions


//old way
// function tellMeAbout(person) {
// 	var name = person.name;
// 	var age = person.age;
// 	console.log(name); // 'codeup'
// 	console.log(age); // 4
// }


//new way


//
// const person = {
// 	name: 'Douglas',
// 	age: 38
// };
//
// tellMeAbout(person);


/*==============================================*/



// let shape1 = {
// 	height: 10,
// 	width: 10
// }

// let shape2 = {
// 	height: 5,
// 	width: 5
// }

// console.log(getArea(shape1)); //100
// console.log(getArea(shape2)); //25


//TODO: Refactor the getArea function from above using arrow syntax
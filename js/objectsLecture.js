
//What's going on with these objects?
//Well: an OBJECT is a grouping of data + functionality
//Our data. . we call properties [in a 'key:value' pair]
//Our functions . . we call methods.

//Let's set up an object and .log it to see what we're looking at:

// var myCounty = {
//     name: "Bexar", //name: key ; value: "Bexar"
//     countySeat: "San Antonio",
//     currentPop: 2003554
// }

// var myDog = {
//     name: "Fenix",
//     age: 11,
//     breed: "Pembroke Welsh Corgi"
// }

// console.log(myCounty);

// console.log(myDog);

//.log-ing the above gets us the object 'printed' or 'viewed' in the console where we can click into the object to see its shape [properties]

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
* New Object Instance vs. Object Literal Notation *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

// We can call the 'constructor' for an object and use it to create our objects:

// var myObject = new Object();

// console.log(myObject);

//More often, we'll use this object literal notation structure as shown above and below:

// var myObject = {};
//
// console.log(typeof myObject);

//* TODO: Create a new Object and call it 'myCar' using either way to do so shown above (object instance or object literal)

var myCar = {};

console.log(typeof myCar);

// That's great! But our car object doesn't have much going on, does it? There's no depth or meat to it - how can we fill our object in?

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
*                   Properties                    *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

// We assign properties to objects - properties are pieces of data and fill in the guts / details of our object

//Let's take myCar. . and actually line out what my car is.

// We can use dot notation to do so:

// myCar.make = "Chevrolet";

// Or array notation:

// myCar["model"] = "Silverado";

//In general, dot notation is preferred of the two notations

//We can also set up our objects and properties during object creation
// var sigotherCar = {
//     make: "Honda",
//     model: "Fit",
//     year: 2010
// }


// TODO: Fill in your myCar object with properties of make, model, and year with the correct values. If you don't own a vehicle, fill in the details with your favorite vehicle.
myCar.make = "VolksWagen";
myCar.model = "Tiguan";
myCar.year = "2016";
myCar.color = "Charcoal";
myCar.name = "Gerdie";




//For me? I'm missing the year for myCar so. .

// myCar.year = 2017;

//Now I have a completed example of the myCar object - the model and make were added above in prior examples

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
*           Object Properties && Methods          *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/


/**/
/**/
//With our myCar objects set up, let's start utilizing them and diving into them!
//We can use dot notation or array notation in similar ways to start accessing these properties
//Let's share some information about our cars :)

// alert('Hey y\'all' + myCar.make + " " + myCar.model)

// console.log("Hey, y'all! I own a " + myCar["make"] + " " + myCar.model) //Should concat from these two properties into this structure like we've been used to doing with variables

//Speaking of variables, we can tap into our prior understanding of assigning variables thus far and assign a property to a variable:

// var myCarYear = myCar.year;

// console.log("Woops - forgot to tell you what year my vehicle is, it's model year " + myCarYear)

//What if we wanted to create a more complicated piece of data? Perhaps a list of our cars FEATURES?

// myCar.features = ["Heated/ventilated seats", "leather", "towing package", "bed liner"]


//Now we could do something like this. . a list of those features in the console
// for (let i = 0; i < myCar.features.length; i++){
//     console.log("Here's one of my car's features: " + myCar.features[i])
// }

// TODO: Add an array of features that your vehicle has!

myCar.features = ["Power Steering", "Blue-tooth radio", "Leather Seats"];

for (var i = 0; i < myCar.features.length; i++) {
    console.log('My car has ' + myCar.features[i])
}


//What about who owns our car? That could be an object itself if we think it through - the owner has a firstName and a lastName at the very least, right?
//Let's try nesting this object inside of our car object we've been building out

// var carOwner = {firstName: "Kenneth", lastName: "Howell"}

// myCar.owner = carOwner;

var carOwner = {
    firstName : "Nathan",
    lastName : "Adcock",
};

myCar.owner = carOwner

// TODO: Nest a 'carOwner' object of your own into this growing myCar object and console.log the results!

myCar.turnOn = function () {
    alert("Putting the key in the ignition and fired up " + myCar.name + " the " + myCar.make + " " + myCar.model + "! Ready to Drive.")
};



// console.log(myCar);

//An object can also contain within itself a method (function). We can set it up similarly to our properties, but with a value that is the function expression

// myCar.turnOn = function () {
//     alert("Putting the key in the ignition - fired up the " + myCar.make + " " + myCar.model + " just fine!")
// }

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
*                 Arrays of Objects               *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

//Let's tie some things together: Let's make a garage with another car!

// otherCar = {
//     make: "Toyota",
//     model: "Prius",
//     year: 2016,
//     owner: {
//         firstName: "Jess",
//         lastName: "Mendoza"
//     },
//     turnOn: function () {
//         alert("Putting the key in the ignition - fired up the " + this.make + " " + this.model + " just fine!")
//     }
// };
//
// var theGarage = [
//     myCar,
//     otherCar
// ]
//
// console.log(theGarage);
//
// //Now: loop through an ARRAY of OBJECTS, accessing our turnOn function for our vehicles
// //Also note: we used the keyword *this* on the other vehicle's turnOn function, so this will be a good experiment to see the results
//
//
// theGarage.forEach(function(car){
//     car.turnOn();
// })

//One final TODO: A bigger task - set up your own garage and add at least another vehicle into it. Log your garage array to verify it contains the cars you want - once your garage has the right cars, write a loop to access some properties or a method from them!


function tourValue(){
    console.log("This car is a " + this.year + " " + this.make + " " + this.model + " and it belongs to " + this.owner.firstName + "! Any Questions?" )
};

nateCar = {
    make: "VolksWagen",
    model: "Tiguan",
    year: 2016,
    owner: {
        firstName: "Nathan",
        lastName: "Adcock",
    },
    tourKey: tourValue,
};

jessCar = {
    make: "Toyota",
    model: "Prius",
    year: 2016,
    owner: {
        firstName: "Jess",
        lastName: "Mendoza"
    },
    tourKey: tourValue,
}

var theGarage = [
    nateCar,
    jessCar
]

console.log(theGarage);

theGarage.forEach(function(car){
    car.tourKey();
})



// 1. Write a JavaScript program to list the properties of a JavaScript object. Go to the editor
// Sample object:
    var student = {
        name : "David Rayy",
        sclass : "VI",
        rollno : 12 };
// Sample Output: name,sclass,rollno
// Click me to see the solution

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Go to the editor
// Sample object:
    var student = {
        name : "David Rayy",
        sclass : "VI",
        rollno : 12 };
// Click me to see the solution

// 3. Write a JavaScript program to get the length of a JavaScript object. Go to the editor
// Sample object :
    var student = {
        name : "David Rayy",
        sclass : "VI",
        rollno : 12 };
// Click me to see the solution

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. Go to the editor

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];
// Click me to see the solution
//
// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Go to the editor
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.
//     Click me to see the solution
//
// 6. Write a Bubble Sort algorithm in JavaScript. Go to the editor
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
//     Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]
// Click me to see the solution
//
// 7. Write a JavaScript program which returns a subset of a string. Go to the editor
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]
// Click me to see the solution
//
// 8. Write a JavaScript program to create a Clock. Go to the editor
// Note: The output will come every second.
//     Expected Console Output :
    "14:37:42"
"14:37:43"
"14:37:44"
"14:37:45"
"14:37:46"
"14:37:47"
// Click me to see the solution
//
// 9. Write a JavaScript program to calculate the area and perimeter of a circle. Go to the editor
// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.
//     Click me to see the solution
//
// 10. Write a JavaScript program to sort an array of JavaScript objects. Go to the editor
// Sample Object :

    var library = [
        {
            title:  'The Road Ahead',
            author: 'Bill Gates',
            libraryID: 1254
        },
        {
            title: 'Walter Isaacson',
            author: 'Steve Jobs',
            libraryID: 4264
        },
        {
            title: 'Mockingjay: The Final Book of The Hunger Games',
            author: 'Suzanne Collins',
            libraryID: 3245
        }];
// Expected Output:

    // [[object Object] {
    //     author: "Walter Isaacson",
    //     libraryID: 4264,
    //     title: "Steve Jobs"
    // }, [object Object] {
    //     author: "Suzanne Collins",
    //     libraryID: 3245,
    //     title: "Mockingjay: The Final Book of The Hunger Games"
    // }, [object Object] {
    //     author: "The Road Ahead",
    //     libraryID: 1254,
    //     title: "Bill Gates"
    // }]
// Click me to see the solution

// 11. Write a JavaScript function to print all the methods in an JavaScript object. Go to the editor
// Test Data :
    console.log(all_properties(Array));
// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]
// Click me to see the solution
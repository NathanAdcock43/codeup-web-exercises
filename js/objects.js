(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */


    var person = {
        firstName: "Rick",
        lastName: "Sanchez",
    };


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */



    console.log('Hello from ' + person.firstName)



    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

//more than $200, they get a 12%

var shoppers = [
    {name: 'Cameron', amount: 180},
    {name: 'Ryan', amount: 250},
    {name: 'George', amount: 320},
];

shoppers.forEach(function(shopper){
    var newAmount = shopper.amount - (shopper.amount * .12);
    var  discount = shopper.amount * .12;
    if (shopper.amount > 200) {
        console.log(shopper.name + " you received a 12% discount worth " + discount.toFixed(2) +" dollars. Your new total is $" + newAmount.toFixed(2));
    } else {
        console.log(shopper.name + " your total is $" + shopper.amount.toFixed(2) + " you missed out on the 12% by $" + (200 - shopper.amount).toFixed(2));
    }

});

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */


    // var books = [
    //     {id : 1,
    //     title : "The Grapes of Wrath",
    //     author : {
    //         firstName: "John",
    //         lastName: "Steinbeck",
    //     }},
    //     {id : 2,
    //     title : "Neverwhere",
    //     author : {
    //         firstName: "Neil",
    //         lastName: "Gaiman",
    //         }},
    //     {id : 3,
    //     title : "The Count of Monte Cristo",
    //     author : {
    //         firstName: "Alexandre",
    //         lastName: "Dumas",
    //         }},
    //     {id : 4,
    //     title : "Alice in Wonderland",
    //     author : {
    //         firstName: "Lewis",
    //         lastName: "Carol",
    //         }},
    //     {id : 5,
    //     title : "The Stand",
    //     author : {
    //         firstName: "Stephen",
    //         lastName: "King",
    //         }},
    // ];
    //
    //
    // books.forEach(function (book){
    //     console.log("Book # " + book.id);
    //     console.log("Title: " + book.title);
    //     console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    //     console.log("---")
    // });

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
var firstBookTitle = "The Grapes of Wrath";

    var books = [
        {id : 1,
            title : firstBookTitle,
            author : {
                firstName: "John",
                lastName: "Steinbeck",
            }},
        {id : 2,
            title : "Neverwhere",
            author : {
                firstName: "Neil",
                lastName: "Gaiman",
            }},
        {id : 3,
            title : "The Count of Monte Cristo",
            author : {
                firstName: "Alexandre",
                lastName: "Dumas",
            }},
        {id : 4,
            title : "Alice in Wonderland",
            author : {
                firstName: "Lewis",
                lastName: "Carol",
            }},
        {id : 5,
            title : "The Stand",
            author : {
                firstName: "Stephen",
                lastName: "King",
            }},
    ];
var newTitle = prompt("What is the name of the book you are adding to our library?");
var newAuthorFirst = prompt("What is the first name of the Author of this title?");
var newAuthorLast = prompt("What is the last name of the Author of this title?");

function createBook (title, firstName, lastName){
        var id = books.length + 1;
        var newBook = {id : id,
            title : title,
            author : {
                firstName: firstName,
                lastName: lastName,
            }}
        return newBook;
    }

    books.push (createBook(newTitle, newAuthorFirst, newAuthorLast))

    console.log(books);

    books.forEach(function (book){
            console.log("Book # " + book.id);
            console.log("Title: " + book.title);
            console.log("Author: " + book.author.firstName + " " + book.author.lastName);
            console.log("---")
        });


})();
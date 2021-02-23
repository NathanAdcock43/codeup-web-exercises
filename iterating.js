
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var namesMarx = ["Chico", "Harpo", "Groucho", "Gummo"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(namesMarx.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(namesMarx[0]);
    console.log(namesMarx[1]);
    console.log(namesMarx[2]);
    console.log(namesMarx[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */


    for ( var i = 0; i < namesMarx.length; i++){
        console.log( namesMarx[i] + "is a Marx Brother");
    }


    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    namesMarx.forEach(function(namesMarx) {
        console.log('Here is a funny guy: ' + namesMarx + '.');
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    var first = [1, 2, 3, 4, 5]
    function printOne(){
        console.log(first[0])
    }
    printOne()



    // var first = [1, 2, 3, 4, 5] // returns 1
    // for (var i = 0; i < first.length; i++) {
    //     if (i === 0) {
    //         console.log("Is this what you were looking for: " + first[i]);
    //     } else {
    //         console.log("Nope");
    //     }
    //  }

    function printTwo(){
        console.log(first[1])
    }
    printTwo()

// var last = [1, 2, 3, 4, 5] // return 5

    function printFive(){
        console.log(first[4])
    }
    printFive()

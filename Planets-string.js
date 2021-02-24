(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    var planetsArray = planetsString.split('|')

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    // console.log(planetsArray);


    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    // console.log(planetsArray.join(' <br> '));

    // console.log("<ul><li> " + planetsArray.join(' <li/><li> ') + " </li></ul>")

        //this first line is creating the meat of the sandwich
        var newPlanetString = planetsArray.join('<li/><li>');
        //the second line makes a open container that will hold the finished sandwich
        var newPlanetsArray = [];
        //the third line places the top piece of bread on a conveyor belt
        newPlanetsArray.push('<ul><li>');
        //the forth line places the middle of the sandwich on the conveyor and pushes the top piece over
        newPlanetsArray.push(newPlanetString);
        //the fifth line places the last piece of bread and pushes everything further down the belt
        newPlanetsArray.push('</li></ul>');
        //the last line wraps everything in cellophane to keep it together as a (what)? a String?
        console.log(newPlanetsArray.join(''))
        //sandwiches is how I understand most of the world's issues.... JK



        // planetsArray.sort();
        // planetsArray.push('</li></ul>');
        // planetsArray.unshift('<ul><li>');
        //
        // planetsArray.join(' <li/><li> ');
        //
        //
        // console.log(planetsArray)












})();
(function() {
    "use strict";

    // create a circle object
    var circle = {};
    circle.radius = 3;
    circle.circumference = function() {
        return Math.PI * 2 * circle.radius;
        };

    circle.getArea = function () {
        return Math.PI * circle.radius * circle.radius;
    };

    circle.logInfo = function (doRounding) {
        var roundedArea;
        if (doRounding){
               roundedArea =  Math.round(circle.getArea())
            } else { circle.getArea()

        }
        console.log("Area of a circle with radius: " + this.radius + ", is: ");
    };
    //  alternate method (ternary) var roundedArea = (success)? Math.round(circle.getArea()) : circle.getArea()




    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 5,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var area = Math.PI * circle.radius * Math.sqrt(circle.radius);
            return area // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            if(doRounding === true){
                console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(Math.PI * circle.radius * Math.sqrt(circle.radius)));
            } else if (doRounding === false){
                console.log(Math.PI * circle.radius * Math.sqrt(circle.radius));
            }


        }
    };


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number: " + Math.round(Math.PI * circle.radius * Math.sqrt(circle.radius)));
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number" + Math.round(Math.PI * circle.radius * Math.sqrt(circle.radius)));
    circle.logInfo(true);
})();

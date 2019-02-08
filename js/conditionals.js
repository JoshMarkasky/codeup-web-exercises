"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

    var answer = confirm('would you like to enter a number?');
    console.log(process(answer));

    function process(answer) {
        if(answer === true){
            var number = prompt('please enter a number');
            isOdd(number);
            plus100(number);
            postiveOrNegative(number);

        } else {
            alert('ok then');
        }
    }

    function isOdd(number){
        if(number%2 == 0){
            console.log('number is even');
        } else {
            console.log('number is odd');
        }
    }

    function plus100(number){
        var add = +number + +100;
        console.log(add);
    }

    function postiveOrNegative(number){
        if(number > 0){
            console.log('number is positive');
        } else {
            console.log('number is negative');
        }
    }

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

function analyzeColor(random){
    if(random === 'red'){
        console.log('this color is red');
    } else if(random === 'orange'){
        console.log('this color is orange');
    } else if(random === 'yellow'){
        console.log('this color is yellow');
    } else if(random === 'green'){
        console.log('this color is green');
    } else if(random === 'blue'){
        console.log('this color is blue');
    } else if(random === 'indigo'){
        console.log('you are one of us');
    } else if(random === 'violet'){
        console.log('this color is violet');
    } else {
        console.log('I dont know anything about that color');
    }
}

function analyzeColorSwitch(random){
    switch(randomColor){
        case 'red':
            console.log('this color is red');
            break;
        case 'orange':
            console.log('this color is orange');
            break;
        case 'yellow':
            console.log('this color is yellow');
            break;
        case 'green':
            console.log('this color is green');
            break;
        case 'blue':
            console.log('this color is blue');
            break;
        case 'indigo':
            console.log('you are one of us');
            break;
        case 'violet':
            console.log('this color is violet');
            break;
        default:
            console.log('i dont know anything about that color')
    }
}

console.log(analyzeColor(randomColor));
console.log(analyzeColorSwitch(randomColor));

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var choice = prompt('please choose a color');

console.log(analyzeColor(choice));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

    var price = prompt('how much was the total?');

    function calculateTotal(number, price){
        if(number === 5){
            alert('your lucky number is: ' + number + ' ' + 'you get it for free');
            var discount = 'you get it for free';
           return discount;
        } else if(number === 4){
            var discount = .50;
            var after = (price - (price * discount));
            alert('your lucky number is: ' + number + ' ' + 'your price was ' + price + ' ' + 'now is ' + after);
        } else if(number === 3) {
            var discount = .35;
            var after = (price - (price * discount));
            alert('your lucky number is: ' + number + ' ' + 'your price was ' + price + ' ' + 'now is ' + after);
        } else if(number === 2) {
            var discount = .25;
            var after = (price - (price * discount));
            alert('your lucky number is: ' + number + ' ' + 'your price was ' + price + ' ' + 'now is ' + after);
        }else if(number === 1) {
            var discount = .10;
            var after = (price - (price * discount));
            alert('your lucky number is: ' + number + ' ' + 'your price was ' + price + ' ' + 'now is ' + after);
        } else {
            alert('you get no dicount loser, full price!!');
        }
    }

var luckyNumber = Math.floor(Math.random() * 6);
console.log(calculateTotal(luckyNumber, price));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
//var luckyNumber = Math.floor(Math.random() * 6);

//generate random number
var random = Math.floor((Math.random() * 10) + 1);

// function determines odd or even numbers
function isEvenOrOdd(number){
    // return number%3 === 0;
    if(number%2 === 0){
        console.log(number + ' is a even number');
    } else {
        console.log(number + ' is odd number');
    }
}

console.log(isEvenOrOdd(random));


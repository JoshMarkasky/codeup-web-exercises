console.log('Hello from external JavaScript');

alert('Welcome to my Website!');

var color = prompt('what is your favorite color?');

if(color === 'purple'){
    alert('thats my favorite color too');
} else {
    alert('that color sucks, loser');
}

//Problem 1
var movie1 = prompt('how long did you keep movie one?');
var movie2 = prompt('how long did you keep movie two?');
var movie3 = prompt('how long did you keep movie three?');
var price = prompt('how much was the price for each movie?');
var totalcount =  +movie1 + +movie2 + +movie3;
var answer = totalcount * price;
alert('answer to problem 1 is: ' + answer);

//problem2
var google = prompt('how much you make there cuh?');
var amazon = prompt('how much at amazon foo');
var facebook = prompt('money at facebook');

var googlehours = prompt('how many hours you work at google foo?');
var amazonhours = prompt('how many hours you worked there?');
var facebookhours = prompt('how many hours you work there cuh?');

var googletotal = google * googlehours;
var amazongtotal = amazon * amazonhours;
var facebooktotal = facebook * facebookhours;
var answer2 = +googlehours + +amazongtotal + +facebooktotal;
alert(answer2);

// problem 3
var classroom = confirm('is the classroom full?');
var sche = confirm('does this conflict with current schedule?');

if(classroom !== true && sche !== true){
    alert('you can enroll');
} else {
    alert('you cant enroll loser, go home');
}

var memeber = confirm('are you a memeber?');
var items = confirm('did you buy more then two items?');
var expire = confirm('did those items expire?');

if(memeber === true && items === true & expire !== true){
    alert('we can give you the offer');
} else {
    alert(' you pay full price loser!')
}


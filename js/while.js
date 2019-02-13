var i = 2;

while(i <= 65536){
    console.log(i);
    i += i;
}

var allCones = Math.floor(Math.random() * 50) + 50;

do{
    console.log('I have this many cones' + ' ' + allCones);
    var random = Math.floor(Math.random() * 5) + 1;

    if(random === 1){
        if(allCones >= 1){
            allCones--;
            console.log('just sold ' + random);
        } else {
            console.log('We are sold out');
        }
    } else if(random === 2){
        if(allCones >= 2){
            allCones -= 2;
            console.log('i just sold ' + random);
        } else {
            console.log('we dont have enough to sell 2');
        }
    } else if(random === 3) {
        if(allCones >= 3){
            allCones -= 3;
            console.log('i just sold ' + random);
        } else {
            console.log('we dont have enough to sell 3')
        }
    } else if(random === 4) {
        if(allCones >= 4){
            allCones -= 4;
            console.log('i just sold ' + random);
        } else {
            console.log('we dont have enough to sell 4');
        }
    } else if(random === 5) {
        if(allCones >= 5){
            allCones -= 5;
            console.log('i just sold ' + random);
        } else {
            console.log('not enough to sell 5');
        }
    } else {
        console.log('we are sold out');
    }
} while(allCones > 0);

console.log('we are sold out');





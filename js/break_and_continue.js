var number = prompt('please choose a number that is odd');

for(var i = 0; i <= 50; i++){
    if(number%2 == 0){
        alert('please choose odd number');
        break;
    } else if(number == i){
        console.log('Yikes skip this number: ' + number);
    } else if(i%2 !== 0){
        console.log('this number is odd: ' + i);
    }
}
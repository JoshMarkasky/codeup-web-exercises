function showMultiplicationTable(number){
    for(var i = 1; i <= 10; i++){
        console.log(number * i);
    }
}

showMultiplicationTable(7);


for(var i = 0; i < 10; i++){
    var random = Math.floor(Math.random() * 200) + 20;

    if(random%2 === 0){
        console.log(random + ' is even');
    } else {
        console.log(random + ' is odd');
    }
}


for(var i = 1; i <= 9; i++){
    for(var j = 0; j < i; j++){
        console.log(i);
    }
}

for(var i = 100; i >= 0; i -= 5){
    console.log(i);
}




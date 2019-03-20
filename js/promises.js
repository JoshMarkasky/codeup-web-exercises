'use strict';
function wait(num){
    return new Promise(function (res, rej){
        setTimeout(function () {
                    res();
        }, num)
    })
}
    wait(3000).then(() => console.log('success'))
        wait(4000).then(() => console.log('success2'))
    .catch(() => console.log('idk what you are doing'));

    fetch('https://api.github.com/users/JoshMarkasky', {headers: {'Authorization': git}})
        .then(response => response.json())
        .then(users => users.map(user => user.login))
        .catch(() => console.log('rejected'));



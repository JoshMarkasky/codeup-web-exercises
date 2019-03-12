const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// filter users
let newArray = users.filter(users => users.languages.length >= 3);
console.log(newArray);

//map users for emails array
let newMapArry = users.map(users => users.email);
console.log(newMapArry);

//reduce users array
const newReduceArray = users.reduce((total, users) => {
    let total2 = total + users.yearsOfExperience;
    let answer = total2 / 5;
    return total2 / 5;
}, 0);

let longest = newMapArry.reduce((a, b) => a.length > b.length ? a : b, '');
console.log(longest);


let allNames = users.map(users => users.name);

let newString = allNames.reduce((newNames, allNames) => newNames + ' , ' + allNames);
console.log('your instructors are : ' + newString);
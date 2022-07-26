//function declaration
function randomNumber() {
    return Math.floor(Math.random() * 10);
}

//arrow function long version
let randomNum = () => {
    return Math.floor(Math.random() * 10);
}

//arrow function short version
let otherRandomNum = () => Math.floor(Math.random() * 10);

//function declaration
function isPositive(num) {
    return num >= 0;
}

let isPositiveResult = isPositive(5);

//longer
let isPositive2 = (num) => {
    return num >= 0;
}

//shorter
let isPositive3 = (num) => num >= 0;

//function declaration
function multiply(x, y) {
    return x * y;
}
let multiplyResult = multiply(5, 15);

//arrow function
let otherMultiply = (a, b) => a * b;
let otherMultiplyResult = otherMultiply(2, 4);


//METHODS

//1. Sort



//eg
let names = ['John', 'Sandy', 'Mark', 'Sandra'];
let num = [1, 5, 8, 9, 11, 212, 313, 115, 1245];
console.log(names.sort());
console.log(num.sort());

//!Array.prototype sort
//from small -> big

/*
if result > 0 -> b
if result = 0 -> unchanged
if result < 0 -> a
*/

let sortFunc = num.sort(function (a, b) {
    return a - b;
});
console.log(sortFunc);

//from big -> small

/*
if result > 0 -> a
if result = 0 -> unchanged
if result < 0 -> b
*/
let sortFunc2 = num.sort(function (a, b) {
    return b - a;
})
console.log(sortFunc2);


//2. forEach()

//eg
const bestSongs = [
    {
        artist: "Bob Dylan",
        song: "Like a Rolling Stone",
        year: 1965,
    },

    {
        artist: "John Lennon",
        song: "Imagine",
        year: 1971,
    },

    {
        artist: "Chuck Berry",
        song: "Johnny B. Goode",
        year: 1958,
    },

    {
        artist: "Aretha Franklin",
        song: "Respect",
        year: 1967,
    },

    {
        artist: "The Beatles",
        song: "Hey Jude",
        year: 1968,
    },

    {
        artist: "Ray Charles",
        song: "What'd I Say",

    },
];

bestSongs.forEach(bestsong => console.log(bestsong));

//3.Map()
let artist = bestSongs.map((bestsong => bestsong.artist));
console.log(artist);

//4.Reduce
const nums = [1, 2, 3, 4, 5];
const total = nums.reduce(sum, 0);

function sum(accumulator, value) {
    return accumulator + value;
}
console.log(total);


    //5.Filter

let songYears = bestSongs.filter((songYear) => songYear.year >= 1965);
console.log(songYears);

//6.Find
let artistNames = bestSongs.find((artistName) => artistName.artist === 'Chuck Berry');
console.log(artistNames);
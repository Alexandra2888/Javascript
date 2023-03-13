//eg:
const array = [1,2,10,16];
const newArray = array.forEach((num) => {
    num * 2
})
console.log(newArray); //undefined

//eg:
const array2 = [1,2,10,16];
const double = [];
const newArray2 = array2.forEach((num) => {
    double.push(num * 2)
})
console.log(double);



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




// Array Properties and Methods
let name = ['john', 'bobo', 'barry', 'olga', 'ben'];

//length
console.log(name.length);
console.log(name[name.length - 1]);

// concat
const lastNames = ['pepper', 'onion', 'banana'];
const allNames = names.concat(lastNames);
console.log(allNames);
// reverse
console.log(allNames.reverse());

//unshift
allNames.unshift('susy');
allNames.unshift('anna');
console.log(allNames);
//shift
allNames.shift();
allNames.shift();
allNames.shift();
allNames.shift();
console.log(allNames);
//push
allNames.push('susy');
console.log(allNames);
//pop
allNames.pop();
// allNames.pop();
// allNames.pop();
// allNames.pop();
console.log(allNames);
// splice - mutates original array
const specificNames = allNames.splice(0, 3);
console.log(specificNames);
console.log(allNames);

// Arrays and for loop

const names1 = ['anna', 'susy', 'bob'];
const lastName = 'shakeandbake';
let newArray1 = [];

//for loop
for (let i = 0; i < names1.length; i++) {
  console.log(i);
  console.log(names1[i]);
  const fullName = `${names1[i]} ${lastName}`;
  newArray.push(fullName);
}

console.log(names1);
console.log(newArray1);


// Functions, return, if, arrays, for loop

const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total > 100) {
    console.log(`Whoa! You are spending way too much`);
    return total;
  }
  console.log(`You are good total is less than 100`);

  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200, 4000, 500, 1]);

console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
});




//function declaration:
function myFunc() {
    console.log('I am a function')
}
myFunc();

function message() {
    let red = '#ff000';
    console.log(`The hex value of the red color is ${red}`)
}
message();

function color(hex) {
console.log(hex)
}
color('#ff1100');
color('#easdfc');

function calcNums(x) {
    console.log(((x + 1) * x) / (x + 10))
}
calcNums(4);

function movieRating(rating) {
console.log(`The movie's rating is ${rating}`)
}
movieRating(9.5);

function calcNumbers(x, y) {
console.log(x + y)
}
calcNumbers(5, 1);
calcNumbers(14, -5);

function moviePerf(movieName, boxOffice) {
    console.log(`The ${movieName} has grossed ${boxOffice} billion`)
}
moviePerf('Jurassic Park', 1.8);



function sum(a, b) {
    return a + b;
}
console.log(sum(10, 12));
let sumName = sum(10, 12);
console.log(sumName);


function checkScore(currentScore, passingsCore){
    if (currentScore >= passingsCore) {
    return 'Passed'
    } else {
        return 'Failed'
}
}
let result = checkScore(90, 55);
console.log(result);

//shorter version


function checkScore(currentScore, passingsCore){
    if (currentScore >= passingsCore) {
        return 'Passed'
    }
        return 'Failed'
}

let result2 = checkScore(90, 55);
console.log(result);

//eg

a();
function a() {
    console.log('hi');
}

function b() {
    console.log('bye');
}



//VARIABLE FUNCTION SCOPE
//scope= specifies where the defined variable is accessible. Is responsible for defining, accessing actually variables and where we can access variables, variables which are defined.

//let
function myFunc() {
    let myName = 'Billy'
}
myFunc();
console.log(myName) // => whenewer we declare a variable inside a function we cannot access it outside that function whenerver that variable is defined by that

//const
function myFunc() {
    const myName = 'Billy'
}
myFunc();
console.log(myName) // same error for const as we had for let

//var
function myFunc() {
    var myName = 'Billy'
}
myFunc();
console.log(myName) //same error


//VARIABLE BLOCK SCOPE {}

//let
if (2 > 1 && 1 < 3) {
    let result = true;
    console.log(result);
}
    console.log(result);


    //const
    if (2 > 1 && 1 < 3) {
    const result = true;
    console.log(result);
}
    console.log(result);

    //var
    if (2 > 1 && 1 < 3) {
    var result1 = true;
    console.log(result1);
}
    console.log(result1);


    //FUNCTION EXPRESSIONS = annonymous functions
    // = when functions are stored inside variables

let calcNums = function (z, w) {
    return (z + w) / (z - w)
};
console.log(calcNums(15, 25));

//eg:
function avgMikeScore(score, mikeScore) {
    return (mikeScore + 5) / score
}

let avgJoeyScore = function (score, joeyScore) {
     return joeyScore / score
}

const scores = [avgJoeyScore, avgMikeScore];
for (let i = 0; i < scores.length; i++) {
    let result = scores[i](100, 20)
}

//or
//for of loop
for (let avgScore of scores) {
    let result = avgScore(100, 20);
}

//FUNCTIONS IN OBJECT PROPERTIES

const scores1 = {
    mikeScore: avgMikeScore,
    joeyScore: avgJoeyScore
}
console.log(scores1.mikeScore(100, 20));
console.log(scores1.joeyScore(100, 50));


//HOF: HIGhER ORDER FUNCTIONS = functions which are acceting other functions as arguments or as return values

//1.FUNCTIONS ACCEPTING OTHER FUNCTIONS AS ARGUMENTS = CALLBACK FUNCTIONS => num() function

function repeat(x) {
    x();
    x();
}

function num() {
    console.log(2 + 5);
}

repeat(num);

//eg
setTimeout(function () {
    console.log(2 = 2)
}, 5000)


//2.FUNCTIONS ACCEPTING OTHER FUNCTIONS AS RETURNED VALUES = FACTORY FUNCTIONS

function sum(x) {
    return function (y) {
        return x + y;
    };
}

let num2 = sum(5);
console.log(num2(4));




//eg

let favouriteFood = 'grapes';
let foodThoughts = function () {
    console.log("original favourite food:" + favouriteFood);
    let favouriteFood = "sushi";
    console.log("new favourite food:" + favouriteFood);
};
foodThoughts();

//eg
"use strict"
function weird() {
    height = 50;
    return height;
}
weird();

//eg
//let heyhey = function doodle() {
   // do smth;
   // return 'heyhey'
//}
//heyhey();
//doodle();

//-> refference error
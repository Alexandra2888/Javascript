// eg

console.log('1');
console.log('teddy');
let teddy = 'bear';
function sing() {
    console.log('la laa');
}
// 1, undefined, la laa


// 1. variable hoisting
//our regualr code:
console.log(book);
console.log(movie);

book;
movie;

console.log(book);
console.log(movie);

var book = "Dune";
var movie = "The Movie Dune";

console.log(book);
console.log(movie);


//the hoisting miosconception
// var book;
// var movie;

// console.log(book);
// console.log(movie);

// book;
// movie;

// console.log(book);
// console.log(movie);

//  book = "Dune";
//  movie = "The Movie Dune";

// console.log(book);
// console.log(movie);

//2. function hoisting

book();
movie(); // typeError
function book() {
    console.log("The Great Gatsby");
}

var movie = function () {
    console.log("The Good, the Bad and the Ugly");
};
movie() // no error


//the hoisting misconception for function declaration
function book() {
    console.log("The Great Gatsby");
};
book();

//the hoisting misconception for function expression

 movie = function () {
    console.log("The Good, the Bad and the Ugly");
};
movie()


//proof on hoisting of let & const
var name = "Chadwick";

{
    console.log(name);
    let name = "Rosie";
}

// const number;
// number = 1;
// number = 2;
// console.log(number);

// let number;
// let number = 1;
//      number = 3;
// console.log(number);


// Hoisting
// function and var declarations are hoisted
// safer to access only after initialized
display();
moreComplex();
console.log(display);
console.log(moreComplex);
// console.log(firstName);
// console.log(lastName);
// console.log(random);

const firstName = 'john';
let lastName = 'jordan';
var random = 'random';

function display() {
  console.log('hello world');
}

function moreComplex() {
  console.log(` ${random}`);
}


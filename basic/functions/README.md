## functions = reusable pieces of code that perform action
## 1.define the function
## 2.call the function

## function declarations = function statements = named functions

## in function name => parameters
## in function call => arguments

##
eg
let a = function name () {}
function name () {}

## function expression = if the name is anything apart/aside from function

let sing2 = function() {
    console.log ('la laa')
}

var myMovieRating() = function anotherRating(){
    console.log(anotherRating);
}

! they add their name/ identifier to their own scope -> the name of this function expression can only be accessed within the scope of this function

## function declaration

function sing(){
    console.log('la laa');
}

function myMovieRating(){}

! if function declaratryion is inside the global scope the identifier of that function decalaration will also be accessible inside the global scope.
! if function decalaration is inside another function declaration -> the identifier, as it's going to be a nested scope, can only be accessed within the parent scope.


## function invocation
a. function expression
let canada = function() {
    console.log('cold');
}

b. function declaration
function india() {
    console.log('warm');
}

c.function invocation/call/execution
canada();
india();

## function scope

function sayMyName() [
    let a = 'a';
    return function findName() {
        let b = 'b';
        return function printName() {
            let c= 'c';
            return 'Andrei'
    }
]

## return keyword = processes the code that we pass into it. Is the end of the function

## convert a function declaration into a function expression = IIFE
(function anotherTeacher() {
    var teacher = "Jack";
    console.log(teacher);
})();

(function numSquare(x) {
    console.log(x * x);
})(5);
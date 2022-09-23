## functions = pieces of code that perform action

##
eg
let a = function name () {}
function name () {}

## function expression

let sing2 = function() {
    console.log ('la laa')
}

## function declaration

function sing(){
    console.log('la laa');
}

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
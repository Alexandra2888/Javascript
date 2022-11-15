let x = 'x';
function findName() {
    console.log(x);
    let b = 'b';
    return printName()
}

function printName() {
    let c = 'c';
    return 'Alex';
}

function sayMyName() {
    let a = 'a';
    return findName();
}

function sayMyName() {
    let a = 'a';
    return function findName() {
        let b = 'b';
        return function printName() {
            let c = 'c';
            return 'Alex';
        }
    }
}

//EXERCISE
"use strict"
function weird() {
    height = 50;
    return height;
}
weird();

//eg
let hehyhey = function doodle() {
    //do smth;
    return 'hehyhey';
}
hehyhey();
doodle();
//refference error
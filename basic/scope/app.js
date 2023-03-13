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

//eg
var movie = "Memento";

function otherMovie() {
    var movie = "American Psyho";

    function againMovie(movieName) {
        console.log(movie, movieName)
    }
    againMovie("Dances with Wolfes");
}
//otherMovie();
//againMovie("The Revenant");

// block scoping & var -> is not blocked-scope, var is global scope
// var name = "Clink";
// {
//     var name = "Guiardian";
//     console.log(name);
// }
// console.log(name);


//block scoping & let

//  var name1 = "Clink";
// {
//    let name1 = "Guardian";
//     console.log(name1);
// }
// console.log(name1);



// block scope & const


 var name1 = "Clink";
{
   const name1 = "Guardian";
    console.log(name1);
}
console.log(name1);


// Global Scope vs Local Scope
// any variable outside code block {} is said to be in Global Scope
// can be accesss anywhere in the program
// Gotchas : name collisions, modify by mistake

let name = 'bobo';
name = 'peter';

function calculate() {
  // some other code...
  console.log(name);
  name = 'orange';
  function inner() {
    name = 'inner name value';
    console.log(`this is from inner function ${name}`);
  }
  inner();
}
calculate();

if (true) {
  // some other code...
  console.log(name);
  name = 'pants';
}

console.log(`my name is ${name} and I'm awesome`);


// Local Scope
// can not be access from outside code blocks
// if - NOT VAR

let name1 = 'bobo';

function calculate() {
  const name = 'john';
  const age = 25;
  // code goes here
  becomesGlobal = 'global variable';
}

calculate();
console.log(becomesGlobal);

if (true) {
  const name = 'john';
}

{
  const name = 'john';
  const special = 'special';
}
console.log(special);

console.log(`my name is ${name} and I'm awesome`);

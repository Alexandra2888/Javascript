//eg

a();
function a() {
    console.log('hi');
}

function b() {
    console.log('bye');
}


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
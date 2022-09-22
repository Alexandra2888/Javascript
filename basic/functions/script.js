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
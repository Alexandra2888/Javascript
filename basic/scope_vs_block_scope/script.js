if (5 > 4) {
    var secret1 = '12345';
}
console.log(secret1);

//eg
function a() {
    let secret2 = '12345';
}
console.log(secret2);
// -> refference error

// block scoping with let and const!

//eg
if (5 > 4) {
    let secret3 = '12345';
}
//you can access it only inside the block scope

//eg
function loop() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('final', i)
}
loop();

//eg
function loop2() {
    for (let i = 5; i < 5; i++) {
        console.log(i);
    }
    console.log('final', i)
}
loop2();
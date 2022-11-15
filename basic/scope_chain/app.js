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
//eg
function multiply(a, b) {
    return a * b;
}

let muyltiplyTwo = multiply.bind(this, 10);
console.log(muyltiplyTwo(4));
//this = window object

//eg
let multiplyByTen = multiply.bind(this, 10);
console.log(multiplyByTen);
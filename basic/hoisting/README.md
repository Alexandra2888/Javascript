## hoisting
= the behaviour of moving the variables/ function declaratiosn to the top of their respective environment during compilation.

## eg

console.log('1');
console.log('teddy');
let teddy = 'bear';
function sing(){
    console.log('la laa');
}
 -> 1, undefined, la laa
// checks for only 2 conditions
let score = 9;
score === 10 ? console.log('Grade A') : console.log('Grade B');

//eg
let answer = isUserValid(true) ? "You can enter" : "Access denied";

//eg
let automatedAnswer = "Your account is " + (isUserValid(false) ? "1234" : "not available");

//eg
function isUserValid(bool) {
return bool
}
 
//eg:
function condition() {
    if(isUserValid(true)) {
        return "You can enter"
    } else {
        return "Access denied!"
    }
}
let answer2 = condition();


// unary operator -  typeof
let text = 'some text';
// console.log(typeof text); // operand
// binary operator - assignment
let number = 3;
let number2 = 2 + 5;
// ternary operator
// condition ? (runs if true) : (runs if false)

const value = 1 < 0;

value ? console.log('value is true') : console.log('value is false');

// if (value) {
//   console.log('value is true');
// } else {
//   console.log('value is false');
// }

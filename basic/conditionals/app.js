//if statements => checks a single condition
if ('Tom' === 'Tom') {
    console.log('Yey Tom')
}

if ('Jack' === 'Tom') {
    console.log('No way!')
}

// if else => checking for 2 conditions
// let score = 9;
// if (score === 10) {
//     console.log('Grade A')
// } else {
//     console.log('Grade B');
// }

// if else => checks for 3/more conditions
// let score = 7;
// if (score === 10) {
//     console.log('Grade A')
// } else if(score === 9) {
//     console.log('Grade B');
// } else if (score === 8) {
//     console.log('Grade C')
// } else if (score === 7) {
//     console.log('Grade D')
// } else {
//     console.log('Grade F')
// }

// switch statement => check for a single condition
// let score = 10;
// switch (score) {
//     case 10:
//         console.log('Grade A')
// }

// default statent => checking for 2 conditions
// let score = 8;
// switch (score) {
//     case 10:
//         console.log('Grade A');
//         break;
//     default:
//         console.log('Grade B');
// }


// switch default statement => checking for more than 2 conditions
let score = 8;
switch (score) {
    case 10:
        console.log('Grade A');
        break;
    case 9:
        console.log('Grade B');
        break;
    case 8:
        console.log('Grade C');
        break;
    case 7:
        console.log('Grade D');
        break;
    default:
        console.log('Grade F')
}


// Conditional Statements
// >, <, >=, <=, ==, ===, !=, !===

const value = 2 > 1;
// console.log(typeof value);
const value2 = 1 > 2;
if (value2) {
  console.log('hello world');
} else {
  console.log('hello people');
}


// Conditional Statements
// Comparison Operators
// >, <, >=, <=, ==, ===, !=, !==
// else if and !

const num1 = 6;
const num2 = 6;
const result = num1 >= num2;

const value3 = false;

if (!value) {
  console.log('value is false');
}

// if (num1 > num2) {
//   console.log('first number is bigger than second');
// } else if (result) {
//   console.log('first number equal to a second');
// } else {
//   console.log('second number is bigger than first');
// }



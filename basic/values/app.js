// Refernce vs Value
// Primitive Data Types
// String, Number, Symbol, Boolean, Undefined, Null,
// Arrays, Functions, Objects = object
// typeof

// when assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value

// when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references.

const number = 1;
let number2 = number;
number2 = 7;
console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);

let person = { name: 'bob' };
let person2 = { ...person };
person2.name = 'susy';
console.log(`the name of the first person is ${person.name}`);
console.log(`the name of the second person is ${person2.name}`);


// Truthy and Falsy
// "",'',``,0 ,-0 ,NaN ,false, null, undefined


// Truthy and Falsy
// "",'',``,0 ,-0 ,NaN ,false, null, undefined

const bool1 = true;
const bool2 = 2 > 1;

const text = '';

if (text) {
  console.log('hey the value Truthy');
} else {
  console.log('hey the value Falsy');
}

// if (bool1) {
//   console.log(`Hey it works!`);
// }
// if (bool2) {
//   console.log(`Hey it also works!`);
// }

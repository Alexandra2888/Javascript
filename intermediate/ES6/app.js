//ES6 CLASSES

//eg
class Elf {
    constructor(name, weapon) {
        this.name = name,
            this.weapon = weapon
    }
    attack() {
        return 'attack with' + this.weapon;

    }
}


//eg
const player = "Bobby";
let experience = 100;
let wizardLevel = false;
if (experience < 90) {
    let wizardLevel = true;
    console.log(wizardLevel);
}
console.log(wizardLevel);

//eg
const player2 = obj.player2;
const experience2 = obj.experience;
let wizardLevel2 = obj.wizardLevel2;
// or
// const { player2, experience2 } = obj;
// let wizardLevel2 = obj;


//OBJECT PROPERTIES

//eg:
const name2 = 'John Snows';
const object = {
    [name]: 'hello',
    ['ray' + 'smith']: 'hihi'
}

//eg:
const a = "Simon";
const b = "true";
const c = {};
const obj = {
    a,
    b,
    c
}


// var, let , const
// define, update, redifine
// const cannot mutate primitive type

// define
var number = 100;
// console.log(number);
// update
number = 200;
// console.log(number);
// redifine
var number = 'orange';
// console.log(number);

let amount = 100;
// console.log(amount);
amount = 200;
// console.log(amount);
// let amount = 'orange';

const total = 100;
// console.log(total);
// total = 200;
const person = { name: 'bob' };
person.name = 'john';
console.log(person.name);


// var, let , const
// let, const - blocked scoped {} - anything within {}
// var - function scoped

// global scope

// console.log(amount);
// let amount = 100;

// function greet() {
//   // local scope
//   var random = 'some random value';
//   console.log(`hello there ${amount} ${random}`);
// }
// // console.log(random);

// // greet();

// let total = 1000;
// let test = true;

// if (test) {
//   // local scope
//   let total = 'oranges and onions';
//   let value = 'some random value';
//   console.log('hello there');
// }

// // console.log(value);
// {
//   let total = 100;
//   console.log(total);
// }
// {
//   let total = 100;
//   console.log(total);
// }

// console.log(total);

// Template Strings/Literals

const name = "bob";
const lastName = "sanders";
const age = 25;

const phrase =
  "My full name is " +
  name +
  " " +
  lastName +
  " and I'm " +
  age +
  " years old.";
const phrase2 = `My full name is ${name} ${lastName.toUpperCase()} and I'm ${age *
  2} years old`;
console.log(phrase2);


// Template Strings/Literals
// `` backticks above tab key left of 1 key

const person = {
  name: "kyle",
  job: "developer",
  hobbies: ["surfing", "baking", "bowling"],
};

const result = document.getElementById("result");

// result.innerHTML = "<h2>" + person.name + "</h2>" + "<p>" + person.job + "</p>";

result.innerHTML = `
<h2>${person.name}</h2>
<p>${person.job}</p>
<ul>
${person.hobbies
  .map(item => {
    return `<li>${item}</li>`;
  })
  .join("")}
</ul>
`;

// Template Strings/Literals
// `` backticks above tab key left of 1 key
// tagged template

const author = "Some Author";
const statement = "Some Statement";

const quote = highlight`Here is the ${statement} by ${author} and it could not be more true`;
console.log(quote);

function highlight(text, ...vars) {
  let awesomeText = text.map((item, index) => {
    return `${item} <strong class="blue">${vars[index] || ""}</strong>`;
  });
  return awesomeText.join("");
}

const result = document.getElementById("result");
result.innerHTML = quote;


// Arrow Functions or Fat Arrow Functions
// no name
// no function keyword
// parameters and return statement
//no parameters

// function sayHi() {
//   console.log("hello");
// }
// sayHi();
// const hello = function(name) {
//   console.log(`Hello ${name}`);
// };
// hello("bob");
// one parameter
// function triple(value) {
//   return value * 3;
// }

//


// Arrow Functions or Fat Arrow Functions
// 'this' keyword

const bob = {
  firstName: "bob",
  lastName: "smith",
  sayName: function() {
    console.log(this);
    setTimeout(() => {
      console.log(this);
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }, 1000);
  },
};

const anna = {
  firstName: "anna",
  lastName: "sanders",
  sayName: () => {
    console.log(this);
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  },
};

bob.sayName();
anna.sayName();



// default parameters, arrow function gotchas

const john = 'John';
const peter = 'Peter';

function sayHi(person = 'Susan') {
  console.log(`Hi ${person}`);
}
const sayHello = (person = 'BOB') => console.log(`Hello ${person}`);

sayHi();
sayHello(peter);


// Destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables
// Arrays

// const fruits = ['orange', 'banana', 'lemon'];
// const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

// const orange = fruits[0];
// const banana = fruits[1];
// const lemon = fruits[2];
// console.log(orange, banana, lemon);

// const [john, , enemy, bob, susan] = friends;
// console.log(john, enemy, bob, susan);


// Destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables
// Objects

// const bob = {
//   first: 'bob',
//   last: 'sanders',
//   city: 'chicago',
//   siblings: {
//     sister: 'jane',
//   },
// };

// const {
//   first: firstName,
//   last,
//   city,
//   zip,
//   siblings: { sister: favoriteSibling },
// } = bob;
// console.log(firstName, last, city, zip, favoriteSibling);

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

// console.log(firstName, lastName, sister);


// Destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables
// As Function Arguments

// const bob = {
//   first: 'bob',
//   last: 'sanders',
//   city: 'chicago',
//   siblings: {
//     sister: 'jane',
//   },
// };

// function printPerson({ first, last, city }) {
//   // const { first, last, city } = person;
//   console.log(first, last, city);
// }

// printPerson(bob);



// for of - loops through the values of an iterable object
// String, Array,Map,Set etc  - NOT OBJECT
// unlike forEach - we can use break, continue

const fruits = ['apple', 'orange', 'banana', 'peach'];
const longName = 'John Smith Pepper III';
let shortName = '';

for (const letter of longName) {
  // console.log(letter);
  if (letter === ' ') {
    continue;
  } else {
    shortName += letter;
  }
}
// console.log(shortName);

for (const fruit of fruits) {
  if (fruit === 'banana') {
    // break;
    continue;
  }
  console.log(fruit);
}

// Spread Operator ...
// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them.

const udemy = 'udemy';
const letters = [...udemy];
console.log(letters);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];
const bestFriend = 'arnold';

const friends = [...boys, bestFriend, ...girls];
console.log(friends);

// const newFriends = [...friends];
// reference
const newFriends = friends;
newFriends[0] = 'karina';
console.log(newFriends);
console.log(friends);


// Spread Operator ...
// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them.
// ES2018 - ES8

const person = { name: 'john', job: 'developer' };
const newPerson = { ...person, city: 'chicago', name: 'peter' };
console.log(person);
console.log(newPerson);


// Spread Operator ...
// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them.

const headings = document.querySelectorAll('h1');
const result = document.getElementById('result');
const text = [...headings]
  .map(item => `<span>${item.textContent}</span>`)
  .join('');
console.log(text);

result.innerHTML = text;


// Spread Operator ...
// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them.

// const numbers = [23, 45, 66, 88, 2345];

// console.log(Math.max(...numbers));

// const john = ['john', 'sanders'];

// const sayHello = (name, lastName) => {
//   console.log(`Hello ${name} ${lastName}`);
// };

// sayHello(...john);


// Rest Operator ...
// gathers/collects the items

//arrays
// const fruit = ['apple', 'orange', 'lemon', 'banana', 'pear'];
// const [first, second, ...fruits] = fruit;
// // console.log(first, fruits);

// //objects
// const person = { name: 'john', lastName: 'smith', job: 'developer' };
// const { job, ...rest } = person;
// // const {  ...rest,job } = person;
// // console.log(job, rest);

// const testScores = [78, 90, 56, 43, 99, 65];

// const getAverage = (name, ...scores) => {
//   console.log(name);
//   console.log(scores);
//   let total = 0;
//   for (const score of scores) {
//     total += score;
//   }
//   console.log(`${name}'s average score is ${total / scores.length}`);
// };

// getAverage(person.name, 78, 90, 56, 43);
// getAverage(person.name, ...testScores);


// Array.from and Array.of - NOT ON THE PROTOTYPE
// Array.from
// Array.of
// of creates a new Array instance from a variable number of arguments.

// const example = ['one', 'two', 'three'];
// console.log(example);
// console.log(example.map);
// console.log(example.from);
// console.log(example.of);

// const friends = Array.of('john', 2, true);
// console.log(friends);


// Array.from and Array.of - NOT ON THE PROTOTYPE

// from - returns Array Object from any object with a length property or an iterable object
// from turns array-like/ish into array - string,nodeList,Set

// const udemy = 'udemy';
// console.log(Array.from(udemy));

// function countTotal() {
//   // console.log(arguments);
//   let total = Array.from(arguments).reduce(
//     (total, currNum) => (total += currNum),
//     0
//   );
//   console.log(total);
// }

// countTotal(67, 89, 54, 100);



// Array.from and Array.of - NOT ON THE PROTOTYPE

// from - returns Array Object from any object with a length property or an iterable object
// from turns array-like/ish into array - string,nodeList,Set

// const p = document.querySelectorAll('p');
// const result = document.getElementById('result');
// const second = document.getElementById('second');

// let newText = Array.from(p);
// newText = newText.map(item => `<span>${item.textContent}</span>`).join(' ');

// result.innerHTML = newText;

// const text = Array.from(document.querySelectorAll('p'), item => {
//   return `<span>${item.textContent}</span>`;
// }).join(' ');

// second.innerHTML = text;


// Array includes() - checks if the item is an array
// useful in the conditional statements

const groceries = ['milk', 'bread', 'meat'];

let randomItem = 'lemon';
randomItem = 'milk';

// const isIncluded = groceries.includes(randomItem, 1);
// console.log(isIncluded);

if (groceries.includes(randomItem)) {
  console.log(`Yeah! it's on the list`);
}


// Three methods to convert objects into arrays
// Object.keys() - converts property names into array
// Object.values() - converts property values into array
// Object.entries() - converts both

const person = {
  name: 'john',
  age: 25,
  status: 'student',
};

const result = Object.entries(person);
// console.log(result);

// map method

const newResult = result.map((item) => {
  const [first, second] = item;
  // console.log(first, second);
  return first;
});

// console.log(newResult);

// for of
for (const [first, second] of result) {
  // const  [first, second]= item;
  console.log(first, second);
}

// Set object - stores a collection of unique values of any type

// new Set()
// add(value)
// delete(value)
// clear()
// has(value)

// iterators
// entries(),keys(),values(), forEach()

const unique = new Set();

const random = 'third';

unique.add('first');
unique.add('second');
unique.add(random);
unique.add('first');
unique.add(4);

// const result = unique.delete('third');
// console.log(result);

const result = unique.delete('five');
// console.log(result);

const isValue = unique.has(4);
console.log(isValue);

console.log(unique);


// new Set() - accepts iterable objects

const products = [
  {
    title: 'high-back bench',
    company: 'ikea',
  },
  {
    title: 'albany table',
    company: 'marcos',
  },
  {
    title: 'accent chair',
    company: 'caressa',
  },
  {
    title: 'wooden table',
    company: 'ikea',
  },
];

// const companies = products.map((item) => item.company);
// console.log(companies);

// const uniqueCompanies = new Set(companies);
// console.log(uniqueCompanies);

// const finalCompanies = ['all', ...uniqueCompanies];
// console.log(finalCompanies);

const result = ['all', ...new Set(products.map((item) => item.company))];
console.log(result);


// String includes() - checks if a string contains another string.

// const products = [
//   { title: 'Modern Poster' },
//   { title: 'Bar Stool' },
//   { title: 'Armchair' },
//   { title: 'Leather Chair' },
// ];

// const text = 'a';

// const filteredProducts = products.filter((product) =>
//   product.title.toLowerCase().includes(text)
// );

// console.log(filteredProducts);

// const firstName = 'john';

// const result = firstName.includes('j', 1);

// const product = {
//   title: 'Leather Chair',
// };

// const result = product.title.includes('le');

// console.log(result);


// Array includes() - checks if a string contains another string.
// Array includes - checks if the item is an array

// const groceries = ['milk', 'bread', 'meat'];

// let randomItem = 'lemon';
// randomItem = 'milk';

// const isIncluded = groceries.includes(randomItem);

// // console.log(isIncluded);

// if (groceries.includes(randomItem, 1)) {
//   console.log(`Yeah! it's on the list`);
// }


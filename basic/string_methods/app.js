// tp uppercase
let movie = "Memento";
console.log(movie.toUpperCase());

// to lowercase

console.log(movie.toLowerCase());

// concatenation

let firstName = "Tony";
let lastName = "Rogers";

//1
console.log(firstName + " " + lastName);

//2 string template literals
console.log(`${firstName} ${lastName}`);


// length
console.log(movie.length);

// find the index
console.log(movie[2]);
console.log(movie[movie.length - 1]);

//trim
let song = "  lala   "
console.log(song.trim());

//indexOf
console.log(movie.indexOf("n"));

// charAt
console.log(movie.charAt('3'));

// slice
console.log(movie.slice(1, 5));

// split
console.log(movie.split(''));

// includes
console.log(movie.includes('e'));
console.log(movie.includes('a'));

// replace
console.log(movie.replace('emento', 'agento'));



// String properties and methods
// wrapper String Object, don't memorize methods
let text = ' Peter Jordan';
let result = text.length;
console.log(result);

console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(0));
console.log(text.charAt(text.length - 1));
console.log(text.indexOf('e'));
console.log(text);
console.log(text.trim());
console.log(text.trim().toLowerCase().startsWith('peter'));
console.log(text.includes('eter'));
console.log(text.slice(0, 2));
console.log(text.slice(-3));

// const person = {
//   name: 'peter', // property
//   greeting() {
//     // method
//     console.log("Hey, I'm Peter");
//   },
// };

// console.log(person);

// console.log(person.name);
// person.greeting();


// Template Literals - ES6+
// Backtick characters `` - above tab (left from one)
// Interpolation ${} - insert expression(value)

const name = 'john';
const age = 25;
const sentence = "Hey it's " + name + ' and he is ' + age + ' years old';

const value = `Hey it's ${name} and he is ${age} years old. And here is some simple math ${
  4 + 4
}`;
console.log(value);

console.log(sentence);

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
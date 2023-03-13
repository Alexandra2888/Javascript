let numbers = [1, 2, 3, 4, 5];
let colors = ['red', 'blue', 'green'];
let mixed = ['yellow', 45, null, undefined, NaN, true];
console.log(mixed[2]);


//adding to the end of the array
mixed[mixed.length] = 'Gaming';
console.log(mixed);

//changing the array values
numbers[4] = 25;

//A.METHODS
//1.shift method = remove an array of values from the start

let movies = ['The lake house', 'Memento'];
movies.shift();

//2. unshift = adds to the start of the array
movies.unshift('The Great Gatsby');

//3. pop = pops an item from the end of the array, removes from the end
movies.pop();

//4. push = adds to the end of the array
movies.push('Departed');

//5. slice(starting index, ending index) = returns a piece of the array
let numbers2 = [1, 2, 3, 4, 54, 115, 789, 324];
let num1 = numbers2.slice(1, 4);
let num2 = numbers2.slice(-1);
let num3 = numbers2.slice(-4);

//6. splice(starting index, number of items to be removed) method = change the original array by removing/replacing existing items from an array

//removing
let num4 = numbers2.splice(0, 4);

//removing & replacing
let num5 = numbers2.splice(0, 2, 111, 222);

//adding
let num6 = numbers2.splice(2, 0, 111, 222);

//7.include
const moods1 = ['happy', 'sad', 'satisfied'];
console.log(moods1.includes('happy'));

//8.concat = combine/merge 2/more arrays together
const moods2 = ['frustrated', 'uncertain', 'relaxed'];
console.log(moods1.concat(moods2));

//9.reverse = reverses an array
console.log(moods1.reverse());

//10.join = converts the array to a string
console.log(moods2.join());
console.log(moods2.join(""));
console.log(moods2.join(" "));
console.log(moods2.join("-"));


//B.Nesting => array of arrays
const favs = [
    ['Endgame', 'Infinity Wars', 'Civil Wars', 'Iron Man', 'Thor'],
    ['Batman', 'Superman', 'Wonde Woman'],
    ['Spiderman', 'Antman', 'Hulk', 'Haweye'],
    ['Nolan', 'Snider', 'Reeves'],
    ['DiCaprio', 'Hardy', 'Toby', 'Andrew']
];
console.log(favs[1]);
console.log(favs[4]);
console.log(favs[4][0]);
console.log(`${favs[3][2]} is directing the new Batman movie`);

//C.CONST with ARRAYS
//best practice => we can modify the array itself but cannot redeclare it => prevents bugs



// Powerfull Array Methods
// forEach, map, filter, find, reduce
// Iterate over array - no for loop required
// Accept CALLBACK function as an argument, calls Callback against each item in a array. Reference Item in the Callback Paramater.

const numbers = [0, 1, 2, 3, 4];

// show all numbers

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}


// forEach
// does not return new array

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
];

function showPerson(person) {
  console.log(person.position.toUpperCase());
}

// people.forEach(showPerson);

people.forEach(function (item) {
  console.log(item.position.toUpperCase());
});


// map
// does return a new array
// does not change size of original array
// uses values from original array when making new one

const people2 = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'the boss' },
];

const ages = people2.map(function (person) {
  return person.age + 20;
});
const newPeople = people2.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  };
});

const names = people2.map(function (person) {
  return `<h1>${person.name}</h1>`;
});

document.body.innerHTML = names.join('');

console.log(names);


// filter
// does return a new array
// can manipulate the size of new array
// returns based on condition

const people1 = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'the boss' },
];

const youngPeople = people1.filter(function (person) {
  return person.age <= 25;
});

const developers = people1.filter(function (person) {
  return person.position === 'senior developer';
});

console.log(developers);



// reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - current iteration/value

const people3 = [
  { name: 'bob', age: 20, position: 'developer', id: 1, salary: 200 },
  { name: 'peter', age: 25, position: 'designer', id: 2, salary: 300 },
  { name: 'susy', age: 30, position: 'the boss', id: 3, salary: 500 },
  { name: 'anna', age: 35, position: 'the boss', id: 4, salary: 500 },
];

const total = people3.reduce(function (acc, currItem) {
  console.log(`total ${acc}`);
  console.log(`current money : ${currItem.salary}`);
  acc += currItem.salary;
  return acc;
}, 500);

console.log(total);


// 1. create "fruits" array and store some fruit values
// 2. setup the last item as number (random)
// 3. assign first fruit to the variable
// 4. re-assign last array item to the actual fruit
// 5. log both first fruit variable and entire fruits array



const fruits = ['apple', 'banana', 'orange', 45];

const firstFruit = fruits[0];
fruits[3] = 'lemon';
console.log(firstFruit, fruits);

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
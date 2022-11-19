const adress = {
    country: 'Turkey',
    city: 'Istambul'
}

console.log(adress);
console.log(adress.city);
console.log(`${adress.country} is great`);

const person = {
    name: "Sam",
    age: 31,
    "Full adress": "Athens, Greece",
    job: "Captain America",
    1985: "DOB"
}

console.log(person);

// array brackets
console.log(person["age"]);
console.log(person["1985"]);
console.log(person["Full adress"]);

//modifying objects
const moviesRating = {
    Deadpool: 9.1,
    "X-Men Days of Future Past": 7.9,
    "Thor Ragnorak": 9.4,
    "Wonder Woman": 9,
    Superman: 9
}

moviesRating["Deadpool"] = 9.3;
moviesRating["Superman"] = 10;
console.log(moviesRating);

// updating objects => cereating more key-value pairs
moviesRating["The Winter Soldier"] = 9.9;

// nesting objects within objects
// const user = {
//     thunderBolt37: {
//         name: "Ross",
//         job: "classified"
//     },
//     paygrade: "A"
// }
// console.log(user);
// console.log(user["thunderBolt37"]);
// console.log(user["thunderBolt37"].name);
// console.log(user["thunderBolt37"]["job"]);

// nesting arrays with objects
// const user = {
//     thunderBolt37: {
//         name: "Ross",
//         job: "classified"
//     },
//     paygrade: "A",
//     hobbies: ["golf", "walk", "give out orders"]
// }
// console.log(user);
// console.log(user["hobbies"]);
// console.log(user["hobbies"][0]);

// nesting objects wiothin arrays
const user = [
    {
        name: "Tony",
        job: "complicated"
    },
    "compassionate",
    ["making suits", "destroying suits"]
]
console.log(user);
console.log(user[0]);
console.log(user[0].job);
console.log(`${user[0].job} is Tony's job`)


//reference type
//eg
let obj1 = { value: 10 };
let obj2 = obj1;
let obj3 = { value: 10 };
// obj1 === obj2 true
//obj1 === obj3 false


//CONTEXT VS SCOPE
//eg
function x () {
    let a = a;
}
console.log(this);

//eg
const obj4 = {
    a: function () {
        console.log(this);
    }
}
//undefined


//INSTANTIALIZATION
//eg
class Player {
    constructor(name, type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
    }
    play() {
        console.log(`Wee, I'm a ${this.type}`);
    }
}
const wizard1 = new Wizard('S', "healer");
const wizard2 = new Wizard("H", "dark magic");


//CLASSICAL INHERITANCE
//eg
let Player = function (name, type) {
    this.name = name;
    this.type = type;
}
Player.prototype.introduce = function () {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    let wizard1 = new Wizard('S', "healer");
    let wizard2 = new Wizard("H", "dark magic");
    wizard.play = function () {
        console.log(`Wee, Im' ${this.type}`)
    }
}

//should't use prototype!
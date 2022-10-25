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



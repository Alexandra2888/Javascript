// eg object:

const wizard = {
    name: "John",
    age: 34,
    hobby: "soccer",
    isMarried: false,
    spells: ["abrakadabra", "shazam", "boo"],
    friends: ['Michael', 'Peter', 'Steven'],
    shouting: function () {
        console.log("AHHHH!");
    },
};

//challenge
/* John has 3 friends and his best friend is ccalled Michael*/
console.log(`${wizard.name} has ${wizard.friends.length} friends and his best friend is called ${wizard.friends[0]}`)

console.log(wizard);
console.log(wizard.age);
console.log(wizard['name']);
console.log(wizard.shouting());

const interestedIn =
    prompt('What do you want to know about wizard? Choose betweeen name, age, hobby, isMarried and spells')
console.log(wizard[interestedIn])

if (wizard[interestedIn]) {
    console.log(wizard[interestedIn]);
} else {
    console.log('Error! Choose betweeen name, age, hobby, isMarried and spells')
}

//challenge
/* John is 34 years, is (not) married and can sing 'laa'  */


console.log(`${wizard.name} is ${wizard.age}, ${wizard.isMarried ? 'is' : 'is not'} married and can sing ${wizard.shouting}`)

//add properties to an object:

wizard.favouriteFood = "pizza";
console.log(wizard.favouriteFood);

wizard[location] = 'Portugal';

//change a property:

wizard.isMarried = true;
console.log(wizard.isMarried);

//get properties from array:

console.log(wizard.spells[1]);

//function in an object:

console.log(wizard.shouting);

//for an array:

const list = [
    {
        username: "Andy",
        password: "secret"
    },
    {
        username: "Jess",
        password: "123"
    }
]

console.log(list[1].password);


//advanced concepts:

//reference type:

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };
console.log(object1 === object2); //true
console.log(object1 === object3); //false

object1.value = 15;
console.log(object1.value); //15
console.log(object2.value); //15 references to object1
console.log(object3.value); //10 cretaes anew object

//context:

console.log(this);

console.log(this === window)

//instantialization:

class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`hi I'm ${this.name}, I'm a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
    super(name, type)
    }
    play() {
        console.log(`WEEE, Im'm a ${this.type}`)
    }
}
const wizard1 = new Wizard('Harry Potter', 'Healer');
const wizard2 = new Wizard('Draco Malfoy', 'Dark Magic');
console.log(wizard1);
console.log(wizard2);


class Hero extends Player {
    constructor(name, type, play) {
        super(name, type, play)
         console.log(`WEEE, Im'm a ${this.type}`)
    }
}

const hero1 = new Hero('Dane', 'Hero', 'LAAAA')
console.log(hero1);
console.log(wizard2.introduce());


//methods on objects

// property NAMES


const openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    }
}

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);
//property VALUES:


const values = Object.values(openingHours);
console.log(values);

//loop over entire object:

const entries = Object.entries(openingHours);
//console.log(entries);


//key, value
for (const [key, { open, close }] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`)
}


//destructuring:


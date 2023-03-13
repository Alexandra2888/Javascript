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

let favColors2 = {
    colorOne: 'Green',
    colorTwo: 'Blue',
    colorThree: 'Brown'
}

let values2 = Object.values(favColors2);
console.log(values2);
values2.forEach((value) => console.log(value) )

//loop over entire object:

const entries = Object.entries(openingHours);
//console.log(entries);

let favColors3 = {
    colorOne: 'Green',
    colorTwo: 'Blue',
    colorThree: 'Brown'
}

let entries2 = Object.entries(favColors3);
console.log(entries2);
entries2.forEach((entry) => console.log(entry))



//key, value
for (const [key, { open, close }] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`)
}


let favColors = {
    colorOne: 'Green',
    colorTwo: 'Blue',
    colorThree: 'Brown'
}

let keys = Object.keys(favColors);
console.log(keys);

keys.forEach((key) => console.log(key));

//destructuring:



// Objects - key/value pairs  methods
// dot notation

const person = {
  name: 'john',
  lastName: 'peters',
  age: 25,
  education: false,
  married: true,
  siblings: ['anna', 'susan', 'peter'],
  greeting() {
    console.log('Hello my name is JOHN');
  },
};

const age = person.age;
console.log(age);
person.name = 'bob';
console.log(person.name);
console.log(person.siblings[2]);
person.greeting();


// Objects Basics

/*
Objects are collections of key (property) value pairs
Property values can be strings, numbers, booleans, arrays and functions however if the property value is a function it's called a method
*/

// object literal syntax,{}
// dot notation

const person = {
  name: 'john',
  age: 25,
  married: true,
  siblings: ['anna', 'peter'],
  greet: function (name) {
    console.log(`Hello, my name is ${name}`);
  },
  sayHello(name) {
    console.log(`Hello, my name is ${name}`);
  },
};

console.log(person.name);

const name = person.name;
console.log(name);
person.age = 60;
person.city = 'chicago';
// delete property
// delete person.siblings;
const siblings = delete person.siblings;
console.log(siblings);

console.log(person);



// nested objects
// set variable as property value
// dot notation vs bracket notation

const age2 = 40;
let random = 'random-value';
random = 'age2';
const person = {
  name: 'john',
  age: age2,
  married: true,
  siblings: ['anna', 'peter'],
  greet: function (name) {
    console.log(`Hello, my name is ${name}`);
  },
  sayHello(name) {
    console.log(`Hello, my name is ${name}`);
  },
  job: {
    title: 'developer',
    company: {
      name: 'coding addict',
      address: '123 main street',
    },
  },
  'random-value': 'random',
};

console.log(person.job.title);
console.log(person.job.company.address);
console.log(person);
console.log(person['name']);
console.log(person['random-value']);

console.log(person[random]);


// Blue Print
// Factory Functions and Constructor Functions
// Factory Functions

// const john = {
//   firstName: 'john',
//   lastName: 'anderson',
//   fullName: function () {
//     console.log(
//       `My full name is ${this.firstName} ${this.lastName} and I love JS`
//     );
//   },
// };
// const bob = {
//   firstName: 'peter',
//   lastName: 'sanders',
//   fullName: function () {
//     console.log(`My full name is ${this.firstName} ${this.lastName}`);
//   },
// };

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(
        `My full name is ${this.firstName} ${this.lastName} and I love JS`
      );
    },
  };
}

const john = createPerson('john', 'anderson');
john.fullName();
const bob = createPerson('susy', 'apple');
bob.fullName();
const susy = createPerson('bob', 'jordan');
susy.fullName();


// Blue Print
// Factory Functions and Constructor Functions
// Constructor Functions
// new - creates new object, points to it, omit return

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} and I love React`
    );
  };
  console.log(this);
}
const john1 = new Person('john1', 'anderson');
john.fullName();
const bob1 = new Person('bob1', 'jordan');
bob.fullName();

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(
        `My full name is ${this.firstName} ${this.lastName} and I love JS`
      );
    },
  };
}


/*
Prototypal Inheritance Model
Javascript uses prototypal inheritance model. That means that every constructor function/class has a prototype property that is shared by every instance of the constructor/class. So any properties and methods or prototype can be acessed by every instance. prototype property returns a object
*/

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
}

const john2 = new Account('john2', 200);
const bob2 = new Account('bob2', 0);

Account.prototype.bank = 'CHASE';
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};
console.log(john2.bank);
console.log(bob2);

john.deposit(300);
bob.deposit(1000);


/*
Property Lookup
If child does not have ask parent
Everything in JS is an Object
*/

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
  // this.bank = 'Bank Of America';
}

const john3 = new Account('john3', 200);
const bob3 = new Account('bob3', 0);

Account.prototype.bank = 'CHASE';
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};
// console.log(john.bank);
console.log(bob3);
console.log({});
console.log([]);

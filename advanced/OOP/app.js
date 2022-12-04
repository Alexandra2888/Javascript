//eg
const elf = {
    name: 'Orwell',
    weapon: 'bow',
    attack() {
        return 'attack with' + elf.weapon;
    }
}
elf.attack();

//eg
const elf2 = {
    name: 'Sally',
    weapon: 'bow',
    attack() {
        return 'attack with' + elf.weapon;
    }
}


//FACTORY FUNCTIONS

//eg
function createElf(name, weapon) {
    return {
        name: name,
        weapon: weapon,
        attack() {
            return 'attack with' + elf.weapon;
        }
}
}

//eg
const peter = createElf('Peter', 'stones');
peter.attack();
const sam = createElf('Sam', 'fire');
sam.attack();


//TRANSFORM FUNCTION

function createElf(name, weapon) {
    let newElf = Object.create(elfFunction);
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}


//TRANSFORM ATTACK

elf.protottipe.attack = function () {
    return 'attack with' + elf.weapon;
}


function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}
Elf.prototype.attack = function () {
    return 'attack with' + this.weapon;
}


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

//OBJECT CREATE VS CLASS
Object.create();

//THIS -> new binding

function Person(name, age) {
    this.name = name,
    this.age =age
}
const Person1 = new Person('x', 55);
Person1


//explicit binding
const person3 = {
    name: 'K',
    age: 40,
    hi: function () {
        console.log('hi' + this.setTimmeout)
    }.bind(window)
}
person3.hi();


//INHERITANCE
class Character {
    constructor(name, weapon) {
        this.name = name,
        this.weapon = weapon
    }
    attack() {
        return 'attack with' + this.weapon;
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type;
    }
}

const Dolby = new Elf('Dolby', 'cloth', 'house');
Dolby.attack();

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        return 'strongest fort';
    }
}

const Shreck = new Ogre('Shreck', 'club', 'green');
Shreck.attack();

//DYNAMIC SCOPING
let movie = "Avatar";

function otherMovie(movieName) {
    console.log(movie, movieName);
}

function otherOtherMovie() {
    let movie = "District 9";

    otherMovie("The GodFather")
}

otherOtherMovie();


let myContext = {
    movie: "Black panther 2",
};
function otherMovie(movieDesc) {
    console.log(this.movie, movieDesc);
}

function otherOtherMovie() {
    let myContext = {
        movie: "Avatar"
    };
    otherMovie.call(myContext, "is coming");
}
otherMovie.call(myContext, "is not coming");

otherOtherMovie();

//PROTOTYPES & PROTOTIPAL CLASS

class Workshop {
    ask(question) {
       // do smth
    }
}

// instance of the Workshop class -> new Workshop() -> new keyword instanciates a class instance



//PROTOTYPE CHAIN

//DUNDER PROTO

function Workshop(teacher) {
    this.teacher = teacher;
}

Workshop.prototype.ask = function (question) {
    console.log(this.teacher, question);
}

let js = new Workshop("Teddy");

console.log(js.constructor === Workshop);

console.log(js.__proto_ === Workshop.prototype);

console.log(js.__proto__);

console.log(Workshop.prototype);

console.log(Object.getPrototypeOf(js));

console.log(Object.getPrototypeOf(js) === Workshop);


//PROTOTYPAL INHERITANCE

function anotherWorkshop(teacher) {
    Workshop.call(this, teacher);
}

anotherWorkshop.prototype = Object.create(Workshop.prototype);

anotherWorkshop.prototype.speakUp = function (msj) {
    this.ask(msj);
}

let jsClass = new anotherWorkshop("Noah");
jsClass.speakUp("teaches Js");



//FIRST CLASS

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        return (
            "`The name of the animal is ${this.name} and ${this.age}`"
        )
    }
}


//FIRST INSTANCES

const firstAnimal = new AnimationPlaybackEvent('Rex', 2);
console.log(firstAnimal);
console.log(firstAnimal.getInfo());

const secondAnimal = new Animal('Barney', 5);
console.log(secondAnimal);
console.log(secondAnimal.getInfo());

INHERITANCE

class Dog extends Animal {
    constructor(age, name, breed) {
        super(name, age)
        this.breed = breed;
    }
    bark() {
        return 'wooof'
    }
}

class Cat extends Animal {
    constructor(name, age, weight) {
        super(name, age)
        this.weight = weight;
    }
    meow() {
        return 'meeeow'
    }
}

const myDog1 = new Dog('Rex', 2, 'German Sheperd');
console.log(myDog);
console.log(myDog.breed);
console.log(myDog.bark());

const myCat1 = new Cat('Persian', 5, '5kg');
console.log(myCat.getInfo);
console.log(myCat.weight);
console.log(myCat.meow());


//ENCAPSULATION

class Cat extends Animal {
    #weight;   //mark as private
    constructor(name, age, weight) {
        super(name, age)
        this.#weight = weight;
    }
    getWeight() {        //getter
        return this.#weight
    }
    setWeight() {        //setter
        this.#weight = weight;
    }
}

const myCat2 = new Cat('Whiskers', 5, '5kg');
console.log(myCat.getWeight);
myCat.setWeight('6kg');
console.log(myCat.setWeight());



//POLYMORPHISM

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    makeSound() {
        return (
            'Some nice sound made'
        )
    }

}


class Dog extends Animal {
    constructor(age, name, breed) {
        super(name, age)
        this.breed = breed;
    }
    makeSound() {
        return 'wooof'
    }
}


class Cat extends Animal {
    constructor(name, age, weight) {
        super(name, age)
        this.weight = weight;
    }
    makeSound() {
        return 'meeeow'
    }
}

const myDog = new Dog('Rex', 2, 'German Sheperd');
const myCat = new Cat('Whiskers', 5, '5kg');

console.log(myDog.makeSound());
console.log(myCat.makeSound());


//ABSTRACT CLASS

class Animal {
    constructor(name, age) {
        this.name - name;
        this.age = age;
        if (this.constructor == Animal) {
            throw new Error("Can't create an instance of Abstract class!")
        }
    }

    makeSound() {
        throw new Error("abstract method doesn't have an implementation")
    }
}


class Dog extends Animal {
    constructor(age, name, breed) {
        super(name, age)
        this.breed = breed;
    }
    makeSound() {
        return 'wooof'
    }
}

class Cat extends Animal {
    constructor(name, age, weight) {
        super(name, age)
        this.weight = weight;
    }
    // makeSound() {
    //     return 'meeeow'
    // }
}

// const myAnimal = new Animal('Barney', 3) -> can't instantiate anymore
const myDog2 = new Dog('Rex', 2, 'Gernman Sheperd');
const myCat3 = new Cat('Whiskers', 5, '5kg');
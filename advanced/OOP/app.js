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


//expliocit binding
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





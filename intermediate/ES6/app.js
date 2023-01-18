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


//eg
const player = "Bobby";
let experience = 100;
let wizardLevel = false;
if (experience < 90) {
    let wizardLevel = true;
    console.log(wizardLevel);
}
console.log(wizardLevel);

//eg
const player2 = obj.player2;
const experience2 = obj.experience;
let wizardLevel2 = obj.wizardLevel2;
// or
// const { player2, experience2 } = obj;
// let wizardLevel2 = obj;


//OBJECT PROPERTIES

//eg:
const name2 = 'John Snows';
const object = {
    [name]: 'hello',
    ['ray' + 'smith']: 'hihi'
}

//eg:
const a = "Simon";
const b = "true";
const c = {};
const obj = {
    a,
    b,
    c
}
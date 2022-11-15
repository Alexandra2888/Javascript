function a(){
    console.log('hi');
}
a();  // or a.call() or a.apply();

//eg
const wizard = {
    name: 'Merlin',
    health: 50,
    heal() {
        return this.health = 100;
    }
}
wizard.heal();

//eg
const archer = {
    name: 'Robin Hood',
    health: 30
}
wizard.heal.call(archer);

//eg
const wizard2 = {
    name: 'Merlin',
    health: 50,
    heal(num1, num2) {
        return this.health += num1 + num2;
    }
}

    // eg
// const archer2 = {
//     name: 'Robin Hood',
//     heal: 30,
//     wizard2.heal.call(archer2, 50, 30)
// }
// console.log(archer2)

const archer3 = {
    name: 'Robin Hood',
    health: 30
}

const healthArcher = wizard3.heal.bind(archer3, 100, 30);
console.log(archer3);
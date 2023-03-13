//eg
function one() {
    return 1;
}
one();

const obj = {
    two: () => {
        return 2;
    }
}
obj.two();


//eg
const first = () => {
    const greet = "Hi";
    const second = () => {
        alert(greet);
    }
    return second;
}
const newFunction = first();
newFunction();


//eg
function three() {
    return 3;
}
three.call();

//eg
const four = new Function('return 4');
four();

//eg
function woohoo() {
    console.log('woohoo')
}
woohoo.yell = 'aaah';
// const specialObj = {
//     yaell: 'aaah',
//     name: 'woohoo',
//  ():  console.log('woohoo')
// }

//eg
//1
 var stuff = function () { };

//2
 function a(fn) {
     fn();
}
a(function () { console.log('hi') })

//3
function b() {
    return function c() {console.log('bye')}
}

//eg
for (let i = 0; i < 5; i++) {
    function a(){}
}

//eg
function a(param = 6) {
    return param;
}

//eg
function letAdamLogin() {
    let array = [];
    for (let i = 0; i < 10000; i++) {
        array.push(i);
    }
    return 'Access granted to Adam';
}

//eg
function letEvaLogin() {
    let array = [];
    for (let i = 0; i < 10000; i++) {
        array.push(i);
    }
    return 'Access granted to Eva';
}
letEvaLogin();
letAdamLogin();

//what data to use
let array = [];
for (let i = 0; i < 1000; i++) {
    array.push(i);
}
return giveAccessUser(user);

//eg
function letAdminLogin(admin){
    let array = [];
    for (let i = 0; i < 5000; i++) {
        array.push(i);
    }
    return giveAccessAdmin(admin);
}

//eg
function authentificate(verify) {
    let array = [];
    for (let i = 0; i < verify; i++) {
        array.push(i);
    }
    return true;
}

//eg
function sing(person) {
return 'la laa my name is'
}

//eg
function letPerson(person, fn){
    if (person.level === 'admin') {
    return fn(50000)
    } else if (person.level === 'user') {
        return fn(100000)
    }
}
letPerson({ level: 'admin', name: 'Sally', sing })

//eg
const multiplyBy = (num1) => (num2) => num1 * num2;
multiplyBy(4, 6);

//closures
function a() {
    let grandpa = 'grandpa';
    return function b() {
        let father = 'father';
        return function c(){
            let son = 'son';
            return `${grandpa} > ${father} > ${son}`
        }
    }
}
a()()()
const one = a();
b();

//eg
const boo = (string) => (name) => (name2) => console.log(`${string} ${name} ${name2}`);
boo('hi');

//eg
function callMeMaybe() {
    setTimeout(function () {
        console.log(callMe)
    }, 4000);
    const callMe = 'Hi';
}
callMeMaybe();




//CLOSURES & MEMORY

//eg
// memoryHeavyDuty(index) {
//     const bigArray = new Array(7000).fill();
//     console.log('created');
//     return bigArray[index];
// };
// heavyDuty(688);


//eg
// const getHeavyDuty2 () {
//     const bigArray = new Array(7000).fill();
//     console.log('created again');
//     return function (index) {
//         return bigArray[index]
//     }
// }



//CLOSURES & ENCAPSULATION

//eg
const nuclearButton = () => {
    let timeOutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        return '*'
        setInterval(passTime, 1000)
        return {
            launch: launch,
            totalPeaceTime: totalPeaceTime
        }
    }
}
const ohno = makeNuclearButton();
ohno.totalPeaceTime


//eg
// let view;
// function initialize() {
//     view = '* ';
//     console.log('view has been set');
// }
// initialize();
// console.log(view);

//SOLUTION:
// let view;
// function initialize() {
//     let called = 0;
//     return function () {
//         if (called > 0) {
//             return;
//         } else {
//             view = '*';
//             called++;
//             console.log('view has been set');
//         }
//     }
// }
// const startOnce.initialize()
// startOnce()
// console.log(view)

//eg
// const array1 = [1, 2, 3, 4];
// for (var i = 0; i < array1.length; i++) {
//     setTimeout(function () {
//     console.log('I am at index', i)
// }, 3000)
// }

//SOLUTION
// const array1 = [1, 2, 3, 4];
// for (var i = 0; i < array.length; i++) {
//     (function (closure I) {
//         setTimeout(function () {
//             console.log('I am at index', + array1[closure i])
//         }, 3000)
//     })(I)
// }


//PROTOTYPAL INHERITANCE


//eg
let dragon = {
    name: 'Tania',
    fire: true,
    fight() {
        return 5;
    },
    sing() {
        return `I am ${this.name}, the breather of fire`
    }
}
let lizard = {
    name: 'Kiki',
    fight() {
        return 1;
    }
}

const singLizard = dragon.sing.bind(lizard);
console.log(singLizard());
lizard.isPrototypeOF(lizard);
dragon.isPrototypeOF(lizard);
for (let prop in lizard) {
    if (lizard.hasOwnProperty(prop)) {
        console.log(prop);
    }
}

//EXTEND THE FUNCTIONALITY OF A BUILT-IN OBJECT
//1. date object, to have nmew method 'lastNewYear()' which shows you last year format YYYY
//newDate('1900-10-10').lastYear()

//SOLUTION
Date.prototype.lasstYear = function () {
    console.log(this);
    return this.getFullYear()-1
}
new Date('1990-10-10').lasstYear();

//2 modify map to print '*' at the end of each item

//SOLUTION
Array.prototype.map() = function () {
    let Arr = [];
    for (let i = 0; i < this.length; i++) {
        Arr.push((this[i] + '*'))
    }
    return Arr;
}
console.log([1, 2, 3].map());


//CLOSURES

function book(name) {
    setTimeout(function otherBook() {
        console.log(name);
    }, 500)
}

book("Two Towers");

function ask(question) {
    return function otherQuestion() {
        console.log(question)
    };
}
let myQuestion = ask("Really?");
myQuestion();


let movie = "The Revenant";
let myMovie = function () {
    console.log(movie);
}

myMovie();

movie = "Django Unchained";


myMovie();

for (var i = 1; i <= 3; i ++) {
    setTimeout(function () {
        console.log(`i: ${i}`);
    }, i * 1000);
}


for (var i = 1; i <= 3; i++) {
    let j = i;
    setTimeout(function () {
        console.log(`j: {j}`);
    }, j * 1000);
}


for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(`i: ${i}`);
    }, i * 1000);
}



// Closure
// closure gives you an access to an outer function's scope from an inner function
// make private variables with closures

function outer() {
  let privateVar = 'secret';
  function inner() {
    console.log(`hello there secret is : ${privateVar} `);
  }
  return inner;
  inner();
}
// console.log(privateVar);

outer()();

const value = outer();
console.log(value);
value();


// Closure

function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }
  return showBalance;
}

newAccount('susan', 500)();

const john = newAccount('john', 300);
const bob = newAccount('bob', 1000);

john();
bob();



// Closure

function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }
  function deposit(amount) {
    balance += amount;
    showBalance();
  }
  function withdraw(amount) {
    if (amount > balance) {
      console.log(`Hey, ${name}, sorry not enough funds`);
      return;
    }
    balance -= amount;
    showBalance();
  }
  return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
}

const john1 = newAccount('john1', 1000);
const bob1 = newAccount('bob1', 1000);

john.showBalance();
john.deposit(400);
john.deposit(1000);
john.withdraw(400);
john.balance = 10000;
john.withdraw(2001);
bob.showBalance();
bob.deposit(400);

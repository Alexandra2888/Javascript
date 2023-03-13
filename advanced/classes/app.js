//CLASSES


class Workshop {
    constructor(teacher) {
        this.teacher = teacher;
    }
    ask(question) {
        console.log(this.teacher, question);
    }
}

let markup = new Workshop("John");
console.log(typeof Workshop);

console.log(markup);

let js = new Workshop("Jane");
console.log(js);

markup.ask("teaches HTML???");
js.ask("teaches JS???");


// EXTENDS

class AnotherWorkshop extends Workshop {
    speakUp(msj) {
        this.ask(msj);
    }
}

let python = new AnotherWorkshop("Julian");
python.speakUp("teaches Python???");


//SUPER

class anotherWorkshop {
    ask(msj) {
        super.ask(msj);
    }
}

let react = new AnotherWorkshop("Trevor");
react.ask("teaches react???")


class Account {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
  }
  bank = 'Chase';
  deposit(amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  }
}

const john = new Account('john', 0);
console.log(john);
console.log(john.name);
john.deposit(500);
console.log(john.bank);

const bob = new Account('bob', 700);
console.log(bob);
console.log(bob.name);
bob.deposit(1000);
console.log(bob.bank);


/*
ES6 Classes - Syntactic Sugar
Prototypal Inheritance

*/

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
  // this.bank = 'Bank Of America';
}

const john1 = new Account('john1', 200);
const bob1 = new Account('bob1', 0);

Account.prototype.bank = 'CHASE';
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};
console.log(john.bank);
console.log(bob);

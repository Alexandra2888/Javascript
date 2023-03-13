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


// call - runs instantly, arguments - list of items

const john = {
  name: 'john',
  age: 24,
  greet: function () {
    console.log(this);
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
  },
};
const susan = {
  name: 'susan',
  age: 21,
};

// john.greet();

function greet() {
  console.log(this);
  console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
}
// this will fail

// susan.greet();
// greet();
// const secondGreet = john.greet;
// secondGreet();

greet.call(john);
greet.call(susan);
greet.call({ name: 'peter', age: 30 });


// call - runs instantly, arguments - list of items
// apply - runs instantly, arguments - array of items
// bind - assign, use later, arguments - list of items
const john2 = {
  name: 'john2',
  age: 24,
};
const susan2 = {
  name: 'susan2',
  age: 21,
};

function greet(city, country) {
  console.log(this);
  console.log(
    `Hello, I'm ${this.name} and I'm ${this.age} years old and I live in ${city}, ${country}`
  );
}

// assign, call it later
const susanGreat = greet.bind(susan, 'toronto', 'ca');
susanGreat();

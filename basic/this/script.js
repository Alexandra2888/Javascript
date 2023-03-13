
//eg
const obj = {
    name: 'Billy',
    sing() {
        return 'lala' + this.name;
    },

singAgain() {
        return 'lalala' + this.name + '!'
    }
}
singAgain();
// 'lalala Billy'

//eg
function importantPerson() {
console.log(this.name + '!')
}
const name = 'Sunny';
const obj1 = {
    name: 'Jacob',
    importantPerson: importantPerson
}
// 'Sunny' is the property of the global object which we created

//eg
var b = {
    name: 'jay',
    say() {
        console.log(this)
    }
}

var c = {
    name: 'jay',
    say() {
        return function () {
            console.log(this)
        }
    }
}
var d = {
    say() {
        return () => {
            console.log(this)
        }
    }
}
d.say()()
// {name: 'jay', say[Function]}


// this
// points to the left of the dot

const john = {
  firstName: 'john',
  lastName: 'anderson',
  fullName: function () {
    console.log(this);
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};
const bob = {
  firstName: 'peter',
  lastName: 'sanders',
  fullName: function () {
    console.log(this);
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};

john.fullName();
bob.fullName();


/* In Reg Functions (not arrow) "this"
determined by "HOW"!!! a function is invoked (left of .)

defaults to global - window
arrow functions - pump the breaks
*/

// console.log(this);

function showThis() {
  console.log(this);
}

const john1 = {
  name: 'john1',
  showThis: showThis,
};
const bob1 = {
  name: 'bob1',
  showThis: showThis,
};

john.showThis();
bob.showThis();

showThis();
const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');

btn1.addEventListener('click', showThis);
btn2.addEventListener('click', showThis);
btn2.addEventListener('click', function () {
  showThis();
});



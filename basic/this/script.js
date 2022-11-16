
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
// 'Sunny' is the propererty of the global object which we created

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


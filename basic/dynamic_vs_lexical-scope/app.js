const a = function () {
    console.log('a', this);
    const b = function () {
        console.log('b', this);
        const c = {
            hi: function () {
                console.log('c', this)
            }
        }
        c.hi();
    }
    b();
}
a();

//eg
const obj = {
    name: 'Billy',
    sing() {
        console.log('a', this);
        var anotherFunc = function () {
            console.log('b', this);
        }
        anotherFunc();
    }
}

//eg
const obj2 = {
    name: 'Billt',
    sing() {
        console.log('a', this);
        var anotherFunc2 = function(){
            console.log('b', this);
        }
        return anotherFunc2.bind(this);
    }
}

//eg
const obj3 = {
    name: 'Billy',
    sing: function () {
        console.log(this);
        var self = this;
        var anotherFunc3 = function () {
            console.log(self);
        }
        return anotherFunc3;
    }
}
obj3: sing()()

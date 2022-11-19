let obj1 = {
    name: 'Yao',
    password: '123'
}
let obj2 = obj1;
obj2.password = 'easypeasy';
console.log(obj1);
console.log(obj2);

//eg
var c = [1, 2, 3, 4, 5];
var d = c;
d.push(36447474747);
console.log(c);

//eg
let obj = { a: 'a', b: 'b', c: 'c' };
let clone = Object.assign({}, obj);
obj.c = 5;
console.log(clone);
let clone2 = { ...obj };
console.log(clone2);
let superClone = JSON.parse(JSON.stringify(obj));


//eg
if (name = "B") {
    alert("Hi, B")
} else {
    alert("I don't know you")
}


//eg
if (name = "B") {
    alert("Hi, B")
} else if (name = "S") {
    alert("Hi S")
} else {
    alert("I don't know you")
}

//Amazon shopping

const user = {
    name: 'K',
    active: true,
    cart: [],
    purchases: []
}
purcahseItem

//STEPS
/*
1. add items to cart
2. add 3% tax to item in cart
3. buy item cart -> purchase
4. empty cart
5. bonus = accept refund + track user history
 */


//SOLUTION:

let AmazonHistory = [];
const compose2 = (f, g) => (...args) => f(g(...args));
purchaseItem(
    emptyCrat,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user, { name: 'laptop', price: 200 });


function purcahseItem(...fns) {
    return fns.reduce(compose);
}

function addItemToCart(user, item) {
    AmazonHistory.push(user)
    const updateCart = user.cart.concat(item);
    return Object.assign({}, user, {
        cart: 'Update cart'
    })
}



















//PURE FUNCTIONS

//eg
const array = [1, 2, 3];
function mutateArray(arr) {
    arr.pop();
}

function mutateArray2(arr) {
    arr.array.forEach(item => {
        arr.push(1);
    });
}
mutateArray(array);
mutateArray2(array);
console.log(array);

//eg
const array2 = [1, 2, 3];
function removeLastItem(arr) {
    const newArray = [].concat(arr);
    newArray.pop();
    return newArray;
}

function multiplyByTwo(arr) {
    return arr.map(item => item * 2);
}

const array4 = removeLastItem(array);
const array3 = multiplyByTwo(array);
console.log(array, array2, array3, array4);

//eg
function a(num1, num2) {
    return num1 + num2;
}

function b(num) {
    return num * 2;
}

b(a(3, 4));


//IDEMPOTENT

//eg

function notGood(num) {
    console.log(num);
}
Math.abs(Math.abs(-50));


//IMPERATIVE VS DECLARATIVE

//eg
for (let i = 0; i < 1000; i++) {
    console.log(i);
}
[1, 2, 3].forEach(item => console.log(item));


//IMMUTABILITY

//eg
const obj = {
    name: 'A'
}

function clone(obj) {
    return { ...obj };  //this is pure
}

function updateName(obj) {
    const obj2 = clone(obj);
    obj2.name = 'Nana';
    return obj;
}

const updateObj = updateName(obj);
console.log(obj);
console.log(obj, updateObj);


//HOF

const hof = (fn) => fn(5);
hof(function a(x) {
    return x;
})

//CLOSURE

const closure = function () {
    let count = 55;
    return function getCounter() {
        return count;
    }
}
const getCounter = closure();
getCounter();

//CURRYING

//eg
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const curriedMultiplyBy5 = curriedMultiply(5);
curriedMultiplyBy5(4);


//PARTIAL APPLICATION

const multiply2 = (a, b, c) => a * b * c;
const partialMultuplyBy5 = (4, 10) = multiply.bind(null, bind);
partialMultuplyBy5(4, 10);


//MEMOIZATION
function addTo80(n) {
    console.log('long time');
    return n + 80;
}
let cache = {
    5: 85
}

function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n]
    } else {
        cache[n] = 5 + 80
        return cache[n]
    }
}


//COMPOSE

const compose = (f, g) => (data) => f(g(data));
const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Map.abs(num);
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);
multiplyBy3AndAbsolute(-50);


//PIPE

fn1(fn2(fn3(50)));
compose(fn1, fn2, fn3)(59);
pipe(fn1, fn2, fn3);
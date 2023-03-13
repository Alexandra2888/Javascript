// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// getElementsByTagName('tagname');
// HTMLCollection =  array-like object
// index, length property but not array methods (forEach)

// querySelectorAll() in most cases
// NodeList - objects are collections of nodes
// can run forEach
// turn them into array - spread operator [...]
// after that can use any array properties and methods

const headings = document.getElementsByTagName('h2');
headings[0].style.color = 'red';
// console.log(headings.length);

const items = document.getElementsByTagName('li');
items[2].style.color = 'orange';
const betterItems = [...items];

betterItems.forEach(function (item) {
  console.log(item);
});

console.log(items);
console.log(betterItems);


// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// getElementsByClassName('classname');

// HTMLCollection

const listItems = document.getElementsByClassName('special');
listItems[2].style.color = 'blue';
console.log(listItems);


// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// querySelector('any css'); - selects single
// querySelectorAll('any css') - selects all

const result = document.querySelector('#result');
result.style.backgroundColor = 'blue';

const item = document.querySelector('.special');
// console.log(item);

const lastItem = document.querySelector('li:last-child');
// console.log(lastItem);

const list = document.querySelectorAll('.special');

list.forEach(function(item) {
  console.log(item);
  item.style.color = 'yellow';
});


// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// childNodes - returns all childNodes including whitespace which is treated as a text node

// children
// firstChild
// lastChild

const result = document.querySelector('#result');
const allChildren = result.childNodes;
// console.log(allChildren);

const children = result.children;
console.log(children);

console.log(result.firstChild);
console.log(result.lastChild);


// previousSibling
// nextSibling
// return whitespace

const first = document.querySelector('.first');
const second = (first.nextSibling.nextSibling.style.color = 'red');
console.log(second);

const last = document.querySelector('#last');
const third = last.previousSibling.previousSibling;
console.log(third);
console.log(last.nextSibling.nextSibling);


// nodeValue
// textContent

// const item = document.getElementById('special');
// const value = item.firstChild.nodeValue;
// const easyValue = item.textContent;

// console.log(easyValue);


// getAttribute();
// setAttribute();

// const first = document.querySelector('.first');
// const idValue = first.getAttribute('id');
// // console.log(idValue);

// const link = document.getElementById('link');
// const showLink = link.getAttribute('href');
// console.log(showLink);

// const last = link.nextElementSibling;
// last.setAttribute('class', 'first');
// last.textContent = 'i also have a class of first';
// console.log(last);

// const links = document.querySelectorAll('.first');
// console.log(links);



// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

const result = document.querySelector('#result');

// create empty element

const bodyDiv = document.createElement('div');
// create text node
const text = document.createTextNode('a simple body div');
bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);

const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');

result.appendChild(heading);

console.log(result.children);


// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

// insertBefore('element','location');

// const result = document.querySelector('#result');
// const first = document.querySelector('.red');
// // create empty element

// const bodyDiv = document.createElement('div');
// // create text node
// const text = document.createTextNode('a simple body div');
// bodyDiv.appendChild(text);
// document.body.insertBefore(bodyDiv, result);
// // result element
// const heading = document.createElement('h2');
// const headingText = document.createTextNode('dynamic heading');
// heading.appendChild(headingText);
// heading.classList.add('blue');

// result.insertBefore(heading, first);

// console.log(result.children);


// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

// replaceChild('new','old');

// const result = document.querySelector('#result');
// const first = document.querySelector('.red');
// // create empty element

// const bodyDiv = document.createElement('div');
// // create text node
// const text = document.createTextNode('a simple body div');
// bodyDiv.appendChild(text);
// document.body.insertBefore(bodyDiv, result);
// // result element
// const heading = document.createElement('h2');
// const headingText = document.createTextNode('dynamic heading');
// heading.appendChild(headingText);
// heading.classList.add('blue');

// result.insertBefore(heading, first);

// const smallHeading = document.createElement('h6');
// const smallText = document.createTextNode(`i'm small heading text`);
// smallHeading.classList.add('red');
// smallHeading.appendChild(smallText);
// document.body.replaceChild(smallHeading, bodyDiv);
// console.log(result.children);


// prepend
// innerText

// const heading = document.createElement('h2');
// heading.innerText = `i am a dynamic heading`;
// document.body.prepend(heading);


// CSS

const random = document.querySelector('.random');

// random.style.backgroundColor = 'blue';
// random.style.color = 'white';
// random.style.fontSize = '3rem';
// random.style.textTransform = 'capitalize';

random.classList.add('title');


// const heading = document.querySelector('h2');
// const btn = document.querySelector('.btn');
// const text = document.querySelector('p');

// text.addEventListener('mouseenter', function() {
//   heading.classList.add('red');
// });
// text.addEventListener('mouseleave', function() {
//   heading.classList.remove('red');
// });
// btn.addEventListener('click', function() {
//   if (heading.classList.contains('blue')) {
//     heading.classList.remove('blue');
//   } else {
//     heading.classList.add('blue');
//   }
// });

// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is released

const nameInput = document.getElementById('name');

// nameInput.addEventListener('keypress', function() {
//   console.log('you pressed a key');
// });
// nameInput.addEventListener('keydown', function() {
//   console.log('you pressed a key');
// });
nameInput.addEventListener('keyup', function() {
  console.log(nameInput.value);
});


// select element
// addEventListener()
// what event, what to do

// const btn = document.querySelector('.btn');
// const heading = document.querySelector('h2');

// btn.addEventListener('click', function() {
//   heading.classList.add('red');
// });


// select element
// addEventListener()
// what event, what to do

// const btn = document.querySelector('.btn');
// const heading = document.querySelector('h2');

// function changeColors() {
//   let hasClass = heading.classList.contains('red');
//   if (hasClass) {
//     heading.classList.remove('red');
//   } else {
//     heading.classList.add('red');
//   }
// }

// btn.addEventListener('click', changeColors);


// click - fires after full action occurs
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

// const heading = document.querySelector('h1');
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', function() {
//   console.log('you clicked me');
// });
// btn.addEventListener('mousedown', function() {
//   console.log('down');
// });
// btn.addEventListener('mouseup', function() {
//   console.log('up');
// });

// heading.addEventListener('mouseenter', function() {
//   heading.classList.add('blue');
// });
// heading.addEventListener('mouseleave', function() {
//   heading.classList.remove('blue');
// });


// currentTarget - always refers to the element to which the event handler has been attached to
// target - identifies the element on which the event occured

const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    // console.log(e.currentTarget);
    // e.currentTarget.style.color = 'green';
    console.log('current', e.currentTarget);
    console.log('target', e.target);
    e.target.style.color = 'green';
  });
});


// event propogation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches target

// const container = document.querySelector('.container');
// const list = document.querySelector('.list-items');

// function showBubbling(e) {
//   console.log('current target', e.currentTarget);
//   // console.log('target', e.target);
//   // if (e.target.classList.contains('link')) {
//   //   console.log('you clicked on the link');
//   // }
// }
// function stopPropogation(e) {
//   e.stopPropagation();
// }

// list.addEventListener('click', showBubbling, { capture: true });
// container.addEventListener('click', showBubbling, { capture: true });
// document.addEventListener('click', showBubbling, { capture: true });
// window.addEventListener('click', showBubbling, { capture: true });


// submit event listener
// prevent default
// how to get a value

const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('form submitted');
  console.log(name.value);
  console.log(password.value);
});


// Web Storage API - provided by browser
// session storage, local storage
// setItem, getItem , removeItem, clear

// localStorage.setItem('name','john')
// sessionStorage.setItem('name','john')

// localStorage.setItem('name', 'john');
// localStorage.setItem('friend', 'peter');
// localStorage.setItem('job', 'developer');
// localStorage.setItem('address', 'street 123');

// const name = localStorage.getItem('name');
// console.log(name);

// localStorage.removeItem('name');
// const anotherName = localStorage.getItem('name');
// console.log(anotherName);
// localStorage.clear();



// JSON.stringify(), JSON.parse

const friends = ['john', 'peter', 'bob'];
localStorage.setItem('friends', JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem('friends'));
console.log(values[2]);

let fruits;

if (localStorage.getItem('fruits')) {
  fruits = JSON.parse(localStorage.getItem('fruits'));
} else {
  fruits = [];
}
console.log(fruits);
// fruits.push('apple');
fruits.push('orange');
localStorage.setItem('fruits', JSON.stringify(fruits));




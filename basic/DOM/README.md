## DOM = document object model => link the Js object to the HTML doc
## steps:
*1.select
*2.manipulate

## Selecting methods:
1. Getting HTML by their class
2. Getting HTML by their ID
3. querryselectorAll => it selects all elements that share that selector
4. querryselector => it selects only one element that has the selector

## Properties:
1. innerText = gives us the text as displayed on the web page
2. textContent = gives us the text as displayed in the HTML document(eg in textContent you have indentation, in innerText you don't have)
3. innerHTML = gives us the text + the elements. We can create HTML elements from within our Js files.

eg: const ul = document.querySelector("ul");
ul.innerText += "<li>Item 4</li>li>";

4. Traversing the DOM properties:
a. parentElement (up)
b. children (down)
c. previousElenetSibling (left)
d. nextElementSibling (right)

5. Style = allows us to use CSS style inside the Js file
eg:
const image = document.querySelector("img");
const para = document.querySelector("p");
image.style.width =  "700px";

6. classList

eg:
para.classList.add("for-fun");




## Methods
1. getAttribute() = grabs the HTML element attribute
eg:
const para = document.querySelector("p");
console.log(para.getAttribute("id"));

2. setAttribute() = when we create attributes for HTML elements through Js
eg:
const para = document.querySelector("p");
para.setAttribute("class", "paragraph");

3. getComputedStyles = retrieve the applied styles and the browser styles

eg:
const imageProps = getComputedStyles(image);
console.log(imgeProps);

4. createElement

eg:
a. the element is created
let newItem = document.createElement("li");\
console.lo(newItem);

b. the element is given content/text
newItem.innerText = "Cute"


5. appendChild = always append at the end of the list

c. we need a parent to adopt this new element
const list = document.querySelector("ul");
list.appendChild(newItem);


6. insertBefore()

a.selecting the element
const firstItem = document.querySelector("ul li:first:child");

b. creation of the element
let newItem2 = document.createElement("li");
newItem2.innerText = "Protective"

c. appending the element
list.insertBefore(newItem2, firstItem);


7. append()

a. create the element
const newH5 = document.createElement("h5");
const newH6 = document.createElement("h6");


b. giving the elemenet an identity
newH5.innerText = "Cats";
newH6.innerText = "Birds";


c. find an element to append these as relatives of that element
const mainHeading = document.querySelector("h1");
mainHeading.append(newH5, newH6);


8. prepend()
mainHeading.prepend(newH5, newH6);

9. removeChild() ! it requires a parent node
const toDoList = document.querySelector("ol");
const toDoItem = document.querySelector("ol li:nth-child(3)");
toDoList.removeChild(toDoItem);


10. remove ! doesn' t require a parent node
toDoItem.remove();


## Events = kind of inputs that we listen to when we receive some sort of user input
eg: click, hover, scroll, fill out a form, double click, mouse over an element, drag & drop, press key(up=key is released, down=key is pressed down) etc
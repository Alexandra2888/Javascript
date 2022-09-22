let todos = ['clean room', 'brush teeth', 'exercise', 'study js', 'eat healthy'];
for (i = 0; 5 < todos.length; i++);
console.log(i);
todos.pop();




let counterOne = 0;
while (counterOne < 10) {
    console.log(counterOne);
    counterOne --
}


let counterTwo = 10;
do {
    console.log(counterTwo);
    counterTwo++;
} while (counterTwo > 0);



//printing index
let todosLength = todos.length;
for (let i = 0; i < todos.length; i++) {
    console.log(i);
}


//printing items
todos.forEach(function (i) {
    console.log(i)
});
// let todos = ['clean room', 'brush teeth', 'exercise', 'study js', 'eat healthy'];
// for (i = 0; 5 < todos.length; i++);
// console.log(i);
// todos.pop();




// let counterOne = 0;
// while (counterOne < 10) {
//     console.log(counterOne);
//     counterOne --
// }


// let counterTwo = 10;
// do {
//     console.log(counterTwo);
//     counterTwo++;
// } while (counterTwo > 0);



// //printing index
// let todosLength = todos.length;
// for (let i = 0; i < todos.length; i++) {
//     console.log(i);
// }


// //printing items
// todos.forEach(function (i) {
//     console.log(i)
// });

console.log('https://jsonplaceholder.typicode.com/photos')


//let img = fetch('https://jsonplaceholder.typicode.com/photos').then(value => console.log(value))
//console.log(img)


fetch('https://jsonplaceholder.typicode.com/photos')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
      }
       return response.json();
  })
  .then((response) => {
    // myImage.src = URL.createObjectURL(response);
      console.log(response)
      response.forEach(element => {
        console.log(element)
      });
  });

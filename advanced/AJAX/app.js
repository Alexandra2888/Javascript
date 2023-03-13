const xhr = new XMLHttpRequest();

xhr.open('GET', './api/sample.txt');
xhr.onreadystatechange = function () {
  // console.log(xhr);
  if (xhr.readyState === 4 && xhr.status === 200) {
    const text = document.createElement('p');
    text.textContent = xhr.responseText;
    document.body.appendChild(text);
  } else {
    console.log({
      status: xhr.status,
      text: xhr.statusText,
      state: xhr.readyState,
    });
  }
};
xhr.send();

console.log('hello world');


const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  getData();
});

function getData() {
  const xhr = new XMLHttpRequest();
  console.log(xhr);

  xhr.open('GET', './api/sample.txt');
  xhr.onreadystatechange = function () {
    // console.log(xhr);
    if (xhr.readyState === 4 && xhr.status === 200) {
      const text = document.createElement('p');
      text.textContent = xhr.responseText;
      document.body.appendChild(text);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        state: xhr.readyState,
      });
    }
  };
  xhr.send();
}


// JSON Javascript Object Notation
// const btn = document.querySelector('.btn');
// const url = './api/people.json';
// btn.addEventListener('click', () => {
//   getData(url);
// });

// function getData(url) {
//   const xhr = new XMLHttpRequest();
//   console.log(xhr);

//   xhr.open('GET', url);
//   xhr.onreadystatechange = function () {
//     // console.log(xhr);
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       // parse
//       // stringify

//       const data = JSON.parse(xhr.responseText);
//       const displayData = data
//         .map((item) => {
//           return `<p>${item.name}</p>`;
//         })
//         .join('');
//       const element = document.createElement('div');
//       element.innerHTML = displayData;
//       document.body.appendChild(element);
//     } else {
//       console.log({
//         status: xhr.status,
//         text: xhr.statusText,
//         state: xhr.readyState,
//       });
//     }
//   };
//   xhr.send();
// }


// Fetch built-in
// promised based
// XHR is not wrong, you can complete all our upcoming examples and projects using XHR. Fetch is just alternative approach that has simpler and cleaner syntax. The end result is the same.Still get dynamically, behind the scenes.

const url = './api/people.json';

// there is an options, object will discuss later
// const response = fetch(url);
// console.log(response);

// fetch(url)
//   .then((resp) => {
//     // response object
//     // useful properties and methods
//     // console.log(resp);
//     // convert response into JSON data
//     // returns a promise
//     return resp.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// fetch(url)
//   .then((resp) => resp.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// const promise = new Promise((resolve, reject) => {
//   let value = false;
//   if (value) {
//     resolve([1, 2, 4]);
//   } else {
//     reject(`there was a error, value is false`);
//   }
// });

// promise
//   .then((taco) => {
//     console.log(taco);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


//   const url = './api/people.json';

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', async () => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     displayItems(data);
//   } catch (error) {
//     console.log(error);
//   }
// });

// const displayItems = (items) => {
//   const displayData = items
//     .map((item) => {
//       return `<p>${item.name}</p>`;
//     })
//     .join('');
//   const element = document.createElement('div');
//   element.innerHTML = displayData;
//   document.body.appendChild(element);
// };

// try {
//   console.log('hello');
//   console.log(random);
// } catch (error) {
//   console.log(error);
// }

// console.log('hey');


// const url = './api/people.json';

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//   fetch(url)
//     .then((resp) => resp.json())
//     .then((data) => {
//       displayItems(data);
//     })
//     .catch((err) => console.log(err));
// });

// const displayItems = (items) => {
//   const displayData = items
//     .map((item) => {
//       return `<p>${item.name}</p>`;
//     })
//     .join('');
//   const element = document.createElement('div');
//   element.innerHTML = displayData;
//   document.body.appendChild(element);
// };


// const promise = new Promise((resolve, reject) => {
//   let value = false;
//   if (value) {
//     resolve([1, 2, 4]);
//   } else {
//     reject(`there was a error, value is false`);
//   }
// });

// promise
//   .then((taco) => {
//     console.log(taco);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   const promise = new Promise((resolve, reject) => {
//   let value = false;
//   if (value) {
//     resolve([1, 2, 4]);
//   } else {
//     reject(`there was a error, value is false`);
//   }
// });

// promise
//   .then((taco) => {
//     console.log(taco);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

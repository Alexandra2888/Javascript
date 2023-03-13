//how Js works

//eg
const a = 1;
const b = 20;
const c = 100;
//call stack
console.log('1');
console.log('20');
console.log('100');

//eg
const one = () => {
    const two = () => {
        console.log('4');
    }
}
two();
console.log('4');
two();
one();



//RECURSION

//eg
function foo() {
    foo();

}
foo();

//eg
console.log('1');
setTimeout(() => {
    console.log('2');
}, 0)
console.log('3');



//PROMISES


//eg
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('it worked')
    } else {
        reject('error')
    }
})


//eg
Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})
    .then(results => {
    console.log(results[0])
    })
    .catch(() => console.log(error)))



    //eg
const getData = async function () {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url => fetch('url')
            .then(resp => resp.json())
        ))
        console.log(users);
        console.log(albums);
        console.log(posts);
    } catch (err) {
        console.log(err);
    }
}


//eg
// const urls =  [];
// const getData = ...
// const loopThroughUrls = url => {
//     for (url of urls) {
//         console.log(url);
//         }
//     }


//eg
// const getData2 = async function () {
//     const arrayOfPromises = urls.map(url => {
//         fetch(url);
//         await(let request of arrayOfPromises) {
//             const data = await request.json();
//             console.log(data)
//         }
//     })
// }

//eg
promise2
.then((result) => {
result + '!'
})
    .then((result2 => {
        throw Error
        console.log(result2);
    })

)
    .catch((err) => {
console.log('error')
    });

    //ES 8 ASYNC-AWAIT

//eg
movePlayer(100, 'left')
.then(() => movePlayer(400, 'left'))
    .then(() => movePlayer(10, 'right'))
    .then(() => movePlayer(330, 'left'))

async function playerStart() {
    const firstMove = await movePlayer(100, 'left')
    await movePlayer(10, 'right')
    await movePlayer(330, 'left')
    }


//job queue

    //eg
setTimeout(() => {
        console.log('1', 'is this the loneliness number')
}, 0)

setTimeout(() => {
    console.log('2', 'can be as bad as one')
}, 10)


//PARRALEL SEQUENCE AND RACE

const promisify = (item, delay) => new Promise((resolve) => setTimeout(() => resolve(item, delay)));
const a1 = promisify('a1', 100);
const b1 = promisify('b1', 6000);
const c1 = promisify('c1', 800);

async function parallel() {
    const promises = [a(), b(), c()];
    const [output1, output2, output3] = await Promise.all(promises);
    return `parralel is done: ${output1}, ${output2}, ${output3}`;
}

async function race() {
    const promises = [a(), b(), c()];
    const output1 = await Promise.race(promises);
    return `race is done, ${output1}`;
}

async function sequence() {
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();
return `sequence is done, ${output1}, ${output2}, ${output3}`
}


//ES6 2020 -allSettled

//eg
const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 3000));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 3000));
Promise.allSettled([promise1, promise2])
    .then(data => console.log(data))
    .catch(e => console.log('smth failed', e))


//FETCH
fetch('my-url').then(response => {
    console.log(response)
})



//JS runtime at a glance

function multiply(x, y) {
    const result = x * y;
    console.log(result);
}

function sum(x, y) {
    const result = x + y;
    console.log(result);
    multiply(20, 30);
}

function substract(x, y) {
    const result = x - y;
    console.log(result);
    sum(30, 50);
}

function divide(x,  y) {
    const result = x / y;
    console.log(result);
    substract(50, 40);
}

//eg
let myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("Success");
        //reject("Whoopsie")
    }, 1000);
});

// myFirstPromise.then(
//     (succesMsj) => {
//         console.log(succesMsj);
//     },
//     (errorMsj) => {
//         console.log(errorMsj);
//     }
// )

//better synthax:

myFirstPromise
    .then((successMsj) => {
        console.log(successMsj);
    })
    .catch((errorMsj) => {
        console.log(errorMsj);
    });


    //FETCH
fetch('url')
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })

fetch('url')
    .then((response) => {
        return response.json();
    })
    .then((users) => {
        console.log(users);
    })
    .catch((error) => {
        console.log(error);
    });


    //ASYNC AWAIT

async function getPosts() {
    const response = await fetch('url');
    const postData = await response.json();
    console.log(postData);
}
getPosts();

async function getQuestions() {
    const questionsResponse = await fetch('url');

    if (this.status !== 200) {
        throw new Error("Error fetching data");
    }

    return (questionsData = await questionsResponse.json());

}
getQuestions()
    .then((data) => {
    console.log(data);
})
    .catch((error) => {
        console.log(error);
    });


    // Javascript is single threaded, synchronous language.
//
console.log(`i'm first`);
console.log(`i'm second`);
console.log(`i'm third`);

console.log(`i'm first`);
boilingWater();
console.log(`i'm third`);

function boilingWater() {
  console.log('boiling...');
  for (let i = 0; i < 1000; i++) {
    console.log('still not done...');
  }
  console.log('done.');
}


// Make Soup
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion boil for 5 min
// BROWSER!!!!! Fetch Data, Get Geolocation, setTimeout, setTimer etc

boilWater(100000);
console.log(`chop carrot`);
boilWater(5000);
console.log(`chop onion`);
boilWater(5000);

function boilWater(time) {
  console.log('boiling...');
  for (let i = 0; i < time; i++) {
    console.log('still not done...');
  }
  console.log('done.');
}

// Make Soup
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion boil for 5 min
// BROWSER!!!!! Fetch Data, Get Geolocation, setTimeout, setTimer etc
// callbacks, promises, async/await

boilWater(10000);
console.log(`chop carrot`);

function boilWater(time) {
  console.log('boiling...');
  setTimeout(() => {
    console.log('done.');
  }, time);
}

// Make Soup
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion boil for 5 min
// BROWSER!!!!! Fetch Data, Get Geolocation, setTimeout, setTimer etc
// callbacks, promises, async/await

boilWater();
console.log(`chop carrot`);

function boilWater() {
  console.log('boiling...');
  setTimeout(() => {
    console.log('done.');
    console.log('add carrots.');
    setTimeout(() => {
      console.log('carrots done');
      console.log('add onions');

      setTimeout(() => {
        console.log('onion done');
      }, 500);
    }, 500);
    console.log('chop onion');
  }, 1000);
}



// callbacks, promises, async/await
const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  setTimeout(() => {
    heading1.style.color = 'red';
    setTimeout(() => {
      heading2.style.color = 'green';
      setTimeout(() => {
        heading3.style.color = 'blue';
      }, 1000);
    }, 2000);
  }, 1000);

  //
});

// callbacks, promises, async/await
// const heading1 = document.querySelector('.one');
// const heading2 = document.querySelector('.two');
// const heading3 = document.querySelector('.three');
// const btn = document.querySelector('.btn');
// const container = document.querySelector('.img-container');
// const url = 'https://source.unsplash.com/random';
// btn.addEventListener('click', () => {
//   loadImage(url)
//     .then((taco) => container.appendChild(taco))
//     .catch((err) => console.log(err));
// });

// function loadImage(url) {
//   return new Promise((resolve, reject) => {
//     let img = new Image();
//     img.addEventListener('load', () => {
//       resolve(img);
//     });
//     img.addEventListener('error', () => {
//       reject(new Error(`Failed to load image from the source : ${url}`));
//     });
//     img.src = url;
//   });
// }


// callbacks, promises, async/await
// PROMISES - Pending, Resolved, Rejected
// then catch - pass another callback
// const heading1 = document.querySelector('.one');
// const heading2 = document.querySelector('.two');
// const heading3 = document.querySelector('.three');

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//   setTimeout(() => {
//     heading1.style.color = 'red';
//     setTimeout(() => {
//       heading2.style.color = 'green';
//       setTimeout(() => {
//         heading3.style.color = 'blue';
//       }, 1000);
//     }, 2000);
//   }, 1000);

//   //
// });





// callbacks, promises, async/await
// PROMISES - Pending, Resolved, Rejected
// then catch - pass another callback
// const heading1 = document.querySelector('.one');
// const heading2 = document.querySelector('.two');
// const heading3 = document.querySelector('.three');

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {});

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


// callbacks, promises, async/await
// must have async
// await waits till promise is settled
// error handling - try/catch

// async function someFunction (){
//   await
// }
// const otherFunction = async() =>{
//   await
// }

// const heading1 = document.querySelector('.one');
// const heading2 = document.querySelector('.two');
// const heading3 = document.querySelector('.three');
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', async () => {
//   const result = await displayColor();
//   console.log(result);
// });

// async function displayColor() {
//   try {
//     const first = await addColor(1000, heading1, 'red');
//     await addColor(1000, heading2, 'green');
//     await addColor(1000, heading3, 'blue');
//     console.log(first);
//   } catch (error) {
//     console.log(error);
//   }
//   return 'hello';
// }

// function addColor(time, element, color) {
//   return new Promise((resolve, reject) => {
//     if (element) {
//       setTimeout(() => {
//         element.style.color = color;
//         resolve();
//       }, time);
//     } else {
//       reject(new Error(`There is no such element ${element}`));
//     }
//   });
// }


// callbacks, promises, async/await
// what if no resolve, one is rejected
// const heading1 = document.querySelector('.one');
// const heading2 = document.querySelector('.four');
// const heading3 = document.querySelector('.three');
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', () => {
//   addColor(1000, heading1, 'red')
//     .then(() => addColor(2000, heading2, 'green'))
//     .then(() => addColor(1000, heading3, 'blue'))
//     .catch((err) => console.log(err));
// });

// function addColor(time, element, color) {
//   return new Promise((resolve, reject) => {
//     if (element) {
//       setTimeout(() => {
//         element.style.color = color;
//         resolve();
//       }, time);
//     } else {
//       reject(new Error(`There is no such element ${element}`));
//     }
//   });
// }

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
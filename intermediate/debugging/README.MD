## Debugger

eg:

const flattened = [[0,1], [2,3], [4,5]].reduce((acc, array) => {
    console.log(array);
    console.log(acc);
    return acc.concat(arr);
})
// for (let a = 1; a <= 5; a++) {
//     console.log("I am For Loop", a);
// }

// for (let b = 0; b <= 19; b+=2) {
//     console.log("I am Even", b)
// }

// for (let c = 1; c <= 20; c += 2) {
//     console.log("I am Odd", c)
// }

// for (let d = 0; d <= 19; d += 3) {
//     console.log("I am the 3rd", d)
// }

//for (e = 10; e >= 0; e++) {
    //console.log(e);
//} => infinite lop => crashes browser


// looping through arrays
// const numbers = [25, 65, 95, 45, 135];
// for (let a = 0; a < numbers.length; a++) {
    //console.log(a);
//     console.log(a, numbers[a])
// }

// looping through objects nested with arrays
// const favBooks = [
//     {
//         bookName: "The kite Runner",
//         author: "Khaled Hosseini"
//     },
//     {
//         bookName: "The Theory of evereything",
//         author: "Steven hawking"
//     },
//     {
//         bookName: "Moby Dick",
//         author: "Herman Melville"
//     }
// ]
// console.log(favBooks);
// for (let i = 0; i < favBooks.length; i++) {
//     console.log(i);
//     console.log(i, favBooks[i]);
//     console.log(favBooks[i]);
//     console.log(favBooks[1].bookName);
// }


// while loops
// let k = 1;
// while(k <=10) {
//     console.log(k);
//     k++;
// }

const colors = ["red", "green", "blue"];
let i = 0;
while (i < colors.length) {
    console.log(i, colors[i]);
    i++;
}
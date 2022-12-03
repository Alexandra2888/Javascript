//1 first way to call a function -> implicit binding

// var movieShop = {
//     movie: "The Switch",
//     movieFunc(movieDesc) {
//         console.log(this.movie, movieDesc);
//     }
// }

//movieShop.movieFunc("movie is what I am watching")

// function movieFunc(movieDesc) {
//     console.log(this.movie, movieDesc);
// }

// let movieShop1 = {
//     movie: "Click",
//     movieFunc: movieFunc
// };

// let movieShop2 = {
//     movie: "The Leap Year",
//     movieFunc: movieFunc
// }

// movieShop1.movieFunc("is a fantastic movie");
// movieShop2.movieFunc("is a romantic movie");


//2 explicit binding

var movieShop1 = {
    movie: "Click",
    movieFunc: movieFunc
};

var movieShop2 = {
    movie: "The Leap Year",
    movieFunc: movieFunc
};

//the call method accepts the this keyword as the first argument
movieFunc.call(movieShop1, "is a fantastic movie");
movieFunc.call(movieShop2, "is a romantic movie");



//BIND!

/*3 new keyword

a. creates a brand new object
b. links that brand new object to another function
c. invoke tahat function
d. assumes that human return the this keyword
*/

// function movieFunc(movieDesc) {
//     console.log(this.movie, movieDesc);
// }

// let newExmptyObj = new movieFunc("ooops");
// console.log(new movieFunc("ooops"));

// newExmptyObj.name = "The New Empty Object";
// console.log(newExmptyObj);


//4. Binding

// var movie = "Rush";

// function movieFunc(movieDesc) {
//     console.log(this.movie, movieDesc);
// }

// function otherMovieFunc(movieDesc) {
//     "use strict";
//     console.log(this.movie, movieDesc);
// }

// movieFunc("is a racing movie");
// otherMovieFunc("is also a racing movie");


//Binding precedent

/*
1. the new keyword
2. the call()/apply()/bind()
3. context object
4. default binding
 */

//Arrow functions => doesn't have this at all

// let movieShop = {
//     movie: "Hell or High Water",
//     movieFunc(movieDesc) {
//         setTimeout(() => {
//             console.log(this.movie, movieDesc);
//         }, 100)
//     },
// };

// movieShop.movieFunc("is a masterpiece");


let movieShop = {
    movie: "Focus",
    movieFunc: (movieDesc) => {
        console.log(this.movie, movieDesc);
    },
};

movieShop.movieFunc("is a good movie");

movieShop.movieFunc.call(movieShop, "is still a good movie");
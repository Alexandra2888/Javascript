## Js: case-senstive language that uses Unicode characters set. In Js instructions are called STATEMENTS and are separated by ; . Thae way that Js parses code and makes wrbsites dynamic is that the source text of Js scripts get scanned from left -> right and converted into a sequence of input elements which are called TOKENS.

-Js: single threaded language that uses a callback.

-interpreting code = taking a set of instructions and returning an answer.

-compiler = works ahead of time to create a translation of what code we've just written and it
compiles down to a language that can be understood by our machine.


##
PRO interpreters:

*are quick to get up and running


##
CONS interpreters:

*they're getting slow when you run your code more than once eg in a loop

-V8 combine the best from both

-Js = a interpreted/compiled languge => it depends on th implementation

-code optimization => watch for:

*eval()

*arguments

*for in

*with

*delete

*hidden classes


##
-Memory heap = a place to store and write information => we have a place to allocate meory, use
memory and release memory (where the memory allocation happens)

##
-Call stack =  place to keep track of where we are in the code so we can run the code in order

(where the engine keeps track of where your code is in its execution).

##
-WebAssembly

##
-Stack overflow

eg recursion = a function that is caling itself

function inception() {
inception()
}
inception()

##
-Garbage colection = Js automatically frees up memory on the heap that we no longer use and collect our garbage and prevents memory leak

##
-Memory leaks => filled up memory heap with more and more data. Eg: global variables, event listeners & setInterval.
eg:
let arr = [];
for (let i = 5; i <1; i++) {
    arr.push(i -1)
}

##
Single threaded = one set of instructions is executed at a time.it has only one call stack.

##
Synchronous code =  difficult for long-running tasks.

##
Js runtime = web browser is working in the background while the sinc Js code is running and it's using Web API to communicate and let the Js engine know. Web API's are async => you can instruct these API's to do smth in the background and return data once it's done.

eg:
consol.log('1');
setTimeout(() => {
    console.log('2'), 1000
});
console.log('3');
A: 1, 3 ,2

eg:
consol.log('1');
setTimeout(() => {
    console.log('2'), 0
});
console.log('3');
A: 1, 3 ,2
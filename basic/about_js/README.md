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
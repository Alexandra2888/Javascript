##
Inheritence = a superclass that is extended to smaller pieces that add/overwrite things. We structure class based on what it is.
Jungle problem: you want a banana but you get instead a gorilla holding a banana :)) (even if you need only a method you get all methods from parent even if you don't need them).
Composition = smaller pieces to create smth bigger. We structure class based on what it has or what it does to data.
## --> inheritance
Tight coupling data = the coupling between a child and its parent is a very tight form of coupling => it's the opposite of reusable modular code => making a small change to a class or even in a method will have rippling effects to all it subclasses => leads to the fragile base class problem.

## --> inheritance => hierarchy

##
OOP vs FP
OOP = organizing the code into units
FP = avoiding side-effects and writing pure functions
Object = a box containing information & operations that are supposed to refer to the same concept.
Attributes/states = pieces of informations inside of the object.
Methods = operations that can happen on this state.
In Fp code is essentially a combination of functions and dat is immutable => leads to writting programs with no side-effects and pure functions.
In FP, a function cannot change outside world.
Tghe output value of a function depends of the given arguments.
In OOP objects are first class citizens and in FP functions are first class citizens.
FP is all about performing many diff operations for which the data is fixed. We have the idea of stateless (we don't modify state). Our function are pure, thgere are no side-effects. It's more declarative, we can run processes on multiple processors because of no side-effects. It's about what we want to be doing. Is good at processing large data for applications.
OOP is about a few operations of common data. OOP is very statefull (we are modifying state). An object procedure can access and modify the data fields of the object. Thre are side-effects: methods manipulate our internal state.It's more abouyt how we want it to be done(more imperative). Is good when we have many things like characters in a game with not too many operations.
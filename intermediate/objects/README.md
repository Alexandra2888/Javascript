Objects = collections of properties (property: value);

##
Method =  function inside an object;

##
You can have an empty object that is EMPTY;

eg:

emtyObj = {}  (empty {})

emptyObj.name = "Andy";

console.log(emptyObj.name); => "Andy"

##

nullObj  (null)

nullObj.name = "Andy"

ReffError: Cannot set property "name" of null!


## Key topics for objects:

*reference type = non-primitive type

*context vs scope = tells you where we are within the object

console.log(this);

console.log(this === window) true => "this" refers to what object it's inside of

*instantialization = when you make a copy of an object and reuse the code

## METHODS:
*Object.keys() => returns all the keys from an object

## A. PRIMITIVES
* number: - Js has one Number type that works with positive/negative/integers/decimal numbers
            -has all basic Math operations
* boolean
* string
* undefined
* null
* symbol
* bigInt

## B NON-PRIMITIVES
* object
* array
* function

! functions + arrays are objects ( see standard built-in objects in MDN)

! In Js a variable can change its type.


## Comparisons
!==
===
<=
<
>

## Conditions
* if
* else
* else if
* ternary operator
* switch


## Logical operators
* &&
* ||


## Array.isArray
eg:
```Array.isArray([1,2,3]) true
Array.isArray({}) false```

## Pass by value, pass by reference

eg:
```var a = 5;
var b = a;
 b ++;```

 ## Type coercion

 1 == '1'
 - see Js comparision table
 - ECMASCRIPT language specific

 ## Dynamic vs Static typing

 * strong + dynamic: Erlang, Closure, Groovy, Python, Ruby
 * strong + static: Java, C#, Scala, F#, Haskell
 * dynamic + weak: Perl, Js, PHP, VB
 * weak + static: C, C++

 eg for Js:
 ```var a = 'booya';
 a+17;
 console.log('booya');```
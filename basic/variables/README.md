## Js types:
number, string, boolean, undefined, null, symbol, object

## Primitive types (the actual value is stored): Number, String, Boolean, Undefined, Null, Symbol, BigInt.

## Reference type (a reference is stored to whre that type is in the memory): Arrays, Objects, Functions

## eg:
10 + "34" = 1034;
10 - "3" = 7;
"hello" - "bye" = NaN
3 > 2 true;
3 === 3 true;
3 !== 3 false;
4 !== 5  true;

## comparisons
!==, <=, >, ===, ==, >

## variables
var, let, const

## Var = declares a variable optionally initializing it to a value

## Let = declares a block scope local variable optionally initializing it to a value. ( you can reassign later the variable to smth else)

## Const = declare the block scope read-only name constant

## Undefined = the variable has not assigned, the lack of value when smth doesn't have a real value.
eg let passsword

## Null = the purpose for an assignment of a variable, like we are purposefully not assigning smth.

## BigInt = special numeric type that provides suport for integers of arbitrary length.
eg: const bigInt

# conditions
if, else, else if, ternary operator, switch

##
eg:
if (name === 'B') {
    alert('Hi, B!') {
        else if (name === 'S') {
            alert ('HI, S') {
                else {
                    alert (I don't know you)
                }
            }
        }
    }
}

## logical operators
&&, ||, !


## Rules for naming convention:
* has to make sense
* be understandable
* has to be camelCase

## execution context
-global object
-this

## eg

function printName() {
    return Andrei;
}
function findName () {
    return printName();
}
function sayMyName(){
return findName()
}
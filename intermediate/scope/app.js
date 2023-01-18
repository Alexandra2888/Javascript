//eg
var x = 10; //target ref
console.log(x) //source ref

//eg:
function bb() {
    var a = "hello";  
}
console.log(a);  //no => refference error

//eg:
let b = "Can I accesss this?";
function bb() {
    let (a) = "hello";
    console.log(b);   //ok
}


//eg: scope
var fun = 5;
function funFunction() {
    //child scope
    var fun = "hello";
    console.log(fun);
}

function funnerFunction() {
    var fun = "bye";
    console.log(fun);
}

function funnestFunction() {
    fun = "aaaaah";
    console.log("window", fun);
}    //window 5

funFunction();
funnerFunction();
funnestFunction();

// "hello", "aaah", "bye"
// ! last check is the root scope!
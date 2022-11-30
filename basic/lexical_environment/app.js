//eg -> shows the compilation
var x = 10;
console.log(x);
const y;

//eg -> compilation/parsing
var novel = "Dune";  // global scope
function otherBook() {  // global scope
    var novel = "Moby Dick";  //function scope
    console.log("Some book");
}

function writeBook() {  // global scope
    var writeNovel = "Why?";  //function scope
    console.log(writeNovel);
}
otherBook();
writeBook();
function two(){
    let isValid;
}

function one() {
    let isValid = true;  //local environment
    two();
}
let isValid = false;
one();
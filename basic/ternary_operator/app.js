// checks for only 2 conditions
let score = 9;
score === 10 ? console.log('Grade A') : console.log('Grade B');

//eg
let answer = isUserValid(true) ? "You can enter" : "Access denied";

//eg
let automatedAnswer = "Your account is " + (isUserValid(false) ? "1234" : "not available");

//eg
function isUserValid(bool) {
return bool
}
 
//eg:
function condition() {
    if(isUserValid(true)) {
        return "You can enter"
    } else {
        return "Access denied!"
    }
}
let answer2 = condition();
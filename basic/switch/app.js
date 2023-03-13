//eg
function moveCommand(direction) {
    let whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "You encountereda monster";
            break;  //break the switch statement
        case "back":
            whatHappens = "You arrived home";
            break;
        case "left":
            whatHappens = "You ran into a troll";
            break;
        case "right":
            whatHappens = "You found a river";
            break;
        default:
            whatHappens = "Please enter a valid direction";
    }
    return whatHappens;
}

// Switch
// dice values : 1 - 6

const dice = 3;

switch (dice) {
  case 1:
    console.log('you got one');
    break;
  case 2:
    console.log('you got two');
    break;
  case 3:
    console.log('you got three');
    break;
  default:
    console.log('you did not roll the dice');
}

// else if
// if (dice === 1) {
//   console.log('you got one');
// } else if (dice === 2) {
//   console.log('you got two');
// } else {
//   console.log('you did not roll the dice');
// }

// all if
// if (dice === 1) {
//   console.log('you got one');
// }
// if (dice === 2) {
//   console.log('you got two');
// }
// if (dice < 1 || dice > 6) {
//   console.log('you did not roll the dice');
// }

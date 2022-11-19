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
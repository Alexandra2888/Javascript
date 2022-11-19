//eg
let will_pokemon = {
    pikachu: {
        species: 'Moise Pokemon',
        height: 0.4,
        weight:6
    }
}
let weight = will_pokemon.pikachu.weight;
console.log(weight);

let a_pokemon = {
    raichu: {
        species: 'Mouse pokemon',
        height: 0.8,
        weight2:30
    }
}
let raichu.weight2 = will_pokemon.pikachu.weight;
console.log(weight2);
let weight3 = a_pokemon.pikachu.weight2;
console.log(weight3);


if (a_pokemon.pikachu && a_pokemon.pikachu.weight) {
    let weight3 = a_pokemon.pikachu.weight2
} else {
    let weight3 = undefined;
}

let weight4 = a_pokemon?.pikachu?.weight2;
console.log(weight4);


//eg
let b_pokemon = {
    pikachu: {
        species: 'Mouse pokemon',
        height: 0.8,
        weight: 30
    }
}
let power = b_pokemon?.pikachu?.power;
console.log(power);

let power2 = b_pokemon?.raichu?.power;
console.log(power2);
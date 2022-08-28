/*
Challenge 1
John has 3 friends and his best friend is ccalled Michael
*/



const wizard = {
    name: "John",
    age: 34,
    hobby: "soccer",
    isMarried: false,
    spells: ["abrakadabra", "shazam", "boo"],
    friends: ['Michael', 'Peter', 'Steven'],
    shouting: function () {
        console.log("AHHHH!");
    },
};

console.log(`${wizard.name} has ${wizard.friends.length} friends and his best friend is called ${wizard.friends[0]}`)

//challenge 2

const Mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi
    }
}

const John = {
    fullName: 'John Doe',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi
    }
}

console.log(Mark.calcBMI());
console.log(John.calcBMI());

if (Mark.bmi > John.bmi) {
    console.log(`${Mark.fullName}'s BMI ${Mark.bmi} is heigher than ${John.fullName}'s BMI ${John.bmi}`)
} else {
    console.log(`${John.fullName}'s BMI ${John.bmi} is heigher than ${Mark.fullName}'s BMI ${Mark.bmi}`)
}


//challenge 3

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


//const properties = Object.keys(game);
//console.log(properties);

//const values = Object.values(game);
//console.log(values);

//const entries = Object.entries(game);
//console.log(entries);

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);
// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);
// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

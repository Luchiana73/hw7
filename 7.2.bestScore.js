const players = [
  { 
    id: 1, 
    name: "Ivan", 
    scorePoints: 4500 
  },
  { 
    id: 2, 
    name: "Petr", 
    scorePoints: 3600 
  },
  { 
    id: 3, 
    name: "Vadim", 
    scorePoints: 3433 
  },
  { 
    id: 4, 
    name: "Olga", 
    scorePoints: 2356 
  },
];

let bestScore = [];

for (let player of players) {
  bestScore.push(player.scorePoints);
  Math.max(...bestScore);
};

const bestPlayer = players.filter(player => player.scorePoints == Math.max(...bestScore))
console.log(bestPlayer)

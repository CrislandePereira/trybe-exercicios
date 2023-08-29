let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
};

let fullname = player.name + " " + player.lastName;

console.log(
  "A jogadora " + fullname + " tem " + player.age + " anos de idade."
);

player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(
  "A jogadora " +
    fullname +
    "foi eleita a melhor do mundo por 6 vezes: " +
    player.bestInTheWorld +
    " ."
);

console.log(
  "A jogadora possui " +
    player.medals.golden +
    " medalhas de ouro e " +
    player.medals.silver +
    " medalhas de prata. "
);

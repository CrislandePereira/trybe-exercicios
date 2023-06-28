let animal = {
  name: "Spock",
  age: 2,
  food: "variety",
  specie: "dog",
};

// arrays com chave
let keys = Object.keys(animal);
console.log(keys);

// arrays com valores
let values = Object.values(animal);
console.log(values);

// arays com entradas
let entries = Object.entries(animal);
console.log(entries);

let lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

let lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

let lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

lesson2["turno"] = "noite";
console.log(lesson2.turno);

let keys = Object.keys(lesson1);
console.log(keys);

let size = Object.keys(lesson1).length;
console.log(size);

let values = Object.values(lesson1);
console.log(values);

let allLessons = Object.assign(
  {},
  {
    lesson1: lesson1,
    lesson2: lesson2,
    lesson3: lesson3,
  }
);
console.log(allLessons);

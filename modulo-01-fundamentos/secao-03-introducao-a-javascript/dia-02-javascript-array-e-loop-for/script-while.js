let counter = 0;

while (counter !== 5) {
  counter += 1;
  console.log(counter);
}

let d1 = Math.ceil(Math.random() * 6);
console.log("resultado d1:", d1);
let d2 = Math.ceil(Math.random() * 6);

while (d1 !== d2) {
  d2 = Math.ceil(Math.random() * 6);
  console.log("resultado d2:", d2);
}

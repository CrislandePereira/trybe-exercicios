const elementWhereAreYou = document.getElementById("elementoOndeVoceEsta");

const father = document.getElementById("elementoOndeVoceEsta").parentElement;
father.style.color = "blue";

const firstSonOfSon = document.getElementById(
  "elementoOndeVoceEsta"
).firstElementChild;
firstSonOfSon.innerText = "Primogênito - Primeiro filho.";

console.log(firstSonOfSon);

const firstSon = document.getElementById("pai").firstElementChild;
console.log(firstSon);

const firstSonAgain = document.getElementById(
  "elementoOndeVoceEsta"
).previousElementSibling;
console.log(firstSonAgain);

const textElement = elementoOndeVoceEsta.nextSibling;
console.log(textElement);

const thirthSon = elementWhereAreYou.nextElementSibling;
console.log(thirthSon);

const thirthSon2 = father.lastElementChild.previousElementSibling;
console.log(thirthSon2);

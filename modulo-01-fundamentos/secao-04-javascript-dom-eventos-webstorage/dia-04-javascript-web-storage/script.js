const button = document.getElementById("add-button");
const input = document.getElementById("phrases-input");
const list = document.getElementById("phrases-list");

const insertPhraseInDOM = () => {
  const phrasesList = JSON.parse(sessionStorage.getItem("phrases"));
  const listLength = phrasesList.length - 1;
  const phraseText = phrasesList[listLength];
  const phrase = document.createElement("li");
  phrase.innerText = phraseText;
  list.appendChild(phrase);
};

const addPhraseToSessionStorage = () => {
  if (sessionStorage.getItem("phrases") === null) { // getItem -> recupera o valor
    sessionStorage.setItem("phrases", JSON.stringify([])); // setItem -> salva
  }
  const oldList = JSON.parse(sessionStorage.getItem("phrases"));
  const phraseText = input.value;
  oldList.push(phraseText);
  sessionStorage.setItem("phrases", JSON.stringify(oldList));
  insertPhraseInDOM();
};

button.addEventListener("click", addPhraseToSessionStorage);

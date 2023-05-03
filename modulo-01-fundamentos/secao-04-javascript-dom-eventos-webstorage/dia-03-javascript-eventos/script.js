const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
const handleChangeTech = (event) => {
  const techElement = document.querySelector(".tech");
  techElement.classList.remove("tech");
  event.target.classList.add("tech");
  input.value = "";
};

firstLi.addEventListener("click", handleChangeTech);
secondLi.addEventListener("click", handleChangeTech);
thirdLi.addEventListener("click", handleChangeTech);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener("input", (event) => {
  const techElement = document.querySelector(".tech");
  techElement.innerText = event.target.value;
});

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
myWebpage.addEventListener("dblclick", () => {
  window.location.replace("https://blog.betrybe.com/");
});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myWebpage.addEventListener("mouseover", (event) => {
  event.target.style.color = "red";
});

myWebpage.addEventListener("mouseout", (event) => {
  event.target.style.color = "unset";
});

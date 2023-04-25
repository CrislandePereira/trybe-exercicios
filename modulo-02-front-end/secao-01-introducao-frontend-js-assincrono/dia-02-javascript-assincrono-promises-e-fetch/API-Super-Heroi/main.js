import './style.css';
import Swal from 'sweetalert2';

// selecionar a imagem, a legenda, e o botao
const img = document.querySelector('#imagem');
const legend = document.querySelector('#legenda');
const btn = document.querySelector('#botao');

const myToken = '6329128880482840';
// const url = `https://www.superheroapi.com/api.php/${myToken}`;

const max = 1000;
const gerarId = () => Math.floor(Math.random() * max);

btn.addEventListener('click', (event) => {
  event.preventDefault();
  const pegaId = gerarId();

  fetch(`https://www.superheroapi.com/api.php/${myToken}/${pegaId}`)
    .then((result) => result.json())
    .then((data) => {
      img.src = data.image.url;
      legend.innerHTML = data.name;
    })
    .catch((error) => Swal.fire({
      title: 'Herói não encontrado!',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});

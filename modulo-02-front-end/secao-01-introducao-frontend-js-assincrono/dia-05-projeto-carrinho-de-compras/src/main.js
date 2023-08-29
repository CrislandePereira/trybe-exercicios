import './style.css';

let products = [];

const searchAPI = (word) => {
  fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${word}`)
    .then((response) => response.json())
    .then((data) => {
      const items = data.results;
      products = items;

      items.forEach((item) => {
        const divProduct = document.createElement('div');
        divProduct.className = 'product';
        document.querySelector('.content').appendChild(divProduct);

        const divTop = document.createElement('div');
        divTop.className = 'top-img';
        divTop.innerHTML = `<img src="${item.thumbnail}" alt="${item.title}">`;
        divProduct.appendChild(divTop);

        const divInfo = document.createElement('div');
        const info = document.createElement('p');
        divInfo.className = 'info-product';
        info.className = 'product-description';
        info.innerText = `${item.title}`;
        divInfo.appendChild(info);
        divProduct.appendChild(divInfo);

        const divPrice = document.createElement('div');
        divPrice.className = 'add-car';
        divPrice.innerHTML = `<span>R$</span> <h2 class="price-product"> ${item.price}</h2>`;
        divProduct.appendChild(divPrice);

        const divInstallments = document.createElement('div');
        divInstallments.className = 'installments';
        divInstallments.innerHTML = `<span>ou ${item.installments.quantity}x de R$ ${item.installments.amount}</span>`;
        divProduct.appendChild(divInstallments);

        const divButton = document.createElement('button');
        divButton.className = 'btn-add-product';
        divButton.setAttribute('js-id', item.id);
        divButton.innerHTML = `Adicionar ao Carrinho`;
        divButton.addEventListener('click', addProduct);
        divProduct.appendChild(divButton);
      });
    });
}

const carrinho = [];

const showProductsCar = document.querySelector('.show-product-car');

const loadTotal = () => {
  const total = carrinho.reduce((acc, item) => acc + item.price, 0);
  if (total === 0) {
    document.querySelector('#total').innerHTML = '';
  } else {
    const subtotal = document.createElement('h3');
    subtotal.className = 'subtotal';
    subtotal.innerHTML = `<span>Subtotal</span> R$ <span class="value">${total}</span>`;
    document.querySelector('#total').innerHTML = subtotal.outerHTML;
  }
}

const loadCar = () => {
  showProductsCar.innerHTML = '';
  carrinho.forEach((item) => {
    showCar(item);
  });
}

const removeCar = (event) => {
  const id = event.target.getAttribute('js-id');
  const product = carrinho.find((product) => product.id === id);

  const index = carrinho.indexOf(product);
  carrinho.splice(index, 1);
  loadCar();
  loadTotal();
}

const showCar = (item) => {
  const eachProduct = document.createElement('div');
  eachProduct.className = 'each-product';
  showProductsCar.appendChild(eachProduct);

  const image = document.createElement('div');
  image.className = 'circle';
  image.innerHTML = `<img class="img-circle" src="${item.thumbnail}" alt="${item.title}">`;
  eachProduct.appendChild(image);

  const infoProduct = document.createElement('div');
  infoProduct.className = 'info-product-car';
  infoProduct.innerHTML = `<p class="product-car-description">${item.title}</p>`;
  eachProduct.appendChild(infoProduct);

  const priceProduct = document.createElement('h4');
  priceProduct.className = 'price';
  priceProduct.innerHTML = `R$ <span class="number-price">${item.price}</span>`;
  infoProduct.appendChild(priceProduct);

  const buttonRemove = document.createElement('button');
  buttonRemove.className = 'delete';
  const imgRemove = document.createElement('img');
  imgRemove.setAttribute('src', './assets/icon-deletar.svg');
  imgRemove.setAttribute('alt', 'deletar produtos do carrinho');
  imgRemove.setAttribute('js-id', item.id);
  imgRemove.addEventListener('click', removeCar);
  buttonRemove.appendChild(imgRemove);
  eachProduct.appendChild(buttonRemove);
}

const addProduct = (event) => {
  const id = event.target.getAttribute('js-id');
  const product = products.find((product) => product.id === id);
  carrinho.push(product);
  showCar(product);
  loadTotal();
}

searchAPI('computador');

import validator from 'validator';
import './style.css';

const campoText = document.querySelector('#texto');
const buttonValid = document.querySelector('#button');
const displayAnswer = document.querySelector('#answer');
const selectOption = document.querySelector('#option');

buttonValid.addEventListener('click', (event) => {
  event.preventDefault();

  const campos = {
    cpf: validator.isTaxID(campoText.value, 'pt-BR'),
    email: validator.isEmail(campoText.value),
    url: validator.isURL(campoText.value),
    // eslint-disable-next-line max-len
    creditCard: validator.isCreditCard(campoText.value, ['amex', 'dinersclub', 'discover', 'jcb', 'mastercard', 'unionpay', 'visa']),
    locate: validator.isPostalCode(campoText.value, 'any'),
  };

  displayAnswer.innerHTML = `A validação retornou ${campos[selectOption.value]}`;
});

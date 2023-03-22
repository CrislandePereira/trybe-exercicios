let saldo = 100;

function addSaldo(quantia) {
  return quantia + saldo;
}
console.log(addSaldo(50));

function remSaldo(quantia) {
  return saldo - quantia;
}
console.log(remSaldo(30));

function multSaldo(quantia) {
  return quantia * saldo;
}
console.log(multSaldo(2));

function divSaldo(quantia) {
  return saldo / quantia;
}
console.log(divSaldo(10));

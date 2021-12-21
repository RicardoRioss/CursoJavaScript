const teste = /\d+/.exec("O numero 100");

console.log(teste);

console.log(teste.index);

const digitos = /\d+/;

console.log(digitos.exec("Tem o numero 100 aqui"));
console.log(digitos.exec("Tem o numero  aqui"));

const telefone = /\d{4,5}-\d{4}/;

console.log(telefone.test("4004-5050"));
console.log(telefone.test("9999-8080"));
console.log(telefone.test("9999-9"));


const cep = /\d{5}-\d{3}/;

console.log(cep.test("06365-683"));


const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test("(11)99947-4777"));
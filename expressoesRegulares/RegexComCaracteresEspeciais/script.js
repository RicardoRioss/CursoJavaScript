const dia = /\d\d/;

console.log('dia')
console.log(dia.test("2019")&& "2019".length == 2);
console.log(dia.test("asd"));
console.log(dia.test("05")&& "05".length == 2);
console.log(dia.test("asd1"));

const palavraTresLetras = /\w\w\w/;

console.log('3letras')
console.log(palavraTresLetras.test("dia"));
console.log(palavraTresLetras.test("ano"));
console.log(palavraTresLetras.test("oi"));
console.log(palavraTresLetras.test("teste")&& "teste".length == 3 );
const pontoRegex = /./; // O /./ ACEITA QUALQUER COISA DENTRO DA REGEX, É UM CORINGA

console.log('.');
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test("  "));
console.log(pontoRegex.test("123456"));
console.log(pontoRegex.test("asd 123"));

const dRegex = /\d/; // É A MESMA COISA QUE DIGITARMOS [0-9] ACEITA QUAQUER DIGITO DE CARACTER

console.log('d');
console.log(dRegex.test("asd"));
console.log(dRegex.test("  "));
console.log(dRegex.test("123456"));
console.log(dRegex.test("asd 123"));

const DRegex2 = /\D/;// [^0-9] CARACTERES QUE NÃO SÃO NIMEROS

console.log('D');
console.log(DRegex2.test("asd"));
console.log(DRegex2.test("  "));
console.log(DRegex2.test("123456"));
console.log(DRegex2.test("asd 123"));

const sRegex3 = /\s/;

console.log('s');//ESPAÇOS VAZIOS, QUEBRAS DE LINHA E TABS
console.log(sRegex3.test("asd"));
console.log(sRegex3.test("  "));
console.log(sRegex3.test("123456"));
console.log(sRegex3.test("asd123"));

const wRegex4 = /\w/; // SO ACEITA CARACTERES ALFANUMERICOS

console.log('W');//ESPAÇOS VAZIOS, QUEBRAS DE LINHA E TABS
console.log(wRegex4.test("asd"));
console.log(wRegex4.test("  "));
console.log(wRegex4.test("123456"));
console.log(wRegex4.test("asd123"));
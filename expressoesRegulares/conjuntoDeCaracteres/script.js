const reg1 = /[12345]/;



console.log(reg1.test("temos o numero 2 aqui?"));

console.log(reg1.test("temos o numero 5 aqui?"));

console.log(reg1.test("temos o numero 34 aqui?"));

const reg2 = /[0-9]/;

console.log(reg2.test("temos  numero  aqui?"));
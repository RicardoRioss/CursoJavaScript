
const notab = /[^ab]/; // NÃO VAI ACEIRAR A E B, MAS SOMENTE ELAS ISOLADAS


console.log(notab.test("a"));
console.log(notab.test("b"));
console.log(notab.test("bla"));


const nottoaz = /[^a-z]/;

console.log("de A a Z");
console.log(nottoaz.test("a"));
console.log(nottoaz.test("b"));
console.log(nottoaz.test("bla"));
console.log(nottoaz.test("666"));

const az = /[a-z]/;

console.log(nottoaz.test("BNFVABFÇVBÇFBVBÇ"));
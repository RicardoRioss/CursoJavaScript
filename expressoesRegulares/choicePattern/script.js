const frutas = /\d+ (bananas|maçãs|laranjas)/;

console.log(frutas.test("20 bananas"));
console.log(frutas.test("10 batata"));
console.log(frutas.test("25 laranjas"));


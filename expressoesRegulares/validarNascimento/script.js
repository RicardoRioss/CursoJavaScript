const validarDataNasci = /^[0-31]{2}[/][0-31]{2}[/][1910-2021]{4}/;

console.log(validarDataNasci.test('31/10/1986'));
console.log(validarDataNasci.test('31/10/86'));

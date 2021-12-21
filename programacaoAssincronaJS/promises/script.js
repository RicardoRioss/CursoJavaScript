const promessa = Promise.resolve(4 + 8);

console.log("Algum codigo");

promessa.then((value)=> {return value +5})
.then((value)=> {console.log(`A soma é ${value}`)})
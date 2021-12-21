let car = {
    "modelo": "BMW",
    "cor": "Preta",
    "motor": 2.4,
    "portas": 4
}
let jsonToString = JSON.stringify(car);
console.log(jsonToString);                                      


let stringToJson = JSON.parse(jsonToString);
console.log(stringToJson);
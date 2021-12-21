let carro = {
    portas: 2,
    portaMalas: '200l',
    motor: 2.0
}

let adicionais = {
    tetosolar: true,
    arCondicionado: true
}

Object.assign(carro, adicionais)
console.log(carro);
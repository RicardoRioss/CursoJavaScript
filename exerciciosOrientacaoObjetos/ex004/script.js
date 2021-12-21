class Carro {
  constructor(marca,cor,gasolina){
    this.marca = marca;
    this.cor = cor;
    this.gasolina = gasolina;
  }

 dirigir(km){
    let litrosConsumidos = km / 3;

    this.gasolina -= litrosConsumidos;
  }

  abastecer(l) {
    this.gasolina += l;
  }

}

let carro = new Carro('Fusca', 'Amarelo', 50)
console.log(carro);

carro.dirigir(10);
console.log(carro);

carro.abastecer(10);
console.log(carro);
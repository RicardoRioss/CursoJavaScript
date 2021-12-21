class Dog {
    constructor (raca, cor){
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log("AU AU");
    }
}

Dog.prototype.patas = 4;

let labrador = new Dog('Labrador', 'Marron')

console.log(labrador.patas)
labrador.latir();
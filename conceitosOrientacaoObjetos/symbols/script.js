class Dog{
    constructor(raca,cor){
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log("AU AU!");
    }
}

let patas = Symbol();

Dog.prototype[patas]= 4;

let golden =new Dog ("Golden Retriever");

console.log(Dog.prototype[patas]);
console.log(golden[patas])

class Mamifero {
    constructor(patas){
        this.patas = patas;
    }
}

let coiote = new Mamifero(4);

console.log(coiote.patas);


class Dog extends Mamifero{
    constructor(patas, raca) {
        super(patas,patas);
        this.raca = raca;
    }

    locationbar(){
        console.log("AU AU");
    }

}

let pug = new Dog(4, 'Pug');

console.log(pug.patas)
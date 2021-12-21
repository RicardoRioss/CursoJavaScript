class Dog {
    constructor(raca,cor){
        this.raca = raca;
        this.cor = cor;
    }

  

    get getCor(){
        return ` A cor do doguinho é ${this.cor}`
    }

  
    set setCor(cor){
     this.cor = cor;      
    }
}

let pastor = new Dog('Pastor Alemão', 'Preto');
console.log(pastor);

pastor.setCor = 'Marron';

console.log(pastor.getCor);

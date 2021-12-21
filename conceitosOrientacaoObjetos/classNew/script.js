function cachorro(raca, cor, patas){
    this.raca = raca;
    this.cor = cor;
    this.patas = patas;
    this.uivar = function(){
        console.log("Auuuuuuuu")
    }
}

let husky = new cachorro("Husky",4,"cinza")

husky.uivar();
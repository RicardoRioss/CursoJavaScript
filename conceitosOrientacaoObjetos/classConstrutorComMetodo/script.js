function cachorro(raca,cor,patas){
    this.raca = raca;
    this.cor = cor;
    this.patas = patas;
}

cachorro.prototype.uivar = function(){
    console.log("Auuuuuuu!!!!");
}


let pug = new cachorro("Pug","Cinza", 4);

console.log(pug.raca);
console.log(pug.cor);
console.log(pug.patas);
pug.uivar();


///CRIANDO OUTRO METODO AO OBJETO 
cachorro.prototype.latir = function(){
    console.log("AU AU");
}

pug.latir();
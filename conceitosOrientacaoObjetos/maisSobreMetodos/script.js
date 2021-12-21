let pessoa = {
    nome: '',
    setNome: function(novoNome){
        this.nome = novoNome;
    },
    getNome: function(){
        return this.nome;
    }
}
   pessoa.setNome("Ricardo");
   console.log(pessoa.getNome());




   const dog = {
       raca: 'SRD',
       setRaca: function(raca){
           this.raca = raca;
       },
       getRaca: function(){
           return this.raca;
       }
   }
dog.setRaca("pastor alemão");
console.log(dog.getRaca());




const car = {
    modelo: '',
    setModel: function(model){
        this.model = model;
    },
    getModel: function(){
        return this.model;
    }
}

car.setModel('BMW');
console.log(car.getModel());
class Endereco {
  constructor(rua,bairro,cidade,estado) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }

set novaRua(novaRua){
  this.rua = novaRua;
}

set novoBairro(novoBairro){
  this.bairro = novoBairro;
}

set novaCidade(novaCidade){
  this.cidade = novaCidade;
}

set novoEstado(novoEstado){
  this.estado = novoEstado;
}

}

let endereco = new Endereco('Rua Amcaps1', 'Jd Angelica', 'Carapicuiba', 'SP');

console.log(endereco);

endereco.novaRua = 'Rua Ancaps2'
console.log(endereco);

endereco.novoBairro = 'Jd Ana Estela';
console.log(endereco);

endereco.novaCidade = 'Osasco';
console.log(endereco);

endereco.novoEstado = 'Bahia';
console.log(endereco);
class Conta{
  constructor(saldoCC, saldoCP,juros) {
    this.saldoCC = saldoCC;
    this.saldoCP = saldoCP;
    this.juros = juros;
  }

  deposito(valor) {
    this.saldoCC += valor;
  }

  saque(valor) {
   this.saldoCC -= valor;
  }

  tranferenciaCP(valor) {
    this.saldoCC -= valor;
    this.saldoCP += valor;
  }

  tranferenciaCC(valor) {
    this.saldoCP -= valor;
    this.saldoCC += valor;
  }

  jurosAniversario() {
    let juros = (this.saldoCP * this.juros) / 100;
    this.saldoCP += juros;
  }

}

class ContaEspecial extends Conta {
  constructor (saldoCC, saldoCP,juros) {
    super(saldoCC, saldoCP,juros*2); 
  }
}



let conta = new Conta(500, 100, 1);

console.log(conta);

conta.saque(100);
console.log(conta);

conta.deposito(50);
console.log(conta);

conta.tranferenciaCC(50);
console.log(conta);

 conta.jurosAniversario();
 console.log(conta);

 let conta2 = new ContaEspecial(10000, 5000, 1);

 console.log(conta2);
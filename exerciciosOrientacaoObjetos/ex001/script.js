class Conta {
    constructor(saldo){
        this.saldo = saldo;
    }

    deposito(valor){
        this.saldo += valor;
    }

    saque(valor){
        this.saldo -= valor;
    }
}

let conta = new Conta(100)

conta.deposito(200);

console.log(conta)

conta.saque(20)

console.log(conta)
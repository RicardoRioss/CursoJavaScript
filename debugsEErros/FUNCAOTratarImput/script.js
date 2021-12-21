function checarNumero(num) {
    let number = Number(num);
    if(Number.isNaN(number)) {
        alert('Insira um numero valido');
    } else {
        return number;
    }
}



let number = prompt('Digite um numero')

checarNumero(number);
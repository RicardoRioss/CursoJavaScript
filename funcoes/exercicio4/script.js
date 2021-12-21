function verificarTipoDeDado(dado) {

    if(typeof dado === 'string') {
        console.log("Este dado é uma string");
    }else if(typeof dado === 'number'){
        console.log("Este dado é uma number");
    }else if(typeof dado === 'boolean'){
        console.log("Este dado é uma boolean");
    }
}
verificarTipoDeDado("Olá");
verificarTipoDeDado(1);
verificarTipoDeDado(true);

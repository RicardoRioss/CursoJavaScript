function saudacao(nome){
    if(typeof nome != 'string') {
        throw new Error("o parametro não é uma string")
    } else {
        console.log(`olá ${nome}`)
    }
}

saudacao("Ricardo");

saudacao(5);

console.log('teste');
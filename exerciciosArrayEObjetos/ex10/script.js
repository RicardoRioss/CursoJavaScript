const calculadora = {
    soma: function (x,y) {
        return x + y;
    },
    subtrair: function(x,y){
        return x - y;
    },
    dividir: function(x,y){
        return x / y;
    },
    multiplicar: function(x,y){
        return x * y;
    },
    resto: function(x,y){
        return x % y;
    }

}
    console.log(calculadora.soma(2,2));
    console.log(calculadora.subtrair(5,2));
    console.log(calculadora.dividir(10,2));
    console.log(calculadora.multiplicar(2,5));
    console.log(calculadora.resto(2,10));
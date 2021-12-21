let n1 = 1;
let n2 = 2;
let n3 = 3;
let n4 = 4;
let n5 = 5;
let n6 = 6;

function imprimirNumeros(...argumentos){
    for (i = 0; i < argumentos.length; i++){
        console.log(argumentos[i])
    }
}
imprimirNumeros(n1,n2,n3,n4,n5);
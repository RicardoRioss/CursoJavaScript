let a = 1;
let b = 2;
let c = 3;

if(c > a) {
   debugger;
}

for(i = 5; i > 0; i--){
    b++;
    a= a + c + 1;
    c += 2;
    debugger;
}

if(b == a) {
    a ++;
}else {
    a = a + b + c;
}
debugger;

a = a * b;

debugger;

console.log('teste')
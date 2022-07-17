// Console.log também é muito utilizado para debugar
// Imprecidivel excluir o console.log antes do sistema ir para produção
let a = 1;
let b = 2;
let c = 3;

if(c > a){
    a = b
    console.log(a)
}

for(let i = 5; i > 0; i--){
    b++
    c+= 2
    a = a + c +1
    console.log(a)

}

if(b == a){
    a++;
}else{
    a = a + b + c;
}
console.log(a)


a = a*b
console.log(a)

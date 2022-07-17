// Mais utilizado que console.log por ser mais direto

let a = 1;
let b = 2;
let c = 3;

if(c > a){
    a = b
    debugger;
}

for(let i = 5; i > 0; i--){
    b++
    c+= 2
    a = a + c +1
    debugger;

}

if(b == a){
    a++;
}else{
    a = a + b + c;
}
debugger;


a = a*b
debugger;

console.log('teste')

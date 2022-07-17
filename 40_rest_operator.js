let num0 = 0;
let num1 = 1;
let num2 = 2;
let num3 = 3;

function imprimirNumeros(...args){

    for(let i = 0; i < args.length; i++){
        console.log(args[i])
    }
}

imprimirNumeros(num0,num1,num2);
console.log('PAUSA')
imprimirNumeros(num3)
console.log('PAUSA')
imprimirNumeros(1,2,3,4,5,6,7,8)

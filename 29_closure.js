//Closure é a forma de fazer com que as variáveis dentro de uma função sejam privadas e persistentes.

function lembrarSoma (x){

    return function(y){
        return x + y;
    }
}

let soma1 = lembrarSoma(2)
console.log(soma1(4))

let soma2 = lembrarSoma(10)
console.log(soma2(1))
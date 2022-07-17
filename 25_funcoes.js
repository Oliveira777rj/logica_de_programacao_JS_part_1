function escreverNoConsole (){
    console.log('escrever no console')
}

escreverNoConsole()

// função anonima
const escrever = function (){

    console.log('Texto no console')
}

escrever()

//Outra forma de uso

function imprimirValor(num){
    console.log(`Valor impresso foi ${num}`)
}

imprimirValor(11)

//............................

function multiplicacao(a,b,c){
    return a*b*c
}
console.log(multiplicacao(2,2,4))

const mult = multiplicacao(2,4,4)

console.log(`O valor da mult é ${mult}`)
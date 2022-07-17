// Deletando e criando nova propriedade


//deletando
console.log(gato.patas)
delete gato.patas
console.log(gato.patas) // undefined
//criando
gato.idade = 2 // muito utilizado
console.log(gato.idade)

//copiando um objeto dentro de outro objeto
let carro = {

    motor:1.0,
    cor:'Branco',
}

let adicionais = {

    travaEletrica: true,
    arCondicionado: true,
}

Object.assign(carro,adicionais)
console.log(carro)

// Formas de verificar chaves de um objeto
console.log(Object.keys(pessoa))
console.log(Object.keys(gato))
console.log(Object.keys(adicionais))







// Loops arrays, muito utilizado na programação 
let valores = [1,2,3,4,5,6,7,8,9,10]

for(let i = 0; i <= valores.length; i++){
    console.log(valores[i])
}

let name = ['Luis', 'Jose', 'Abraão']

for(let u = 0; u <= name.length;u++){
    console.log(name[u])
}







// pop e push
// pop remove no final do array
let elementoRemovido = name.pop()
console.log(elementoRemovido)
console.log(name)

// push adiciona no final
let removido = name.push('Michel')
console.log(name)

// mutabilidade, copia um objeto para outro objeto
let Pessoa = pessoa

console.log(Pessoa)
console.log(pessoa == Pessoa)



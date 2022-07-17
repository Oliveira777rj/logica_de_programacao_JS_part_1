let pessoa = {

    nome:'Michel',
    idade: 23,
    profissao: 'futuramente, programador',

}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.profissao)

//[] = array
//{} = objeto

// Formas de verificar chaves de um objeto
console.log(Object.keys(pessoa))
console.log(Object.keys(gato))
console.log(Object.keys(adicionais))



let gato = {

    nome:'daynerys',
    patas: 4,
    sexo: 'femea',
    miar:function(){
        console.log('miau')
    }

}

console.log(gato.nome)
//propriedade função
gato.miar()








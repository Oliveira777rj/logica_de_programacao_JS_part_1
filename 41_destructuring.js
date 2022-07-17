const pessoa = {
    name:'Michel',
    lastname:'Oliveira'
}

const {'name':fname, 'lastname':uname} = pessoa;

console.log(fname)
console.log(uname)

const carro = {
 marca: 'Ford',
 cor: 'Branco'
}

const {'marca':montadora,'cor': vcor} = carro

console.log(montadora)
console.log(vcor)

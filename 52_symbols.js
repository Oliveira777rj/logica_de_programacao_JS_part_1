class Cachorro{

    constructor(raca,cor){
        this.raca = raca;
        this.cor = cor;
    }
    latir(){
        console.log('Au au')
    }
}

let patas = Symbol();

Cachorro.prototype[patas] = 4

console.log(Cachorro.patas) // teste
console.log(Cachorro.prototype[patas]) // acessando symbols

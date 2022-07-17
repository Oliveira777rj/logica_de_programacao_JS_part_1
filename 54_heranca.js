class Mamifero {

    constructor(patas){
        this.patas = patas;
    }
}

let coiote = new Mamifero(4)

console.log(coiote.patas)

class Cachorro extends Mamifero{

    constructor(patas, raca){
        super(patas,raca);
        this.raca = raca
    }
    latir(){
        console.log('Au au')
    }
}

let pug = new Cachorro('Pug', 4)

console.log(pug.patas)
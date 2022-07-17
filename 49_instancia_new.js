function Cachorro(raca,patas,cor){

    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function(){
        console.log('auuu')
    }
}

let labrador = new Cachorro('labrador',4,'preto');

console.log(labrador)
labrador.uivar()
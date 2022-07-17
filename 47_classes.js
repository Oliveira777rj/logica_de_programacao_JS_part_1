let cachorro = {
    patas:4,
    raca:'SRD',
    latir:function(){
        console.log('au au');
    }
}

let labrador = Object.create(cachorro);

labrador.latir()
labrador.raca = 'Labrador'

console.log(labrador.raca)
console.log(cachorro.raca)

let pitbull = Object.create(cachorro)

pitbull.raca = 'Pitbull'
console.log(pitbull.raca)
console.log(pitbull.patas)

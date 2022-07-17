function criarCachorro(raca,patas,cor){

    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    return cachorro;
}
let pitbull = criarCachorro('pitbull',4,'branco');

console.log(pitbull)
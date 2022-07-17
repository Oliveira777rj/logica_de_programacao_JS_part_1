// podemos converter o JSOn para string de maneira fácil

const carro = {

    "marca": "BMW",
    "motor": "v8",
    "cambio": "manual",
    "cor": "prata"
}

let jsonParaString = JSON.stringify(carro)
console.log(jsonParaString)

// converter string em json

let carroJSON = JSON.parse(jsonParaString)
console.log(carroJSON)
console.log(carroJSON.cambio)

// tratando o envio de dados do cliente

function checarNumero(num){
    let number = Number(num);

    if(Number.isNaN(number)){
        console.log('Por favor, passe só números para o programa')
    }else{
        return number
    }
}


console.log(checarNumero(8))
console.log(checarNumero('abcd'))

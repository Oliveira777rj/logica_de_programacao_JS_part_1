function soma (a,b){

    if(a === undefined || b === undefined){

        console.log(`Esta função precisa ter argumentos`);
    } else{
        return a + b
    }
}


console.log(soma(1))
console.log(soma(1,2))

//função sendo executado mesmo faltanto argumento.

function saudacao (nome, idade){

    if(idade === undefined){

        console.log(`Olá ${nome}`)
    }else{

        console.log(`Ola ${nome}, você tem ${idade} de idade.`)
    }
}

saudacao('Michel')
saudacao('Michel', 23)
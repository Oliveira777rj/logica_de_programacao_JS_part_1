function saudacao (nome){
    if(typeof nome != 'string'){
        throw new Error('O parâmetro nome precisar ser string');
    }else{
        console.log(`Bem-vindo, ${nome}`)
    }
}

saudacao('Michel')
saudacao(8)


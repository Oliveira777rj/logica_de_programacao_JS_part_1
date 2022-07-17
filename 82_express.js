/*
O Express é um framework para aplicativo da web do Node.js mínimo e flexível que 
fornece um conjunto robusto de recursos para aplicativos web e móvel. 
*/

let express = require('express');
let app = express();

app.get('/',function(req,res){

    res.send('Primeira rota com Express');
});

app.listen(3000,function(){
    console.log('Rodando na porta 3000');
})
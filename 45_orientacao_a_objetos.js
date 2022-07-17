/* Orientação a objeto é uma forma de programar, que utiliza os objetos como o seu principal príncipio;
 Além de utilizar conceitos e técnicas que envolvem objetos;
 A maioria dos software, na parte de bacjend são desenvolvidos em cima desse paradigma;
 Grandes frameworks utilizando essa tecnica, Laravel e Django;
*/

//métodos

const calculo = {
    operacao:'s',
    soma: function(a,b){
        console.log(a+b)
    },
    subtrair: function(a,b){
        console.log(a-b)
    },
    setOperacao:function(operacao){
        this.operacao = operacao;
    },
    getOperacao: function(){
        return 'A operação a ser executada é a ' + this.operacao
    }
}

calculo.setOperacao('subtração')
console.log(calculo.operacao)
console.log(calculo.getOperacao())
calculo.soma(7,1)
calculo.subtrair(9,1)
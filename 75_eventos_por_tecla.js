//KeyDown ocorre quando o usuário pressiona uma tecla. KeyUp ocorre quando o usuário libera uma chave.

let bt1 = document.querySelector("#bt1");
let bt2 = document.querySelector("#bt2");
let p = document.querySelector('p');
let a = document.querySelector('a');

window.addEventListener('keydown',function(e){
    if(e.key == 'q'){
        console.log('Apertou a letra q')
    }else if(e.keu == 'Enter'){
        console.log('apertou o enter')
    }
});

window.addEventListener('keyup',function(e){
    if(e.key == 'Enter'){
        console.log('Soltou o enter')
    }

})
let bt1 = document.querySelector("#bt1");
let bt2 = document.querySelector("#bt2");
let p = document.querySelector('p')

function msg(e){
    console.log('Clicou no button')
    e.stopPropagation();
}

bt1.addEventListener('click',msg);

bt2.addEventListener('click',() => {
    bt1.removeEventListener('click',msg)
})

p.addEventListener('click',function(){ 

    console.log('Você clicou em um paragrafo')
})
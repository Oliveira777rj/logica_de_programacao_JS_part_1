let bt1 = document.querySelector("#bt1");
let bt2 = document.querySelector("#bt2");

function msg(){
    console.log('Clicou!')
}

bt1.addEventListener('click',msg);

bt2.addEventListener('click',() => {
    bt1.removeEventListener('click',msg)
})
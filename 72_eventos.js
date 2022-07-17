let bt1 = document.querySelector("#bt1");
let bt2 = document.querySelector("#bt2");

function msg(e){
    console.log(e)
}

bt1.addEventListener('click',msg);

bt2.addEventListener('click',() => {
    bt1.removeEventListener('click',msg)
})
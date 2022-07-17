let bt1 = document.querySelector('#bt1');

bt1.addEventListener('mousedown', function(){

    console.log('Apertou o botão')
});

bt1.addEventListener('mouseup', function(){
    console.log('Soltou o mouse')
})

bt1.addEventListener('keydown', function(e){
    if(e.key == 'm'){
        console.log('Apertou o m')
    }
})
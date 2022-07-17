let x = 0

while(x < 20){
    x++
    if(x % 2 == 0){
        console.log('Caiu no continue')
        continue;
    }
    console.log(x)
}
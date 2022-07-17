/* Finally é executado independente do resultado de try catch */

try{
    let a = 2 + b;
}catch(Error){
    console.log(Error)
}finally{
    console.log('Executou')
}

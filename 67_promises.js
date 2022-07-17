// As promises são ações que podem produzir um valor algum momento do codigo

let p = Promise.resolve(5);

console.log('Outros códigos');
console.log(p);

p.then((value) => {console.log(`O valor é ${value}.`)})
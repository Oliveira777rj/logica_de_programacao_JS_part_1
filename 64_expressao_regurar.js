const reg1 = /[12345]/

console.log(reg1.test('Temos o número 6'));
console.log(reg1.test('Temos o número 2'));


const pontoRegex = /./;

console.log(pontoRegex.test('asd'))
console.log(pontoRegex.test(' '))
console.log(pontoRegex.test('123'))
console.log(pontoRegex.test('123sad'))


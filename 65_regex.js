let validarDataNasc = /^[0-31]{2}[/][1-12]{2}[/][0-9]{4}/;

console.log(validarDataNasc.test('18/08/1998'));
console.log(validarDataNasc.test('1/8/1998'));

let validarMarca = /(Nike|Adidas|Puma)/;
console.log(validarMarca.test('Nike'));

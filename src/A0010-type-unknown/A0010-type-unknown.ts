// tipo unknown
// é parecido com o any, porém mais 'seguro'
// diferente do any, ele necessita de uma checagem e/ou
// validação para que seja possível realizar uma operação

let x: unknown;

x = 10;
x = 'Leo';
x = true;
x = '10';

const y = 200;

// notamos que ele não me permite fazer a operação dizewndo
// que o x é do tipo unknown, logo, teríamos que verificar
// console.log(x + y);

// aqui conseguimos realizar
if (typeof x === 'number') {
  console.log(x + y);
} else {
  console.log('Operação inválida');
}

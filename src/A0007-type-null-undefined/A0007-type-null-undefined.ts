// tipos null e undefined

// undefined
let x;
// checamos se é undefined
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

// quando algo é opcional ele será retornado undefined
// se não for informado, aí precisaríamos fazer a checagem dos dados
export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

// Null
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

// notamos que o resultado da função vai ser ou null ou number
const squareOfTwoNumber = squareOf(2);
// const squareOfTwoString = squareOf('2');

// quando fizemos isso temos que checar os dados. Um ex:
if (squareOfTwoNumber === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwoNumber);
}

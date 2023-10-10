// Tipos literais
// é usar valores como tipos

// eslint-disable-next-line
let x = 10;
x = 0b1010;

// notamos que o tipo de y só pode ser 10
// logo é um tipo literal
const y = 10;

// não deve ser feito, devemos usar const
let z: 100 = 100; // eslint-disable-line

// outra possibilidade
let a = 100 as const; // eslint-disable-line

// com objetos
// vemos que o tipo é 'Leo', logo, literal
const pessoa = {
  nome: 'Leo' as const,
  sobrenome: 'Policarpo',
};

pessoa.nome = 'Leo';

function escolhaCor(cor: 'Vermelho' | 'Azul' | 'Amarelo') {
  return cor;
}

console.log(escolhaCor('Vermelho'));

// module mode
export default 1;

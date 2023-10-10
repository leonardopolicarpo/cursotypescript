/* eslint-disable */

// Type Annotation - é dizer que determinado item é de determinado tipo
// string, number sintaxe ': tipo'

// Tipos básicos (aqui ocorre a inferência de tipos)
// logo não é necessário atribuir, a menos que retorne 'n'
let nome: string = 'Leo';
let idade: number = 30; // 10, 1.5, -5.9, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n;

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];

let arrayDeStrings: Array<string> = ['a', 'b', 'c'];
let arrayDeStrings2: string[] = ['a', 'b', 'c'];

// Objetos
// diferente do array, preciso informar para cada chave o tipo
// ao usar ? defino que o campo é opcinal dentro do objeto
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'Leo',
  idade: 27
};

// notamos que fica verboso, para resolver isso, temos a possibilidade
// de usar Type Alias, uma espécie de variável de tipo
// criamos os tipos com letra maiúscula para diferenciar dos tipos da linguagem

type Pessoa = {nome: string, idade: number, adulto?: boolean}

let pessoa2: Pessoa = {
  nome: 'Camilo',
  idade: 17
}

// Funções
// O TypeScript é inteligente para identificar o retorno, ele faz a inferência
// inclusive para uma variável que armazenasse o valor de retorno
function soma(x: number, y: number) {
  return x + y;
}

// mas se caso quiséssemos ou fosse necessário bastaria passar na função
// qual o tipo do valor retornado. Ex
function subtracao(x: number, y: number): number {
  return x - y;
}

// outra forma de fazer a tipagem
const soma2: (x: number, y: number) => number = (x, y) => x + y;

// ou ainda como já vimos
type TypesFunction = (x: number, y: number) => number
const subtracao2: TypesFunction = (x, y) => x - y;

export {pessoa};

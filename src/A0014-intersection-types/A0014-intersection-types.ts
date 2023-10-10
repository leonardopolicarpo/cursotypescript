// Intersection types &
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

// union type
// | ou
type Pessoa = TemNome | TemSobrenome | TemIdade;

const pessoa: Pessoa = {
  idade: 27,
  nome: 'Leo',
};

console.log(pessoa);

// intersection type
// & and
type Pessoa2 = TemNome & TemSobrenome & TemIdade;

const pessoa2: Pessoa2 = {
  idade: 30,
  nome: 'Camilo',
  sobrenome: 'Policarpo',
};

console.log(pessoa2);

// conjunto
type AB = 'A' | 'B';
type AC = 'A' | 'C';
// interseção no caso é A
type Intersection = AB & AC; // eslint-disable-line

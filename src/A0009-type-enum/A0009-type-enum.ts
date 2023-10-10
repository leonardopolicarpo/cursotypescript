// tipo enum

// estrutura de dado ordenados
// é um tipo e um valor, logo, começamos com maiscúla

// gera automaticamente um valor para cada campo
enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
}

console.log(Cores);
console.log(Cores.VERMELHO); // retorna 0
console.log(Cores[0]); // retorna VERMELHO

// podemos fazer de números, strings, etc

// nesse exemplo anterior se quiséssemos começar a contagem com outro
// número bastaria informar

enum Cores2 {
  VERMELHO = 1,
  AZUL, // 2
  AMARELO, // 3
}

console.log(Cores2);

// se quiséssemos valores definidos para cada um basta informar

enum Cores3 {
  VERMELHO = 10,
  AZUL = 100,
  AMARELO = 1000,
}

console.log(Cores3[1000]);

// exemplo de outros dados

enum Dados {
  VERMELHO = 10,
  AZUL = 20,
  ROXO = 'ROXO', // não consegue seguir sem atribuir um valor pro seguinte
  VERDE = 30,
  ROSA, // 31
}

console.log(Dados['ROXO']);

// merge de enums

enum Cores4 {
  VERMELHO = 10,
  AZUL = 100,
  AMARELO = 1000,
}

enum Cores4 {
  ROXO = 20,
  VERDE = 200,
  ROSA = 2000,
}

console.log(Cores4);

export function escolhaACor(cor: Cores4): void {
  console.log(Cores[cor]);
}

// escolhaACor(151);

// Union Types
// quantdo temos mais de um tipo de retorno/ parametro/ variável
// podemos falar isso para o TS usando sinal de pipe '|'

// string | number | boolean

// ao usarmos esse tipo precisamos também checar o tipo do dado
// antes de realizar algo

function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a} ${b}`;
}

console.log(addOrConcat(10, 20)); // 30
console.log(addOrConcat('10', '20')); // 10 20
console.log(addOrConcat('10', 20)); // 10 20
console.log(addOrConcat(10, '20')); // 10 20

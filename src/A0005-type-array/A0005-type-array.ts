// tipo array
// há duas maneirad de criar um array
// Array<Type> ou Type[]
// podemos passar qualquer tipo, incluindo nossos próprios

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acumulador, valor) => acumulador * valor, 1);
}

console.log(multiplicaArgs(5, 3, 2));

export function concatenaStrings(...args: string[]) {
  return args.reduce((acumulador, valor) => acumulador + ' ' + valor);
}

console.log(concatenaStrings('Oi', 'isso', 'é', 'um', 'teste'));

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

console.log(toUpperCase('oi', 'kkk'));

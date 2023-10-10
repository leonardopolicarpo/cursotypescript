// declaration merging em interfaces

// com type não podemos fazr isso
/*
  type Pessoa = {
    nome: string;
  };

  interface Pessoa {
    sobrenome: string;
  }
*/
// porém duas interfaces com o mesmo nome é possível
// daí o nome declaration merging

interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
}

// podemos ter atributos opcionais como já vimos
// com isso o TS inferiu que pode ser number ou undefined
// também podemos dizer que é apenas para leitura caso exista
interface Pessoa {
  readonly idade?: number;
}

export const pessoa: Pessoa = {
  nome: 'Leo',
  sobrenome: 'Policarpo',
  enderecos: ['Rua V J P'],
};

// pessoa.enderecos.push('Rua J G P');
console.log(pessoa);

// interfaces

/*
  A diferença entre type e interfaces é que usamos interfaces para
  modelar objetos, apesar de ambos poderem ser utilizados

  Interfaces é deixar claro que está modelando uma forma
*/

/*
  transformando esse tipo em interface
  type TipoNome = {
    nome: string;
  };
*/

// assim como classe é como se estivéssemos modelando o objeto
interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

// não conseguimos fazer essa intersection com interface
// type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;

// porém conseguimos extender interfaces
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

// e tem o mesmo resultado
export class Pessoa implements TipoPessoa2 {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

// para implementar em um objeto seria da mesma forma
const pessoaObj: TipoPessoa2 = {
  nome: 'Leo',
  sobrenome: 'Policarpo',
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
};
console.log(pessoaObj.nomeCompleto());

const pessoa = new Pessoa('Maria', 'Pereira');
console.log(pessoa.nomeCompleto());

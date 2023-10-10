// herança   "é um"
// no TS só se permite herdar uma classe
// diagrama UML yworks.com/yed-live

export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

//Aluno é uma pessoa
export class Aluno extends Pessoa {
  // herda os métodos do pai porém é possível sobrescrever
  // caso seja necessário
  getNomeCompleto(): string {
    return ` Aluno: ${this.nome} ${this.sobrenome}`;
  }
}

// cliente é uma pessoa
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return ` Cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa1 = new Pessoa('Dalila', 'Policarpo', 18, '000.000.000-00');
const aluno1 = new Aluno('Camilo', 'Policarpo', 18, '000.000.000-00');
const cliente1 = new Cliente('Leo', 'Policarpo', 27, '000.000.000-00');

console.log(pessoa1.getNomeCompleto());
console.log(aluno1.getNomeCompleto());
console.log(cliente1.getNomeCompleto());

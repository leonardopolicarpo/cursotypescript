// método 'detalhado', ás vezes é necessário

export class Pessoa {
  nome: string;
  sobrenome: string;
  private idade: number;
  protected cpf: string;

  constructor(nome: string, sobrenome: string, idade: number, cpf: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.cpf = cpf;
  }

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

export class Aluno extends Pessoa {
  sala: string;

  constructor(
    // herança da super class
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    // propriedade criada nessa classe
    sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
    this.sala = sala;
  }

  getNomeCompleto(): string {
    console.log('Fazendo algo antes');
    const result = super.getNomeCompleto();
    return result + ' HEYYYYYY';
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return ` Cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa1 = new Pessoa('Dalila', 'Policarpo', 18, '000.000.000-00');
const aluno1 = new Aluno('Camilo', 'Policarpo', 18, '000.000.000-00', '8º Ano');

console.log(pessoa1.getNomeCompleto());
console.log(aluno1);

// herança   "é um"
// no TS só se permite herdar uma classe
// diagrama UML yworks.com/yed-live

// base class - parent class - 'super class'
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

// 'sub class'
// para se ter acesso há algo da super classe
// usamos a palavra 'super'
export class Aluno extends Pessoa {
  constructor(
    // passa a ser valores ao executar o super
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    // algo específico para o aluno
    public sala: string,
  ) {
    // executamos o super para criar uma pessoa aluno
    // e passo como argumento os dados do construtor
    super(nome, sobrenome, idade, cpf);
    // agora ao instaciar essa classe vai gerar um aluno
    // com os valores da super classe + a sala criada aqui

    /* Como já vimos aqui usamos o méto curto para criar as propridades
      do objeto, se quiséssemos fazer do outro método seria necessário
      retirar o public, incializar e definir o tipo

        sala: string

      e por fim colocar como retorno do construtor

        this.sala = sala;

      !!!!!!!!!!!!!!!!!!!!!! ver A0024-super-2 :) !!!!!!!!!!!!!!!!!!!!!!
    */
  }

  getNomeCompleto(): string {
    console.log('Fazendo algo antes');
    const result = super.getNomeCompleto();
    return result + ' HEYYYYYY';
  }
}

// 'sub class'
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return ` Cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa1 = new Pessoa('Dalila', 'Policarpo', 18, '000.000.000-00');
const aluno1 = new Aluno('Camilo', 'Policarpo', 18, '000.000.000-00', '8º Ano');

console.log(pessoa1.getNomeCompleto());
console.log(aluno1);

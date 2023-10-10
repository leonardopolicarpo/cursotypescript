// getter and setter

export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private _idade: number,
    private cpf: string,
  ) {
    // maneira mais simples de chamar o setter
    this.idade = _idade;
  }

  // maneira antiga
  // setter - é para setar algo
  setCpf(valor: string): void {
    this.cpf = valor;
  }

  // isso é um getter, disponibiliza atributos privados
  // através de métodos públicos
  getCpf(): string {
    return this.cpf.replace(/\D/g, ' ');
  }

  // maneire atual JS e TS
  // vai se comportar como atributo apesar de ser um método
  // por isso por convenção acrescenta um _ (underscore) no
  // atributo em questão
  // e um set não pode haver tipo de retorno
  set idade(idade: number) {
    console.log('SETTER CHAMADO');
    this._idade = idade;
  }

  get idade(): number {
    console.log('GETTER CHAMADO');
    return this._idade;
  }
}

const pessoa = new Pessoa('Leo', 'Policarpo', 27, '111.111.111-11');
pessoa.setCpf('123.456.789-10');
console.log(pessoa.getCpf());

// para utilizar o setter acessamos como atributo
pessoa.idade = 28;

// para utilizar o getter fazemos o mesmo
pessoa.idade;

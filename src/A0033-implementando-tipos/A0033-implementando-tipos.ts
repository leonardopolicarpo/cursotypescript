// implementando Type Alias em classes

export abstract class TipoPessoa {
  protected abstract nome: string;
  protected abstract sobrenome: string;
  protected abstract nomeCompleto(): string;
  // ou ainda
  // protected abstract nomeCompleto: () => string;
}

export class Pessoa extends TipoPessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {
    super();
  }

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

// para transformar a classe em tipo fazemos
type TipoPessoa2 = {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
};

// e para usar o tipo da classe usamos a palavra implements (implementar)

export class Pessoa2 implements TipoPessoa2 {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa2('Leo', 'Policarpo');
console.log(pessoa.nomeCompleto());

// podemos usar mais de um tipo, para exemplificar
type TipoNome = {
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

type TipoNomeCompleto = {
  nomeCompleto: () => string;
};

export class Pessoa3 implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa3 = new Pessoa3('Maria', 'Pereira');
console.log(pessoa3.nomeCompleto());

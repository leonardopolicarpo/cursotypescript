// Atributos e métodos estáticos
// método que pode ser acessado sem instaciar a classe
// !!! não conseguimos acessar o método pela instância !!!
// usamos a palavra reservada static

export class Pessoa {
  // também podemos criar atributos estáticos, é o mesmo príncipio
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  // exemplo simples
  static falaOi(): void {
    console.log('Oi');
  }

  // podemos criar um método normal a ser isntanciado pela classe
  // mas que retorna atributos estáticos
  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  // factory method - padrão de projeto/design pattern
  // ex criar uma pessoa apenas com nome e sobrenome, sem isntanciar a classe
  // nesse exemplo está criando uma instância da própria classe
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, 0, '000.000.000-00');
  }

  // pra facilitar a visualização, criar outro método estático para utilizar
  // os atributos estáticos
  // para acessar não usamos o this, e sim a classe em si
  static criaOutraPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

// não tenho acesso ao método pelo objeto/instância criado(a)
const pessoa1 = new Pessoa('Leo', 'Policarpo', 27, '000.000.000-00');
console.log(pessoa1);

// tenho acesso ao método estático pela classe
Pessoa.falaOi();

// para criar uma nova pessoa acessamos o método estático
// logo não precisamos do new para instanciar a classe
const pessoa2 = Pessoa.criaPessoa('Camilo', 'Policarpo');
console.log(pessoa2);

// aqui acessamos o outro método estático com atributos estáticos
const pessoa3 = Pessoa.criaOutraPessoa('Dalila', 'Policarpo');
console.log(pessoa3);

// aqui acessamos o método criado que retorna os atributos estáticos
pessoa1.metodoNormal();

// temos acesso aos atributos estáticos da mesma forma que os métodos
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);

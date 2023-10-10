// construtor privado

// padrão de projeto/ design pattern - singleton - GoF
// quando instanciamos uma classe ou recebemos uma instância que já foi criada
// anteriormente por alguém do sistema
// ou obtemos a nova instância criada

// nesse exemplo ao criar uma conexão com o banco de dados podemos
// instanciar 2 vezes, sendo que num projeto real não seria necessário
// pois já estaria conectado ao banco de dados

export class Database {
  constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password} `);
  }
}

const db1 = new Database('localhost:3000', 'root', '123456');
db1.connect();

const db2 = new Database('localhost:3000', 'root', '123456');
db2.connect();

console.log(db1 === db2);

// no TS podemos criar um construtor privado, e ao fazer isso não temos
// mais acesso ao new para instanciar a classe

export class Database2 {
  // usamos static pois não conseguimos instanciar essa classe
  // e private para não ser acessado fora da classe
  // criamos esse atributo para ser retornado ou criado
  private static database: Database2;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password} `);
  }

  // padrão de projeto/design pattern - factory method - GoF
  // é um método que cria um novo objeto sem instanciar a classe

  // lembrando podemos acessar métodos estáticos fora da classe sem instanciar
  // vou chamar esse método para criar o Database ou me retornar uma que já foi criada
  static getDatabase(host: string, user: string, password: string): Database2 {
    // primeiro checamos se existir retornamos o Database (conexão com o DB)
    if (Database2.database) {
      console.log('Retornando isntância já criada');
      return Database2.database;
    }
    // não havendo vai ser criada a instância
    console.log('Criando nova instância');
    Database2.database = new Database2(host, user, password);
    // e por fim retornado o Database (conexão)
    return Database2.database;
  }
}

const db3 = Database2.getDatabase('localhost:3000', 'root', '123456');
db3.connect();

const db4 = Database2.getDatabase('localhost:3000', 'root', '123456');
db4.connect();

console.log(db3 === db4);

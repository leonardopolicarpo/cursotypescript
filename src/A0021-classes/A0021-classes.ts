// método longo de escrever construtor
export class Empresa {
  public readonly nome: string; // public não necessário
  // aqui inicializamos a propriedade sem o constructor
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  // toda classe precisa de um costrutor para gerar um objeto
  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionarColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    // praticar for
    /* for (let i = 0; i < this.colaboradores.length; i++) {
      console.log(this.colaboradores[i]);
    } */

    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

// método curto
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const minhaEmpresa = new Empresa('Politech', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Leo', 'Policarpo');
const colaborador2 = new Colaborador('Maria', 'Mirando');
const colaborador3 = new Colaborador('João', 'Vieira');

minhaEmpresa.adicionarColaborador(colaborador1);
minhaEmpresa.adicionarColaborador(colaborador2);
minhaEmpresa.adicionarColaborador(colaborador3);

minhaEmpresa.mostrarColaboradores();

console.log(minhaEmpresa);

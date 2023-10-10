// objetivo da aula foi entender a diferença entre ambos

// método longo de escrever construtor
export class Empresa {
  readonly nome: string;
  // diferente do private pode ser acessado pelas sub classes
  // mas apenas nela, pois ainda é restrita ás classes
  // não ficando disponíveis fora dela
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionarColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Politech extends Empresa {
  constructor() {
    super('Politech', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

// método curto
// nesse caso é obrigatório informar que é public
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa2 = new Politech();
const colaborador1 = new Colaborador('Leo', 'Policarpo');
const colaborador2 = new Colaborador('Maria', 'Mirando');
const colaborador3 = new Colaborador('João', 'Vieira');

empresa2.adicionarColaborador(colaborador1);
empresa2.adicionarColaborador(colaborador2);
empresa2.adicionarColaborador(colaborador3);

const colaboradorRemovido = empresa2.popColaborador();
console.log(colaboradorRemovido);

console.log(empresa2);

empresa2.mostrarColaboradores();

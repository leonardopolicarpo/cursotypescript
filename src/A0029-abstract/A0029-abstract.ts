// Classes, métodos e atributos abstratos

/*
  CLASSES ABSTRATAS
  Utilizamos classes abstratas por dois motivos:

  Para termos um tipo, todas as classes que extenderam aquela classe
  vão ser do mesmo tipo da classe abstrata

  E, mais importante que isso, garantimos que todas as classes que
  extenderem a classe abstrata tenham determinado método ou atributo
*/

/*
  MÉTODOS ABSTRATOS
  Notamos que essa classe foi criada para que outras classes herdem
  dela tudo que ela tem, logo isso nos indica que é um classe abstrata
  então usamos a palavra abstract

  Ao usar, habilitamos duas coisas no programa:

  1- a classe não pode mais ser instanciada diretamente, ou seja,
  só podemos isntanciar por subclasses dela - Classes Concretas
  Ex: Guerreira, Monstro, com elas podemos usar o new :)

  2- e agora podemos criar métodos abtratos , esses métodos não trazer
  retorno que vai ser definido em cada sub classe.
  'PODEMOS DEFINIR QUANTOS MÉTODOS FOREM NECESSÁRIOS'
  Obs.: toda classe que extender da super classe (Personagem) precisa
  ter esse método e ter o mesmo retorno definido. no exemplo (void)
  Ex. bordao
*/

/*
  ATRIBUTOS ABSTRATOS

*/

export abstract class Personagem {
  // aqui criamos um atributo protected para só ser utilizado nessa
  // classe e nas subclasses e abstract para que cada subclasse
  // defina o seu, também é obiragatório para as sub classes
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    console.log(`${this.nome} está atacando ${personagem.nome}`);
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  // na super classe também temos 'acesso' ao que foi criado nas
  // sub classes, por exemplo, vamos colocar o emoji
  perderVida(forcaAtaque: number): void {
    console.log(`${this.nome} tem ${this.vida} de vida`);
    this.vida -= forcaAtaque;
    console.log(
      `${this.emoji} - ${this.nome} foi atacado(a) e agora tem ${this.vida} de vida`,
    );
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  // definimos o atributo para o personagem
  protected emoji = '\u{1F9DD}';

  // definimos o método apenas para a personagem
  bordao(): void {
    console.log(this.emoji + ' GUERREIRAAAAA AOOOOOOO ATAAAAQUEEEE!!!!');
  }
}

export class Monstro extends Personagem {
  // definimos o atributo para o personagem
  protected emoji = '\u{1F9DF}';

  // definimos o método apenas para a personagem
  bordao(): void {
    console.log(this.emoji + ' MONNNNNNNNSSSSSSSSTERRRRRRRRRR!!!!');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);

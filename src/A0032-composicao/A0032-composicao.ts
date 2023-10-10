// composição
// uma classe não existe sem a outra
// podemos associar isso com um carro e o motor
// ou ainda um humano e o coração
// se tirar um o outro não existe
// uma classe vai ser criada dentro da outra

export class Carro {
  // instanciamos o motor dentro do carro
  private readonly motor = new Motor();

  // aqui definimos os métodos, o carro controla o motor
  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor está ligado');
  }

  acelerar(): void {
    console.log('Motor está acelerando');
  }

  parar(): void {
    console.log('Motor está parado');
  }

  desligar(): void {
    console.log('Motor está desligado');
  }
}

const carro = new Carro();
carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();

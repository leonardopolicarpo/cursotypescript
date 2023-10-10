// Tipo  void
// muito utilizado no TS significa que uma expressão,
// funcção ou método não retorna nada

// no JS por padrão retornaria undefinied
// tipo void numa função
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

semRetorno('Olá', 'Leo', 'Policarpo');

// tipo void num objeto/método
const pessoa = {
  nome: 'Leo',
  sobrenome: 'Policarpo',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

pessoa.exibirNome();

export { pessoa };

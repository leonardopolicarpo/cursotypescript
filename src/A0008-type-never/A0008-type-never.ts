// tipo never
// significa que determinado método ou funcão nunca irá retornar algo

export function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();

// geralmente trava a aplicacão em determinado lugar
// ou lança um erro

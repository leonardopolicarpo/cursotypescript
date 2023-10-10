/*
// Tipo Object

// inferência
const objetoA = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'Outro valor';
objetoA.chaveB = 2;
objetoA.chaveC = 'Nova chave não existe e não é possível criar';

// explícito / literal - não usar
// object ou {}
const objetoB: object = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoB.chaveA = 'Novo valor não é aceito';

// objeto aberto
// Record - 'gravar', seguido do tipo da chave e do valor
const objetoC: Record<string, unknown> = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoC.chaveA = 'Outro valor';

// ou ainda tipar o objeto
const objetoD: {
  chaveA: string;
  chaveB: string;
  // opcional
  chaveC?: string;
  // se não soubermos qual chave será acrescentada porteriormente
  // podemos usar o IndexSignature
  // aqui dizemos que a chave é do tipo string e o valor desconhecido
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoD.chaveC = 'Aqui consigo acrescentar';
objetoD.chaveD = 'Qualquer coisa, chave nova :)';

// type alias
type MeuObjeto = { chaveA: string; chaveB: string };

const objetoF: MeuObjeto = {};

objetoF.chaveA = 'Leo';

// se não quisermos alterar o valor de uma chave podemos usar
// antes de definar o tipo 'readonly'

const objetoG: {
  readonly chaveA: string;
  chaveB: string;
} = {
  chaveA: 'Leo',
  chaveB: 'Policarpo',
};

objetoG.chaveA = 'Camilo';
*/

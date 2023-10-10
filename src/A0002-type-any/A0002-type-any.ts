/*

// é uma falta de tipo ou qualquer tipo que quiser
// por exemplo em alguns lugares o  TS não vai conseguir
// definir o tipo do dado
// logo não vamos querer esse tipo no nosso código
// pois pode desencadear novos problemas na aplicação

// implícito
export function showMessage(msg) {
  return msg;
}

// explícito
export function showMessage2(msg: any) {
  return msg;
}

// O TypeScrpit surgiu para evitar erros ainda no desenvolvimento
// pois já sabemos que é muito mais trabalho e caro corrigir
// erros em produção

// logo o tipo any é usado apenas em último caso
*/

// tipo tuple
// não existe no JS
// seria um array com tipos e tamanhos específicos. Ex

const dadosCliente1: [number, string] = [1, 'Leo'];

// podemos mudar os valores
dadosCliente1[0] = 2;
dadosCliente1[1] = 'Camilo';

// porém não podemos acrescentar
// contudo conseguimos usar os métodos push(adicionar) e pop(remover)
// o que seria um problema, temos como corrigir e veremos em breve :)

console.log(dadosCliente1);

const dadosCliente2: [number, string, string] = [1, 'Leonardo', 'Policarpo'];

console.log(dadosCliente2);

// podemos definir algum como opcional usando ? como já vimos
const dadosCliente3: [number, string, string?] = [1, 'Dalila'];

console.log(dadosCliente3);

// também podemos usar o rest operator
const dadosCliente4: [number, string, ...string[]] = [1, 'Arlete'];

console.log(dadosCliente4);

// para deixar as tuples e os arrays imutáveis e previnir que
// sejam alterados com os métodos pop e push basta usarmos o readonly
const dadosCliente5: readonly [number, string] = [1, 'Leo'];

// dadosCliente5[0] = 5;
console.log(dadosCliente5);

// ou ainda
const dadosCliente6: ReadonlyArray<string> = ['Camilo', 'Policarpo'];

// dadosCliente6[1] = 'Leo';
console.log(dadosCliente6);

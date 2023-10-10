// agregação
// uma classe precisa de outra para funcionar corretamente
// apesar de ambas poderem viver separadamente
// podemos pensar nessa relação como um carro e uma roda
// ambos existem isoladamente, mas a roda(produto)
// agrega ao carro(carrinho de compra)

export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  // usando o rest operator dizemos que podemos receber
  // um ou vários produtos
  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

// classe que será agregada a CarrinhoDeCompras
export class Produto {
  constructor(
    public nome: string,
    public preco: number,
  ) {}
}

const carrinhoDeCompras = new CarrinhoDeCompras();

const produto1 = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Caneca', 1.9);
const produto3 = new Produto('Caneta', 0.9);

carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3);
console.log(carrinhoDeCompras.quantidadeProdutos());
console.log(carrinhoDeCompras.valorTotal());

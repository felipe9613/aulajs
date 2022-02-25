// objeto caneta
// função -> escrever no papel -> verbo -> metodos
// atributos -> cor, quant de tinta -> adjetivo


// encapsulamento

class Caneta 
{

    cor = "preto";

    quantidadeTinta = 100;

    constructor(cor)
    {
        this.cor = cor;
    }

    // metodos
    escrever(palavra)
    {
        this.quantidadeTinta = this.quantidadeTinta - 2;
        return palavra;
    }

}

// instancia
var bic1 = new Caneta();
var bic2 = new Caneta();

bic1.cor = "Vermelho";
bic1.escrever("abc");
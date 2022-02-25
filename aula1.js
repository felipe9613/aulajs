// aula de JS

//variaveis

// tipagem dinamica 
var nome = "felipe"; //string > texto
var idade = 12; //int > number
var peso = 23.5; //float > number
var andando = false; //bool >boolen < verdadeiro ou falso

nome = "jair";

//tipagem fraca
nome = 143;

//entrada > processamento >saida

var n1 = 3
var n2 = 7

function soma(n1, n2)
{
    var total = n1 + n2;
    return total;
}
soma(2,3);
soma(n1,n2);

function imprime(palavra)
{
    console.log(palavra);
function abc ()
{
    console.log("abc")
}
 abc()
}
var div = function(n1, n2)
{
    return n1 / n2;
}

function calc (n1, n2, op)
{
    return op (n1, n2);
}

calc(3,2, div);
calc(3,2, soma);
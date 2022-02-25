// arrays -> vetores

// estrutura de dados

var cidades = new Array("Curitiba", "Berlandia", "Berraba");


var nome = new String("Felipe");
nome = "Felipe"; //resumida


//adiciona um item no vetor
cidades.push('itapema');

//alterar um item
cidades [1] = 'Uberlandia';

//permite adicionar um tipo diferente
cidades.push = [23];

//adicona iterm no meio do vetor

cidades.splice (1, 0, "salvador");
 //remove o ultimo elemento
 cidades.pop();

 //ordena em ordem crescente
 cidades.sort();
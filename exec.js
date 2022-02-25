// ex1 - palavra toda em maiuscula

var palavra = "o céu é azul";//string

palavra.toUpperCase();//js
//toUpperCase(palavra); // php

// ex2 - criem uma função que coloque a primeira letra
// em maiusculo Ex:
// edir -> Edir
// EDIR -> Edir
// eDIr -> Edir

function letraMaiuscula(palavra)
{
    var letra = palavra.charAt(0);
    var resto = palavra.slice(1);

    return letra.toUpperCase() + resto.toLowerCase();
}

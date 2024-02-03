"use strict"

function calcularAlma(nombreCompleto){
    let caracteres = separarCaracteres(nombreCompleto);
    let vocales = buscarVocales(caracteres);
    let numerologia = calcularNumerologia(vocales);

    let resultado = reducirNumero(numerologia);

    //let resultado = sumarDigitos(numerologia);
    //let numeroMaestro = calcularNumeroMarestro(resultado);
    
    return resultado;
}

function calcularPersonalidad(nombreCompleto){
    console.log("calcularPersonalidad -> nombreCompleto: " + nombreCompleto+"---------------");
    let caracteres = separarCaracteres(nombreCompleto);
    let vocales = buscarConsonantes(caracteres);
    let numerologia = calcularNumerologia(vocales);
    let resultado = reducirNumero(numerologia);
    return resultado;
}


function calcularExpresion(alma, personalidad){
    let expresion = calcularExpresionNumerologia(alma, personalidad);
    return expresion;
}

function calcularCaminoVida(horaNacimiento){
    let resultado = reducirNumero(separarCaracteres(horaNacimiento));
    return resultado;
}

function calcularApellidoAbuela(abuela){
    let abuelaSola = eliminarEspacios(abuela);
    let caracteres = separarCaracteres(abuelaSola);
    let numerologia = calcularNumerologia(caracteres);
    let resultado = reducirNumero(numerologia);
    return resultado;
}

function calcularCasasPersonalidad(nombreCompleto){
    let caracteres = separarCaracteres(nombreCompleto);
    console.log("calcularCasasPersonalidad -> caracteres: " + caracteres);
    let numerologia = calcularNumerologia(caracteres);
    console.log("calcularCasasPersonalidad -> numerologia: " + numerologia);
    let resultado = contarNumeros(numerologia);
    console.log("calcularCasasPersonalidad -> resultado: " + resultado);
    return resultado;
}

function calcularMiedosInconscientes(casasPersonalidad){
    let matriz = construirMatriz(casasPersonalidad);
    return matriz;
}


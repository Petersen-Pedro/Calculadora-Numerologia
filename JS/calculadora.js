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


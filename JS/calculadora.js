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
    let resultado = reducirNumero(expresion);
    return resultado;
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
    let numerologia = calcularNumerologia(caracteres);
    let resultado = contarNumeros(numerologia);
    return resultado;
}

function calcularMiedosInconscientes(casasPersonalidad){
    let matriz = construirMatriz(casasPersonalidad);
    return matriz;
}

function calcularMisionVida(dia, mes, anio, expresion){
    let arreglo = [dia, mes, anio, expresion[0]];
    console.log("arreglo: " + arreglo);
    let resultado = reducirNumero(arreglo);    
    return resultado;
}

function calcularNumeroFuerza(dia, mes){
    let arreglo = [dia, mes];
    let resultado = reducirNumero(arreglo);
    return resultado;
}

function calcularNumeroEquilibrio(nombreCompletoArr){
    let iniciales = tomarIniciales(nombreCompletoArr);
    let numerologia = calcularNumerologia(iniciales);
    let resultado = reducirNumero(numerologia);
    return resultado;
}

function calcularDesafioAlma(nombreCompleto){
    let caracteres = separarCaracteres(nombreCompleto);
    let vocales = buscarVocales(caracteres);
    let vocalPrimeraUltima = tomarVocalPrimeraUltima(vocales);
    let numerologia = calcularNumerologia(vocalPrimeraUltima);
    let resultado = reducirNumero(numerologia);
    return resultado;
}

function calcularDesafioEspiritu(alma, expresion, dia, caminoVida){
    let arreglo = [alma[alma.length - 1], expresion[expresion.length - 1], dia, caminoVida[caminoVida.length - 1]];
    let resultado = reducirNumero(arreglo);
    return resultado;
}

function calcularDesafioPersonalidad(nombreCompleto){
    let caracteres = separarCaracteres(nombreCompleto);
    let consonantes = buscarConsonantes(caracteres);
    let consonantePrimeraUltima = tomarConsonantePrimeraUltima(consonantes);
    let numerologia = calcularNumerologia(consonantePrimeraUltima);
    let resultado = reducirNumero(numerologia);
    return resultado;
}

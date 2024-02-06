"use strict"


var diccionario = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
    'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
    's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8, 'ñ': 5
};

function separarCaracteres(dato) {
    //split para convertir el string en un array
    //ejemplo: 1234.split('') -> [1,2,3,4]
    //return dato.toString().split("");
    if (typeof dato !== 'string') {
        dato = dato.toString();  // Convertir a string si no lo es
    }
    ////console.log("dato.split('') " + dato.split(''));
    return dato.split('');
}

function calcularNumerologia(dato) {
    ////console.log("calcularNumerologia -> dato: " + dato);
    let resultado = [];
    for (let i = 0; i < dato.length; i++) {
        ////console.log("calcularNumerologia(dato[i])" + dato[i]);
        if (!dato[i] == ' ') {
            let letra = dato[i].toString();
            let valor = diccionario[letra.toLowerCase()];
            resultado.push(valor);
            ////console.log("calcularNumerologia -> resultado" + resultado);
        }
    }
    return resultado;
}

function reducirNumero(arreglo) {
    //console.log("reducirNumero -> arreglo: " + arreglo);
    let resultado = [];
    let aux = sumarDigitos(arreglo);
    resultado.push(aux);
    while (aux > 9) {
        aux = sumarDigitos(separarCaracteres(aux));
        resultado.push(aux);
    }
    //console.log("reducirNumero -> resultado: " + resultado);    
    return resultado;
}

function sumarDigitos(arreglo) {
    //console.log("sumarDigitos -> arreglo: " + arreglo);
    let valor = 0;
    for (let i = 0; i < arreglo.length; i++) {
        valor += parseInt(arreglo[i]);
    }
    return valor;
}

function buscarVocales(dato) {
    ////console.log("buscarVocales -> dato: " + dato);
    let resultado = [];
    dato = dato.toString().toLowerCase();
    for (let i = 0; i < dato.length; i++) {
        if (dato[i] == 'a' || 
            dato[i] == 'e' || 
            dato[i] == 'i' || 
            dato[i] == 'o' || 
            dato[i] == 'u') {
            resultado.push(dato[i]);
        }
    }
    return resultado;
}

function buscarConsonantes(dato) {
    ////console.log("buscarConsonantes -> dato: " + dato);
    let vocalesYEspacio = new Set(['a', 'e', 'i', 'o', 'u', ' ']);
    let resultado = [];

    for (let char of dato) {
        if (!vocalesYEspacio.has(char.toLowerCase())) {
            resultado.push(char);
        }
    }
    return resultado;
}


function calcularNumeroMarestro(arreglo) {
    ////console.log("calcularNumeroMarestro -> arreglo: " + arreglo);
    let resultados = [];

    if (arreglo.split('').length > 1) {
        let valor = sumarDigitos(arreglo);
        resultados.push(valor);
    }
    return resultados;
}

function contarNumeros(numerologia) {
    //console.log("--- --- --- --- --- --- --- --- --- ---");
    let resultado = [];
    for (let i = 1; i < 10; i++) {
        let valor = 0;
        for (let j = 1; j < numerologia.length; j++) {
            if (numerologia[j] == i) {
                valor++;
            }
        }
        if (valor > 9) {
            let aux = [];
            aux.push(valor);
            let x = reducirNumero(aux);
            valor = x[x.length - 1];
        }
        resultado.push(valor);
    }
    return resultado;
}

function construirMatriz(casasPersonalidad) {
    let matriz = Array.from({ length: 9 }, () => Array(3).fill(0));
    for (let columna = 0; columna < 9; columna++) {
        for (let fila = 0; fila < 3; fila++) {
            let indice = columna * 3 + fila;
            matriz[fila][columna] = casasPersonalidad[indice];
        }
    }
    for (let fila = 0; fila < 3; fila++) {
        //console.log(matriz[fila].join(' | '));
    }
    return matriz;
}

function calcularExpresionNumerologia(alma, personalidad) {
    let valor = parseInt(alma[alma.length-1]) + parseInt(personalidad[personalidad.length-1]);
    return valor;
}

function eliminarEspacios(cadena) {
    let resultado = cadena.replace(/[^a-zA-Z]/g, ''); 
    //Expesion irregular
    //regex101.com para testear expresiones regulares
    return resultado;
}


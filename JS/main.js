"use strict"

let btnCalcular = document.getElementById('calcular');
btnCalcular = addEventListener("submit", calcularDatos);

//var diccionario = {'a':1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6, 'g':7, 'h':8, 'i':9, 'j':1, 'k':2, 'l':3, 'm':4, 'n':5, 'o':6, 'p':7, 'q':8, 'r':9, 's':1, 't':2, 'u':3, 'v':4, 'w':5, 'x':6, 'y':7, 'z':8, 'ñ':5};

function calcularDatos(e) {
    e.preventDefault();

    const formData = new FormData(document.getElementById('calcular'));

    let nombre1 = formData.get('nombre1');
    let nombre2 = formData.get('nombre2');
    let nombre3 = formData.get('nombre3');
    let apellido1 = formData.get('apellido1');
    let apellido2 = formData.get('apellido2');
    let dia = formData.get('dia_nacimiento');
    let mes = formData.get('mes_nacimiento');
    let anio = formData.get('anio_nacimiento');
    let horaNacimiento = formData.get('hora_nacimiento');
    let minutoNacimiento = formData.get('min_nacimiento');
    var abuela = formData.get('abuela');
    console.log(nombre1 + " " + nombre2 + " " + nombre3 + " " + apellido1 + " " + apellido2);
    console.log(dia + "/" + mes + "/" + anio);
    console.log(horaNacimiento + ":" + minutoNacimiento);
    console.log(abuela);
    const nombreCompleto = nombre1 + nombre2 + nombre3 + apellido1 + apellido2;

    // Calcular Numerología de los nombres y apellidos

    const alma = calcularAlma(nombreCompleto);
    const personalidad = calcularPersonalidad(nombreCompleto);
    const expresion = calcularExpresion(alma, personalidad);

    console.log("alma: " + alma);
    console.log("personalidad: " + personalidad);
    console.log("expresion: " + expresion);
    
    console.log("--------------------------");
    
    
    // Calcular Camino de vida
    const caminoVida = calcularCaminoVida(horaNacimiento);
    console.log("--------------------------");
    
    console.log("--------------------------");
    // Calcular Apellido de la Abuela Materna
    const apellidoAbuela = calcularApellidoAbuela(abuela);
    console.log("apellidoAbuela: " + apellidoAbuela);
    console.log("--------------------------");
    
    // Calcular Casas de la Personalidad
    const casasPersonalidad = calcularCasasPersonalidad(nombreCompleto);
    console.log("casasPersonalidad: " + casasPersonalidad);
    console.log("--------------------------");
    /*
    
    // Calcular Miedos Inconscientes
    const miedosInconscientes = calcularMiedosInconscientes(casasPersonalidad);
    console.log("--------------------------");
    
    // Calcular Misión de Vida
    const misionVida = calcularMisionVida(dia, mes, anio, expresion);
    console.log("--------------------------");
    
    // Calcular Dia de Nacimiento: Una Virtud a Desarrollar
    console.log("--------------------------");
    
    // Calcular Numero de la Fuerza: Donde se encuentra la Fuerza Interior del Ser y Como Usarla para Avanzar mas Rapido
    const numeroFuerza = calcularNumeroFuerza(dia, mes);

    // Calcular Numero del Equilibrio: En que tenemos interés
    const numeroEquilibrio = calcularNumeroEquilibrio(nombreCompleto);

    // Calcular Desafío del Alma
    const DesafioAlma = calcularDesafioAlma(nombreCompleto);

    // Calcular Desafío del Espiritu e Iniciación
    const DesafioEspiritu = calcularDesafioEspiritu(alma, expresion, dia, caminoVida);
    
    // Calcular Desafío de la Personalidad
    const DesafioPersonalidad = calcularDesafioPersonalidad(nombreCompleto);

    // Calcular Ciclos y Realizaciones
    const CiclosRealizaciones = calcularCiclosRealizaciones(dia, mes, anio);
    */
}
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
    const nombreCompletoArr = [nombre1, nombre2, nombre3, apellido1, apellido2];

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
    
    // Calcular Miedos Inconscientes
    console.log("miedosInconscientes: ");
    const miedosInconscientes = calcularMiedosInconscientes(casasPersonalidad);
    console.log("--------------------------");
    
    // Calcular Misión de Vida
    const misionVida = calcularMisionVida(dia, mes, anio, expresion);
    console.log("misionVida: " + misionVida);
    console.log("--------------------------");
    
    // Calcular Dia de Nacimiento: Una Virtud a Desarrollar
    console.log("Dia de Nacimiento: Una Virtud a Desarrollar: " + dia + "/" + mes + "/" + anio);
    
    
    // Calcular Numero de la Fuerza: Donde se encuentra la Fuerza Interior del Ser y Como Usarla para Avanzar mas Rapido
    const numeroFuerza = calcularNumeroFuerza(dia, mes);
    console.log("Numero de la Fuerza: " + numeroFuerza);
    console.log("--------------------------");
    
    // Calcular Numero del Equilibrio: En que tenemos interés
    const numeroEquilibrio = calcularNumeroEquilibrio(nombreCompletoArr);
    console.log("Numero del Equilibrio: " + numeroEquilibrio);
    console.log("--------------------------");
    
    // Calcular Desafío del Alma
    const DesafioAlma = calcularDesafioAlma(nombreCompleto);
    console.log("Desafío del Alma: " + DesafioAlma);
    console.log("--------------------------");

    // Calcular Desafío del Espiritu e Iniciación
    const DesafioEspiritu = calcularDesafioEspiritu(alma, expresion, dia, caminoVida);
    console.log("Desafío del Espiritu e Iniciación: " + DesafioEspiritu);
    console.log("--------------------------");
    
    // Calcular Desafío de la Personalidad
    const DesafioPersonalidad = calcularDesafioPersonalidad(nombreCompleto);
    console.log("Desafío de la Personalidad: " + DesafioPersonalidad);
    console.log("--------------------------");

    // Calcular Ciclos y Realizaciones
    //const CiclosRealizaciones = calcularCiclosRealizaciones(dia, mes, anio);

    calcularCiclosRealizaciones(dia, mes, anio);

    function calcularCiclosRealizaciones(dia, mes, anio){

        let cicloFormatiovo = reducirNumero([mes]);
        let realizacionFormativo = reducirNumero([dia, mes]);
        let periodoFormativo = 36 - caminoVida;

        let cicloProductivo = reducirNumero([dia]);
        let realizacionProductivoA = reducirNumero([dia, anio]);
        let periodoProductivoA = periodoFormativo - 9;
        let realizacionProductivoB = realizacionFormativo - realizacionProductivoA;
        let periodoProductivoB = periodoProductivoA - 9;

        let cicloCosecha = reducirNumero([anio]);
        let realizacionCosecha = reducirNumero([anio, mes]);
        let periodoCosecha = periodoProductivoB - 9;

        console.log("Camino de Vida =====================");
        console.log("Ciclos - Realizaciones - Periodos");
        console.log("[] Formativo:");
        console.log(" - Ciclo: " + cicloFormatiovo + 
                    " - Realización: " + realizacionFormativo + 
                    " - Periodo: " + periodoFormativo);
    
        console.log("[] Productivo:");
        console.log(" - Ciclo: " + cicloProductivo);
        console.log(" - RealizaciónA: " + realizacionProductivoA + 
                    " - PeriodoA: " + periodoProductivoA);
        console.log(" - RealizaciónB: " + realizacionProductivoB + 
                    " - PeriodoB: " + periodoProductivoB);
    
        console.log("[] Cosecha:");
        console.log(" - Ciclo: " + cicloCosecha + 
                    " - Realización: " + realizacionCosecha + 
                    " - Periodo: " + periodoCosecha);
    }






    /*
    */
}
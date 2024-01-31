"use strict"

let btnCalcular = document.getElementById('calcular');
btnCalcular = addEventListener("submit", calcularDatos);

const formData = new FormData();


function calcularDatos(e) {
    e.preventDefault();

    const formData = new FormData(document.getElementById('calcular'));
    
    let nombre1 = formData.get('nombre1');
    let nombre2 = formData.get('nombre2');
    let nombre3 = formData.get('nombre2');
    let apellido1 = formData.get('apellido1');
    let apellido2 = formData.get('apellido2');
    let horaNacimiento = formData.get('hora_nacimiento');
    let minutoNacimiento = formData.get('min_nacimiento');
    let abuela = formData.get('abuela');

    console.log(nombre1);
    console.log(nombre2);
    console.log(nombre3);
    console.log(apellido1);
    console.log(apellido2);
    console.log(horaNacimiento);
    console.log(minutoNacimiento);
    console.log(abuela);




}
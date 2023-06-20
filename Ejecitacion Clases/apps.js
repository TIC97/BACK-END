const Chance = require('chance');

const chance = new Chance();


// * GENERA DATOS ALEATORIOS UTILIZANDO: CHANCE

const randomName = chance.name();
const randomAge = chance.age();
const randomEmail = chance.email();


// IMPRIME LOS DATOS ALEATORIOS EN LA CONSOLA 
console.log('Nombre Aleatorio ', randomName);
console.log('Edad Aleatorio ', randomAge);
console.log('Email Aleatorio ', randomEmail);



// * FUNCION REGISTRO DE ESTUDIANTES

const readLineSync = require('readline-sync');

const {mostrarListaEstudiantes} = require('../Modulos/modulos');



const registrarEstudiantes = () => {

    const cantidadEstudiantes = readLineSync.question(` Ingrese la cantidad de estudiantes a registrar:`);

    const estudiantes = [];

    for (let i = 0; i < cantidadEstudiantes; i++) {
        const nombre = readLineSync.question(`Ingrese el  nombre del estudiante ${i}:`);
        const edad = readLineSync.question(`Ingrese la edad de ${nombre}:`);

        const estudiante = {
            nombre,
            edad
        };;

        estudiantes.push(estudiante);
    }
    mostrarListaEstudiantes(estudiantes);
}

// * INICIAR REGISTRO DE ESTUDIANTES

registrarEstudiantes();
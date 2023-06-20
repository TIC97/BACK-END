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
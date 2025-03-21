const Persona = require('./Persona.js');

const p1 = new Persona('Mateo', 'Fiorotto', 20);

console.log(p1.nombre, p1.apellido, p1.edad);
p1.saludar();
// Crear un archivo Alumno.js con una clase Alumno con los siguientes atributos
// y métodos:
// ATRIBUTOS:
// ● nombre: String
// ● apellido: String
// ● edad: Number
// ● carrera: String
// ● materias: Array
// MÉTODOS:
// ● mostrarCarrera( )
// ● Nombre( ): Muestra el nombre y apellido concatenados
// ● modificarEdad( number ): El cual recibe como parámetro la edad y la
// actualiza
// ● agregarMateria( String ): Recibe como parámetro una materia (string) la
// agrega en el array Materias
// ● mostrarMaterias( ): Muestra por consola las materias con console.table()
// ● retornarEdad(): Retorna la edad del alumno
// Crear un archivo index.js e importar la Clase Alumno y probar metodos

const Alumno = require('./Alumno.js');

const alum1 = new Alumno('Mateo', "Fiorotto", 19, 'Desarrollo web', ['Aplicaciones Hibridas', 'Portales y comercio electronico', 'Etica'])

console.log("CARRERA: " + alum1.mostrarCarrera() + " - Metodo: mostrarCarrera()"); // podria usar alum1.getCarrera().
console.log("");

console.log("NOMBRE: " + alum1.Nombre() + " - Metodo: Nombre()"); // podria usar alum1.getNombre() y alum1.getApellido().
console.log("");

console.log("MATERIAS SIN AGREGAR (Metodo: mostrarMaterias())");
alum1.mostrarMaterias();
console.log("");

console.log("MATERIAS + MATERIA AGREGADA (Metodo: mostrarMaterias()) + agregarMateria()");
alum1.agregarMateria('Programacion con Entornos de Trabajo');
alum1.mostrarMaterias();

console.log("Edad sin modificar: " + alum1.retornarEdad() + " - Metodo: retornarEdad()");
console.log("");

alum1.modificarEdad(20);
console.log("Edad modificada: " + alum1.retornarEdad() + " - Metodo: retornarEdad() + modificarEdad(21)" );
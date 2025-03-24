class Alumno {

    // atributos
    nombre = "";
    apellido = "";
    edad = 0;
    carrera = "";
    materias = [];

    // constructor
    constructor(nombre, apellido, edad, carrera, materias) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.carrera = carrera;
        this.materias = materias || [];
    }

    // getters/setters
    getNombre() {
        return this.nombre + " " + this.apellido;
    }
    
    setNombre(nombre) {
        this.nombre = nombre;
    }

    getApellido() {
        return this.apellido;
    }

    setApellido(apellido) {
        this.apellido = apellido;
    }

    getEdad() {
        return this.edad;
    }

    setEdad(edad) {
        this.edad = edad;
    }

    getCarrera() {
        return this.carrera;
    }

    setCarrera(carrera) {
        this.carrera = carrera;
    }

    getMaterias() {
        return this.materias;
    }

    setMaterias(materias) {
        this.materias = materias;
    }

    //metodos
    mostrarCarrera() {
        return this.carrera;
    }

    Nombre() {
        return this.nombre + " " + this.apellido;
    }

    modificarEdad(edad) {
        this.edad = edad;
    }

    agregarMateria(materia){
        this.materias.push(materia);
    }

    mostrarMaterias(){
        console.table(this.materias)
    }

    retornarEdad(){
        return this.edad;
    }
}

module.exports = Alumno;
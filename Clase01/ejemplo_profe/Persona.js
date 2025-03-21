class Persona {
    nombre = '';
    apellido = '';
    edad = 0;

    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getNombre(){
        return this.nombre;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    getApellido(){
        return this.apellido;
    }

    setApellido(apellido){
        this.apellido = apellido;
    }

    getEdad(){
        return this.edad;
    }

    setEdad(edad){
        this.edad = edad;
    }

    //metodos
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }
}

module.exports = Persona;
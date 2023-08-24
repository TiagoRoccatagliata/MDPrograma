class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    fullname() {
        return `${this.nombre} ${this.apellido}`;
    }

    es_mayor() {
        return this.edad >= 18;
    }
}

// Crear una instancia de Persona
const persona1 = new Persona("Juan", "Pérez", 25);

// Usar los métodos de la clase
console.log("Nombre completo:", persona1.fullname());
console.log("¿Es mayor de edad?", persona1.es_mayor());

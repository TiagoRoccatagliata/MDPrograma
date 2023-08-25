class Perro {
    constructor(nombre, raza, edad, estadoAdopcion) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
        this.estadoAdopcion = estadoAdopcion || "En adopción"; // Valor predeterminado
    }
    modificarEstadoAdopcion(nuevoEstado) {
        this.estadoAdopcion = nuevoEstado;
    }

    infromarEstadoAdopcion() {
        return this.estadoAdopcion;
    }
}

const perros = [];

function crearNuevoPerro() {
    const nombre = prompt("Nombre del perro:")
    const raza = prompt("Raza del perro:")
    const edad = prompt("Edad del perro:")
    const estadoAdopcion = prompt("Estado de adopción (En adopción / Proceso de adopción / Adoptado):");


    const nuevoPerro = new Perro(nombre, raza, edad, estadoAdopcion)
    perros.push(nuevoPerro)
}

do {
    crearNuevoPerro();
} while (confirm("¿Deseas cargar otro perro?"));

console.log("Todos los perros:", perros.map(perro => perro.nombre));

console.log("Perros en adopción:",
    perros.filter(perro => perro.estadoAdopcion === "En adopción").map(perro => perro.nombre));

console.log("Perros en proceso de adopción:",
    perros.filter(perro => perro.estadoAdopcion === "Proceso de adopción").map(perro => perro.nombre));

console.log("Perros adoptados:",
    perros.filter(perro => perro.estadoAdopcion === "Adoptado").map(perro => perro.nombre));

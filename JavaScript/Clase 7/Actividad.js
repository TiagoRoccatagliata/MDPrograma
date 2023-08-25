class Tarea {
    constructor(id, titulo, completada = false, fechaCreada) {
        this.id = id;
        this.titulo = titulo;
        this.completada = completada;
        this.fechaCreada = fechaCreada;
    }

    marcarComoCompletada() {
        this.completada = true;
    }

    marcarComoIncompleta() {
        this.completada = false;
    }
}

class Contador {
    constructor() {
        this.valor = 0;
    }

    reset() {
        this.valor = 0;
    }

    inc() {
        this.valor++;
    }

    dec() {
        this.valor--;
    }

    valorActual(nuevoValor) {
        if (typeof nuevoValor === 'number') {
            this.valor = nuevoValor;
        }
        return this.valor;
    }
}

const coleccionTareas = [];
const contador = new Contador();

function agregarTarea(id, titulo, fechaCreada) {
    const nuevaTarea = new Tarea(id, titulo, false, fechaCreada);
    coleccionTareas.push(nuevaTarea);
    console.log(`Tarea "${titulo}" agregada.`);
}

function listarTareas() {
    console.log("Lista de tareas:");
    coleccionTareas.forEach(tarea => {
        const estado = tarea.completada ? "Completada" : "Incompleta";
        console.log(`ID: ${tarea.id}, Título: ${tarea.titulo}, Estado: ${estado}, Fecha Creada: ${tarea.fechaCreada}`);
    });
}

// Agregar tareas de ejemplo
agregarTarea(1, "Lavar los platos", "22/09/2020");
agregarTarea(2, "Hacer ejercicio", "23/09/2020");
agregarTarea(3, "Leer un libro", "24/09/2020");

contador.valorActual(10);
contador.inc();
contador.inc();
contador.dec();
contador.inc();

console.log("Valor actual del contador:", contador.valorActual()); // Resultado: 12

listarTareas();

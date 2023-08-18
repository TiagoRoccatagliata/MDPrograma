let persona = {
    first: "Martin",
    last: "Russo",
    year: "1999",
    passed: "2025",
};


const mostrarNombre = (persona) => {
    let nombre = persona.first
    return nombre 
}

const mostrarApellido = (persona) => {
    let apellido = persona.last
    return apellido 
}


const mostrarEdad = (persona) => {
    let edad = persona.year
    edadActual = 2023-edad
    if(edadActual % 2 == 0) {
        return true;
    } else {
        return false
    }
    
}


console.log(mostrarNombre(persona))
console.log(mostrarApellido(persona))
console.log(mostrarEdad(persona))


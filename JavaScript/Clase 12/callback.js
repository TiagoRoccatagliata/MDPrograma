function calc(numero, callback) {
    console.log("Hola calc");
    callback(); // Llamada a la función callback
}

function callback() {
    console.log("Hola callback");
}

calc(5, callback);


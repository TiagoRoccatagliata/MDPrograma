const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para calcular la suma con el ajuste de signo
function calcularSuma(numero1, numero2) {
  const suma = numero1 + numero2;
  if (suma < 0) {
    return -suma;
  }
  return suma;
}

// Solicitar dos números por teclado
rl.question('Ingresa el primer número: ', (numero1) => {
  rl.question('Ingresa el segundo número: ', (numero2) => {
    const resultado = calcularSuma(parseFloat(numero1), parseFloat(numero2));
    console.log('El resultado es: ' + resultado);

    rl.close();
  });
});

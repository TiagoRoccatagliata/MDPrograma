const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para determinar si un número es positivo, negativo o nulo
function verificarNumero(numero) {
  if (numero > 0) {
    return 'El número es positivo';
  } else if (numero < 0) {
    return 'El número es negativo';
  } else {
    return 'El número es nulo';
  }
}

// Solicitar un número por teclado
rl.question('Ingresa un número: ', (numero) => {
  const resultado = verificarNumero(parseFloat(numero));
  console.log(resultado);

  rl.close();
});

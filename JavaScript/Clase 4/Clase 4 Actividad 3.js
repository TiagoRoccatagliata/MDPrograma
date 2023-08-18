function suma(lista) {
  let total = 0;
  for (let i = 0; i < lista.length; i++) {
    total += lista[i];
  }
  return total;
}

function rango(inicio, fin) {
  const listaNumeros = [];
  for (let i = inicio; i <= fin; i++) {
    listaNumeros.push(i);
  }
  return listaNumeros;
}

function main() {
  const inicio = parseInt(prompt('Ingresa el inicio del rango:'));
  const fin = parseInt(prompt('Ingresa el fin del rango:'));
  
  const lista = rango(inicio, fin);
  const resultado = suma(lista);

  console.log('La lista de números es: ' + lista);
  console.log('La suma de los números en el rango es: ' + resultado);
}

main();

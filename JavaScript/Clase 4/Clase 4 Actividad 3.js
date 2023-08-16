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
  
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Ingresa el inicio del rango: ', (inicio) => {
    rl.question('Ingresa el fin del rango: ', (fin) => {
      const lista = rango(parseInt(inicio), parseInt(fin));
      const resultado = suma(lista);
  
      console.log('La lista de números es: ' + lista);
      console.log('La suma de los números en el rango es: ' + resultado);
  
      rl.close();
    });
  });
  
let nombre = "Tiago";
let numero1 = 8;
let numero2 = 12;
let suma = numero1 + numero2;
let edad = 25;
let mensaje = "Mi nombre es " + nombre + " y tengo " + edad + " años.";




console.log("Mi Nombre es: " + nombre);
console.log("La suma de " + numero1 + " y " + numero2 + " es igual a: " + suma);
console.log(mensaje);


if (numero1 > numero2) {
    console.log(numero1 + " es mayor que " + numero2);
  } else if (numero1 < numero2) {
    console.log(numero1 + " es menor que " + numero2);
  } else {
    console.log(numero1 + " es igual a " + numero2);
  }
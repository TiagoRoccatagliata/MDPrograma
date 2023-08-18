
//Con forEach
// numeros.forEach((element) => {
    //         if(element>10) {
        //             mayores.push(element)
        //         }
        //     }
        // );
        
        
        let numeros = [15, 2, 35, 4, 5, 16, 7, 8, 10];
        let mayores = [] 

//Con For
for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] > 10) {
        mayores.push(numeros[i])
    }
  }



  console.log(mayores)
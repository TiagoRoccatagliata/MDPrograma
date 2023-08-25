function ejemploPromesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promesa resuelta exitosamente después de 2 segundos");
        }, 2000);
    });
}

ejemploPromesa()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

class Golondrina {
    constructor() {
        this.energia = 0;
    }

    comer(gramos) {
        this.energia += gramos * 4;
    }

    volar(kilometros) {
        this.energia -= (kilometros + 10); // Gasta 1 joule por kilómetro más 10 joules de despegue/aterrizaje
    }

    energiaActual() {
        return this.energia;
    }
}

const pepita = new Golondrina();

pepita.comer(100);
pepita.volar(10);
pepita.volar(20);

console.log("Energía actual de Pepita:", pepita.energiaActual()); // Resultado: 350

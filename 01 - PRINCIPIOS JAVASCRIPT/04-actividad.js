class Contador {
    constructor(nombre) {
        this.nombre = nombre;
        this.contador = 0;
    }

    static contadorGlobal = 0;

    getResponsable() {
        return this.nombre;
    }

    getCuentaGlobal(){
        return Contador.contadorGlobal;
    }

    getCuentaIndividual(){
        return this.contador;
    }

    incrementarCuenta(){
        this.contador++;
        Contador.contadorGlobal++;
    }
}

const alexis = new Contador('Alexis');
const nazarena = new Contador('Nazarena');

alexis.incrementarCuenta();
alexis.incrementarCuenta();
nazarena.incrementarCuenta();
console.log(alexis.getCuentaIndividual());
console.log(nazarena.getCuentaIndividual());
console.log(Contador.contadorGlobal);

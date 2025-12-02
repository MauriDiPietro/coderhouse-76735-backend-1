class Persona {
    constructor(nombre){
        this.nombre = nombre;
    }

    static variableEstatica = 'Soy una variable estática';

    getNombre = () =>{
        return this.nombre;
    }
}

const persona = new Persona('Juan');
const persona2 = new Persona('Ana');

console.log(persona.getNombre());
console.log(persona2.getNombre());
console.log(Persona.variableEstatica);
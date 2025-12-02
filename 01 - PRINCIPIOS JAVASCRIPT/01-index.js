console.log('Hola comision 76735!');

let name1 = 'Juan'

name1 = 'Pedro'

console.log(name1); 

/* ------------------------------------ - ----------------------------------- */

const name2 = 'Ana'

// name2 = 'Luisa'

const user = {
    username: 'ana123',
    age: 25
}

// user = null

user.age = 26

console.log(user);


/* ------------------------------------ - ----------------------------------- */

const cadenaDeTexto = "Hola mundo"

const number = 42

const booleano = true //false

const nulo = null

const indefinido = undefined

console.log(typeof cadenaDeTexto); //string

/* ------------------------------------ - ----------------------------------- */

new Date()

// throw new Error('Mensaje de error') //{message: 'Mensaje de error', stack, name}

/* ------------------------------------ - ----------------------------------- */

function saludar() {
    console.log('Hola!');
}

const saludar2 = () => {
    console.log('Hola!');
}

const saludar3 = (name) => {
    return `Hola ${name}`;
}

const saludar4 = name => `Hola ${name}`;

const array = [  1, 2, 3, 4, 5  ];

const array2 = array.filter(n=>n >= 3);

class ClaseEjemplo{
    constructor(){}
    metodo(){}
}

const instancia = new ClaseEjemplo();
instancia.metodo();

/* ------------------------------------ - ----------------------------------- */

/* ---------------------------- template strings ---------------------------- */

let nombre = 'María';
let edad = 30;

console.log('Hola, mi nombre es ' + nombre + ' y tengo ' + edad + ' años.');

console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);


const texto = `Este texto
    tiene 
    mas
    de
    una linea
`

console.log(texto);

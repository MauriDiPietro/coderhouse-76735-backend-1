/* --------------------------------- spread --------------------------------- */
const array = [1,2,3,4,5,6]

// console.log(Math.min(...array));

const array2 = [ ...array, 45, 32 ]

console.log(array2);

const usuario = {
    nombre: 'Carlos',
    edad: 25,
    email: 'carlos@mail.com',
    contraseña: '1234'
}

const nuevoUsuario = {
    id: 1,
    ...usuario
}

console.log(nuevoUsuario);



/* ---------------------------------- rest ---------------------------------- */

const test = (a, b, ...otros) => {
    console.log(a);
    console.log(b);
    console.log(otros);
}

test(1, 2, 3, 'hola', true)
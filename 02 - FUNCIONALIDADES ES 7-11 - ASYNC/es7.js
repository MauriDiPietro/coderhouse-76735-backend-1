// console.log(Math.pow(2, 3));

/* -------------------------- operador exponencial -------------------------- */
// console.log(2 ** 3)

/* -------------------------------- includes -------------------------------- */

const array = [1,2,3,4,5,6]

console.log(array.includes(15));

/* ------------------------------------ - ----------------------------------- */

const usuarios = [
    {
        nombre: 'Carlos',
        edad: 25
    },
    {
        nombre: 'Pedro',
        edad: 30
    },
    {
        nombre: 'Juan',
        edad: 48
    }
]

console.log(usuarios.some((u)=> u.edad === 30));   //true 


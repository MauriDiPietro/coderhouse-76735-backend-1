const suma = (a, b) => a + b;

const resta = (a, b) => {
  return a - b;
};
const multipicacion = (a, b) => {
  return a * b;
};
const division = (a, b) => {
  return a / b;
};


const ejecutarOperacion = (a, b, fn) => {
    console.log(fn(a, b));
}


setTimeout(()=>{
    console.log('hola');
}, 0)

ejecutarOperacion(1, 2, suma)

/* ------------------------------------ - ----------------------------------- */


/* ------------------------------------ - ----------------------------------- */

// array.map( i => i === 4)
// filter
// forEach
// find
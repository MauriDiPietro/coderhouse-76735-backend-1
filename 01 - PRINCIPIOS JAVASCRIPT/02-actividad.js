const mostrarLista = (array) => {
    if(!Array.isArray(array)) throw new Error('El parámetro debe ser un arreglo'); 
    if(!array.length) return 'Lista vacía';
    const arrayResult = [];
    for (const item of array) {
        arrayResult.push(item);
    }
    return {
        items: arrayResult,
        length: arrayResult.length
    }
};

/* ------------------------------------ - ----------------------------------- */

const mostrarLista2 = (array) => {
    if(!Array.isArray(array)) throw new Error('El parámetro debe ser un arreglo'); 
    if(!array.length) return 'Lista vacía';
    return {
        items: array.map(item => item),
        length: array.length
    }
};


// console.log(Array.isArray([]));
console.log(mostrarLista2([1,2,3]));

const divisionPromesa = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) reject("No se puede dividir un nro por 0");
    resolve(a / b);
  });
};

// console.log(divisionPromesa(1,2));

// divisionPromesa(1, 0)
//   .then((resultado) => {
//     console.log(resultado);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finalizó la ejecucion");
//   });

/* ------------------------------------ - ----------------------------------- */

//  fetch('https://jsonplaceholder.typicode.com/todos')
//  .then(response => response.json())
//  .then(response => console.log(response))
//  .catch(error => console.log(error))

/* ------------------------------------ - ----------------------------------- */

const divisionAsync = async()=>{
    try {
        console.log(await divisionPromesa(1,0));
    } catch (error) {
      console.log(error);
    } finally {
        console.log('finalizó la ejecucion');
    }
}

divisionAsync()

const getApi = async() => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getApi()
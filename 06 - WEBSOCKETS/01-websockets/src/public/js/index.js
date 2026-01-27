const socket = io();

socket.on('saludoDesdeApi', (message)=>{
    console.log(message);

    socket.emit('respuestaDesdeCliente', 'Gracias por el saludo, servidor!');
})

const form = document.getElementById('form')
const inputName = document.getElementById('name')
const inputPrice = document.getElementById('price')
const products = document.getElementById('products')

form.onsubmit = (e) => {
    e.preventDefault();
    const name = inputName.value;
    const price = inputPrice.value;
    const product = {name, price};
    socket.emit('newProduct', product);
    inputName.value = '';
    inputPrice.value = '';
}

socket.on('products', (array) => {
    let infoProducts = '';
    array.forEach((prod)=>{
        infoProducts += `<li>${prod.name} - $${prod.price}</li>`;
    })
    products.innerHTML = infoProducts;
})
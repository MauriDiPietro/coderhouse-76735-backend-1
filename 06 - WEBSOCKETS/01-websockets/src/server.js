import express from "express";
import handlebars from "express-handlebars";
import { __dirname } from "./utils.js";
import { Server } from "socket.io";

const app = express();
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.get('/', (req, res)=>{
  res.render('websocket')
})

const httpServer = app.listen(8080, () => {
  console.log("Escuchando al puerto 8080");
});

const socketServer = new Server(httpServer);

const products = [];

socketServer.on('connection', (socket)=>{
  console.log('Nuevo cliente conectado', socket.id);

  socket.on('disconnect', ()=>{
    console.log('Cliente desconectado', socket.id);
  })

  socket.emit('saludoDesdeApi', 'Bienvenido al servidor de WebSockets');  //solo al que emitio el evento

  socket.on('respuestaDesdeCliente', (data)=>{
    console.log('Mensaje recibido del cliente:', data);
  })

  socketServer.emit('products', products);  //envio a todos los clientes

  socket.on('newProduct', (data) => {
    products.push(data);
    socketServer.emit('products', products);
  })

  // socket.broadcast.emit //envio a todos menos al que emitio el evento
})
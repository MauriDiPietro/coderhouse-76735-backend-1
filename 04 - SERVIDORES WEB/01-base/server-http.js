import http from 'http';

const server = http.createServer((req, res)=>{
    // console.log(req.url);
    if(req.url === '/') {
        res.end('Hola mundo');
    }
    if(req.url === '/products'){
        res.end(JSON.stringify([{id:1, name:'Producto 1'}, {id:2, name:'Producto 2'}]));
    }
})

server.listen(8080, ()=>console.log('Servidor escuchando en el puerto 8080'));
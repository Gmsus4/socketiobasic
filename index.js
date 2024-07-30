// Servidor de express
const express = require('express');
const app = express();

//Servidor de sockets
const server = require('http').createServer(app);

//Configuracion del socket server
const io = require('socket.io')(server);

//Desplegar el directorio publico
app.use( express.static(__dirname + '/public'));

io.on('connection', ( socket ) => {
    //Emitir un evento, los eventos son basicamente instrucciones que se disparan
    // socket.emit('mensaje-bienvenida', { 
    //     msg: 'Bienvenido al server',
    //     fecha: new Date()
    // }) 

    //Escuchar evento
    socket.on('mensaje-to-server', (data) => {
        console.log(data)

        io.emit('mensaje-from-server', data); //Mensaje global
    })
});

server.listen(8080, () => {
    console.log('Server corriendo en puerto :8080')
});
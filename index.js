const Server = require("./models/server");

const server = new Server();
server.execute();

// io.on('connection', ( socket ) => {
//     //Emitir un evento, los eventos son basicamente instrucciones que se disparan
//     // socket.emit('mensaje-bienvenida', { 
//     //     msg: 'Bienvenido al server',
//     //     fecha: new Date()
//     // }) 

//     //Escuchar evento
//     socket.on('mensaje-to-server', (data) => {
//         console.log(data)

//         io.emit('mensaje-from-server', data); //Mensaje global
//     })
// });


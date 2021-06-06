const express  = require('express');
const cors = require('cors');
class Server{

    constructor()
    {
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath = '/api/usuarios'

        //Middleware
        this.middleware();

        //Rutas
        this.routes();
    }

    middleware()
    {
        //CORS
        this.app.use(cors());

        //Lectura y Parseo del body
        this.app.use(express.json());

        //Dirección Publica
        this.app.use(express.static('public'));
    }

    routes()
    {

        this.app.use(this.usuarioPath, require('../routes/usuarios'));
    }

    listen()
    {
        this.app.listen(this.port, () => {
            console.log('Servicio corriendo en el puerto: ', this.port);
        });
    }
}

module.exports = Server;
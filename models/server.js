const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8000;
    this.usersPath = '/api/users';

    // Middlewares
    this.middleware();
    //routes
    this.routes();
  }

  middleware() {
    //Cors
    this.app.use(cors());

    //Parse body

    this.app.use(express.json());
    //Directorio publico
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.usersPath, require('../routes/users.routes'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor activo en el puerto ${this.port}`);
    });
  }
}

module.exports = Server;

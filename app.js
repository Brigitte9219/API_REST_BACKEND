//Iniciamos el módulo express con el fin de dar inicio al servidor, evitando varias configuraciones
const express = require('express');//importamos el paquete
const app = express();

/* SE CREAN LAS RUTAS */
app.get('/',(req, res) =>{
    res.send('prueba 1 respuesta del servidor');//Ruta por defecto
});
//Primero se configura cómo va escuchar el servidor las peticiones
app.listen(10000);
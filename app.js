//Iniciamos el módulo express con el fin de dar inicio al servidor, evitando varias configuraciones
const express = require('express');//importamos el paquete
const app = express();
const mongoose = require('mongoose');//se utiliza para hacer la conexión a la BD

/* SE CREAN LAS RUTAS */
app.get('/',(req, res) =>{
    res.send('prueba 1 respuesta del servidor');//Ruta por defecto
});

//Conexión a la BD
mongoose.connect('mongodb+srv://mbpadilla4:<password>@cluster0.hiktsv1.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true}, () =>{
    console.log('Si hay conexión a la BD');
});
//Primero se configura cómo va escuchar el servidor las peticiones
app.listen(10000);
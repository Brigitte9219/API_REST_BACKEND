//Iniciamos el módulo express con el fin de dar inicio al servidor, evitando varias configuraciones
const express = require('express');//importamos el paquete
const app = express();
const mongoose = require('mongoose');//se utiliza para hacer la conexión a la BD
const bodyParser = require('body-parser');

//llamar al body-parser
app.use(bodyParser.json());

//Importar las rutas
const postRoute = require('./routes/post');
app.use('/servicios', postRoute);
//Middlewares: Es la llamada a una función cuando se presenta un evento en una ruta específica
/*app.use('/servicios', () =>{
    consoloe.log('corriendo la middleware');
});
 */

/* SE CREAN LAS RUTAS */
app.get('/',(req, res) =>{
    res.send('prueba 1 respuesta del servidor');//Ruta por defecto
});

/*app.get('/servidor',(req,res) =>{
    res.send('prueba servicios');//Ruta por defecto
});
*/

//Conexión a la BD
mongoose.connect('mongodb+srv://mbpadilla4:<password>@cluster0.hiktsv1.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser: true }, () =>{
    console.log('Si hay conexión a la BD');
});
//Primero se configura cómo va escuchar el servidor las peticiones
app.listen(10000);
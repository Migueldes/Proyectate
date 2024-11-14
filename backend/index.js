//Importacion
const express = require("express");
const bodyParser = require('body-parser')
require('dotenv').config();
const rutasCuestionario = require('../backend/routes/rutaCuestionario');
const app = express();
const port = process.env.PORT;


app.use(express.json())



app.use('/cuestionario', rutasCuestionario)

app.listen(port, () => {
    console.log('Backend corriendo en el puerto', port)
})

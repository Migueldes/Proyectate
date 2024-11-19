const express = require('express');
const cors = require('cors');
const rutasCuestionario = require('./routes/rutaCuestionario');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/cuestionario', rutasCuestionario);

app.listen(port, () => {
  console.log(`Backend corriendo en el puerto ${port}`);
});


const express = require('express');
const router = express.Router();

const procesarDatos = require('../controllers/controladorCuestionario');

router.use(express.json())

//Los datos del cuestionario se van a mandar al modelo
router.post('/procesamiento', procesarDatos);

module.exports = router;
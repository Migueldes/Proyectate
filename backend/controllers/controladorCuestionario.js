const usuarioPromedio = require('../modelo/modeloIA'); // Importamos la función del modelo

const procesarDatos = (req, res) => {
  const respuestas = req.body; // Obtenemos las respuestas del frontend

  try {
    // Calculamos los resultados con la función del modelo
    const resultado = usuarioPromedio(respuestas);

    // Enviamos el resultado al frontend
    res.status(200).json({ resultado });
  } catch (error) {
    console.error('Error al procesar las respuestas:', error);
    res.status(500).json({ error: 'Error al procesar el cuestionario' });
  }
};

module.exports = procesarDatos;

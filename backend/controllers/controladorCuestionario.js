const { default: usuarioPromedio } = require('../modelo/modeloIA');


//Puede ser modificado, depende de como sea el front
const procesarDatos = async(req, res) => {
    try {
        const formData = req.body;
        const resultado = usuarioPromedio(formData);
        res.json(resultado)
    } catch (error) {
        res.status(500).json({ error: 'Error al interactuar con el modelo'})
    }
};

module.exports = procesarDatos;
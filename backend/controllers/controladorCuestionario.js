const procesoIA = require('../modelo/modeloIA')

const procesarDatos = async(req, res) => {
    try {
        const formData = req.body;
        const resultado = await procesoIA(formData);
        res.json(resultado)
    } catch (error) {
        res.status(500).json({ error: 'Error al interactuar con el modelo'})
    }
};

module.exports = procesarDatos;
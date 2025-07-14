const mongoose = require('mongoose');
const { Schema } = mongoose;

const equipoSchema = new Schema({
    nombre_equipo: { type: String, required: true },
    liga: { type: String, required: true },
    pais: { type: String, required: true },
    division: { type: String, required: true },
    fecha_creacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('equipo', equipoSchema);

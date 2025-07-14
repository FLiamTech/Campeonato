const equipoController = {};
const equipo = require('../models/equipo'); 

// POST
equipoController.addEquipo = async (req, res) => {
    try {
        const nuevoEquipo = new equipo({
            nombre_equipo: req.body.nombre_equipo,
            liga: req.body.liga,
            pais: req.body.pais,
            division: req.body.division
        });

        await nuevoEquipo.save();
        res.json({ status: 'Equipo guardado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar el equipo' });
    }
};

// GET
equipoController.getEquipo = async (req, res) => {
    try {
        const equipos = await equipo.find();
        res.json(equipos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener equipos' });
    }
};

// PUT
equipoController.updateEquipo = async (req, res) => {
    try {
        const equipoActualizado = await equipo.findOneAndUpdate(
            { nombre_equipo: req.body.nombre_equipo },
            {
                liga: req.body.liga,
                pais: req.body.pais,
                division: req.body.division
            },
            { new: true }
        );

        if (equipoActualizado) {
            res.json({ status: 'Equipo actualizado', equipo: equipoActualizado });
        } else {
            res.status(404).json({ status: 'Equipo no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el equipo' });
    }
};

// DELETE
equipoController.deleteEquipo = async (req, res) => {
  try {
    const { id } = req.params; // aquí capturas el :id de la URL
    const equipoEliminado = await equipo.findByIdAndDelete(id);
    if (equipoEliminado) {
      res.json({ status: 'Equipo eliminado', equipo: equipoEliminado });
    } else {
      res.status(404).json({ status: 'Equipo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el equipo' });
  }
};


module.exports = equipoController;

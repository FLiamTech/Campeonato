const express = require('express');
const router = express.Router();

const equipo = require('../controller/equipo.controller');

router.get('/camp/equipo', equipo.getEquipo);
router.post('/camp/equipo', equipo.addEquipo);

router.get('/camp/about', (req, res) => {
    res.send('acerca del campeonato');
});

router.get('/camp/equipo', equipo.getEquipo);
router.post('/camp/equipo', equipo.addEquipo);
router.put('/camp/equipo', equipo.updateEquipo);
router.delete('/camp/equipo/:id', equipo.deleteEquipo);


module.exports = router;

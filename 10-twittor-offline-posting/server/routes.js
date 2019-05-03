// Routes.js - Módulo de rutas
var express = require('express');
var router = express.Router();





const mensajes=[
  {
    _id:'12345',
    user: 'spiderman',
    mensaje: 'hola tia mai'

  },
  {
    _id:'5678',
    user: 'ironman',
    mensaje: 'hola tia mai'

  },
  {
    _id:'98765',
    user: 'hulk',
    mensaje: 'hola tia mai'

  }
]

// Get mensajes
router.get('/', function (req, res) {
  //res.json('Obteniendo mensajes');
  res.json(mensajes);
});




module.exports = router;
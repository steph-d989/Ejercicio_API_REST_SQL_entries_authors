const express = require('express');
// Rutas de productos
const entriesController = require("../controllers/entries.controller");
const router = express.Router();
const checkApiKey = require('../middlewares/auth_api_key');

router.get('/', checkApiKey, entriesController.getEntries);
router.post('/', checkApiKey, entriesController.createEntry);
router.put('/', checkApiKey, entriesController.updateEntry);
router.delete('/', checkApiKey, entriesController.deleteEntry);

module.exports = router;

// GET http://localhost:3000/api/entries?API_KEY=123abc --> ALL
// GET http://localhost:3000/api/entries?API_KEY=123abc?email=hola@gmail.com --> por email
// POST http://localhost:3000/api/entries?API_KEY=123abc
// 
/*
{
    "title":"noticia desde Node",
    "content":"va a triunfar esto2",
    "email":"alejandru@thebridgeschool.es",
    "category":"sucesos"
}
    */
   
// PUT http://localhost:3000/api/entries
/*{
    "title": "Se acabaron las mandarinas de TB",
    "content": "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
    "date": "2024-06-17",
    "email": "guillermu@thebridgeschool.es",
    "category": "sucesos",
    "old_title": "El titulo antiguo a cambiar"
}*/
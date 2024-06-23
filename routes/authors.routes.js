const express = require('express');
// Rutas de productos
const authorsController = require("../controllers/authors.controller");
const router = express.Router();
const checkApiKey = require('../middlewares/auth_api_key');

router.get('/', checkApiKey, authorsController.getAuthors);
router.get('/', checkApiKey, authorsController.getAuthorsByEmail);
router.post('/', checkApiKey, authorsController.createAuthors);
router.put('/', checkApiKey, authorsController.updateAuthors);
router.delete('/', checkApiKey, authorsController.deleteAuthors);

module.exports = router;

// GET http://localhost:3000/api/authors?API_KEY=123abc --> ALL
// GET http://localhost:3000/api/authors?email=hola@gmail.com --> por email
// POST http://localhost:3000/api/authors?API_KEY=123abc
// PUT http://localhost:3000/api/authors?API_KEY=123abc
// DELETE http://localhost:3000/api/authors?API_KEY=123abc
// 
/*
{
    "title":"noticia desde Node",
    "content":"va a triunfar esto2",
    "email":"alejandru@thebridgeschool.es",
    "category":"sucesos"
}
    */
   
// PUT http://localhost:3000/api/authors
/*{
    "title": "Se acabaron las mandarinas de TB",
    "content": "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
    "date": "2024-06-17",
    "email": "guillermu@thebridgeschool.es",
    "category": "sucesos",
    "old_title": "El titulo antiguo a cambiar"
}*/
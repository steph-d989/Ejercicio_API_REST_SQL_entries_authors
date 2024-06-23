const authors = require('../models/authors.model'); // Importar el modelo de la BBDD

// GET http://localhost:3000/api/authors?API_KEY=123abc --> ALL
// GET http://localhost:3000/api/authors?API_KEY=123abc&email=hola@gmail.com --> por email
const getAllAuthors = async (req, res) => {
    let authorsData;
    try {
        if (req.query.email) {
             authorsData = await authors.getAuthorsByEmail(req.query.email);
        } else {
            authorsData = await authors.getAllAuthors();
        }
        res.status(200).json(authorsData); // [] con las authors encontradas
    } catch (error) {
        res.status(500).json({ error: "Error en la BBDD" });
    }
};

const getAuthorsByEmail = async (req, res) => {
    let authors;
    try {
        if (req.query.email) {
            authors = await authors.getAuthorsByEmail(req.query.email);
        }
        res.status(200).json(authors); // [] con las authors encontradas
    } catch (error) {
        res.status(500).json({ error: "Error en la BBDD" });
    }
}

//createEntry
// POST http://localhost:3000/api/authors?API_KEY=123abc
/*  let newAuthors = {
    "title": "Se acabaron las mandarinas de TB",
   "content": "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
    "date": "2024-06-17",
    "category": "sucesos",
    "name": "El titulo antiguo a cambiar",
    "surname": "El titulo antiguo a cambiar",
}
 */
// Crear author por email
const createAuthors = async (req, res) => {
    const newAuthors = req.body; // {title,content,email,image}
    if (
        "name" in newAuthors &&
        "surname" in newAuthors &&
        "email" in newAuthors &&
        "image" in newAuthors
    ) {
        try {
            const response = await authors.createAuthors(newAuthors);
            res.status(200).json({
                items_created: response,
                data: newAuthors,
            });
        } catch (error) {
            res.status(500).json({ error: "Error en la BBDD" });
        }
    } else {
        res.status(400).json({ error: "Faltan campos en la entrada" });
    }
};

// PUT http://localhost:3000/api/authors
/*const updatedAuthor =  { 
     "name": "Steph",
     "surname": "Damiani",
     "email": "steph@thebridgeschool.es",
     "image": "imagendesteph",
     "old_email": "steph@thebridgeschool.es"
// }*/

const updateAuthors = async (req, res) => {
    const modifiedAuthors = req.body; // {name,surname,email,image,old_email}
    if (
        "name" in modifiedAuthors &&
        "surname" in modifiedAuthors &&
        "email" in modifiedAuthors &&
        "image" in modifiedAuthors &&
        "old_email" in modifiedAuthors 
    ) {
        try {
            const response = await authors.updateAuthors(modifiedAuthors);
            res.status(201).json({
                items_updated: response,
                data: modifiedAuthors,
            });
        } catch (error) {
            res.status(500).json({ error: "Error en la BBDD" });
        }
    } else {
        res.status(400).json({ error: "Faltan campos en la entrada" });
    }
};

const deleteAuthors = async (req, res) => {
    let authors;
    try{
        authors = await authors.queries.deleteAuthors(req.query.email);
        res.status(200).json({"exito": `Se ha borrado entry: "${req.query.email}"`})
    }catch{
        res.status(500).json({"error": "Error en la BBDD"})
    }
}


module.exports = {
    getAllAuthors,
    getAuthorsByEmail,
    createAuthors,
    deleteAuthors, //--> DELETE
    updateAuthors //--> PUT
}
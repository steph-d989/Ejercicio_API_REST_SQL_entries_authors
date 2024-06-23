const entry = require('../models/entries.model'); // Importar el modelo de la BBDD

// GET http://localhost:3000/api/entries?API_KEY=123abc --> ALL
// GET http://localhost:3000/api/entries?email=hola@gmail.com --> por email
const getEntries = async (req, res) => {
    let entries;
    try {
        if (req.query.email) {
            entries = await entry.getEntriesByEmail(req.query.email);
        } else {
            entries = await  entry.getAllEntries();
        }
        res.status(200).json(entries); // [] con las entries encontradas
    } catch (error) {
        res.status(500).json({ error: "Error en la BBDD" });
    }
};

//createEntry
// POST http://localhost:3000/api/entries
// let newEntry = {
//     title:"noticia desde Node",
//     content:"va a triunfar esto2",
//     email:"alejandru@thebridgeschool.es",
//     category:"sucesos"}

// Crear entry por email
const createEntry = async (req, res) => {
    const newEntry = req.body; // {title,content,email,category}
    if (
        "title" in newEntry &&
        "content" in newEntry &&
        "email" in newEntry &&
        "category" in newEntry
    ) {
        try {
            const response = await entry.createEntry(newEntry);
            res.status(201).json({
                items_created: response,
                data: newEntry,
            });
        } catch (error) {
            res.status(500).json({ error: "Error en la BBDD" });
        }
    } else {
        res.status(400).json({ error: "Faltan campos en la entrada" });
    }
};

// PUT http://localhost:3000/api/entries
/*{
    title: "Se acabaron las mandarinas de TB",
    content: "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
    date: "2024-06-17"
    email: "guillermu@thebridgeschool.es",
    category: "sucesos"
    old_title: "El titulo antiguo a cambiar"
}*/

const updateEntry = async (req, res) => {
    const modifiedEntry = req.body; // {title,content,date,email,category,old_title}
    if (
        "title" in modifiedEntry &&
        "content" in modifiedEntry &&
        "date" in modifiedEntry &&
        "email" in modifiedEntry &&
        "category" in modifiedEntry &&
        "old_title" in modifiedEntry
    ) {
        try {
            const response = await entry.updateEntry(modifiedEntry);
            res.status(201).json({
                items_updated: response,
                data: modifiedEntry,
            });
        } catch (error) {
            res.status(500).json({ error: "Error en la BBDD" });
        }
    } else {
        res.status(400).json({ error: "Faltan campos en la entrada" });
    }
};

const deleteEntry = async (req, res) => {
    let entries;
    try{
        entries = await entries.queries.deleteEntry(req.query.email);
        res.status(200).json({"exito": `Se ha borrado entry: "${req.query.email}"`})
    }catch{
        res.status(500).json({"error": "Error en la BBDD"})
    }
}


module.exports = {
    getEntries,
    createEntry,
    deleteEntry,
    updateEntry 
}
const { Pool } = require('pg');
const pool = require('../config/db_pgsql') 
const db_queries_entries = require('../queries/entries.queries');

// GET
const getEntriesByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(db_queries_entries.getEntriesByEmail, [email])
        result = data.rows
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// GET
const getAllEntries = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(db_queries_entries.getAllEntries)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// CREATE
const createEntry = async (entry) => {
    const { title, content, email, category } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(db_queries_entries.createEntry,[title, content, email, category])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//UPDATE
const updateEntry = async (entry) => {
    const { title, content, date, email, category, old_title } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(db_queries_entries.updateEntry,[
            title, 
            content, 
            date, 
            email, 
            category, 
            old_title
        ])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}
/*{
    title: "Se acabaron las mandarinas de TB",
    content: "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
    date: "2024-06-17"
    email: "guillermu@thebridgeschool.es",
    category: "sucesos"
    old_title: "El titulo antiguo a cambiar"
}*/
// DELETE
const deleteEntry = async (email) =>{
    let client, result;
    try{
        client = await pool.connect();
        const data = await client.query(db_queries_entries, [email])
        result=data
    }catch(err){
        console.log(err)
        throw err;
    }finally{
        client.release();
    }
    return result
}



const entries = {
    getEntriesByEmail,
    getAllEntries,
    createEntry,
    deleteEntry,
    updateEntry
}

module.exports = entries;


// Pruebas

     /* getEntriesByEmail("birja@thebridgeschool.es")
    .then(data=>console.log(data)) */ 


/*
getAllEntries()
.then(data=>console.log(data))
*/

/*
 let newEntry = {
    title: "Se acabaron las mandarinas de TB",
    content: "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
    email: "guillermu@thebridgeschool.es",
    category: "sucesos"
}

createEntry(newEntry)
    .then(data => console.log(data)) 
*/
/* 
const updatedEntry = {
    title: "Estamos de Lunes de Back2",
    content: "Venganza de Elefante relacional SQL",
    date:"2024-06-17",
    email: "guillermu@thebridgeschool.es",
    category: "Software",
    old_title:"Estamos de Lunes de Back"
}

updateEntry(updatedEntry)
    .then(data => console.log(data)) */
//const { Pool } = require('pg');
const pool = require('../config/db_pgsql')
const db_queries_authors = require('../queries/authors.queries.js');


// GET
const getAllAuthors = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(db_queries_authors.getAllAuthors)
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

const getAuthorsByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(db_queries_authors.getAuthorsByEmail, [email])
        result = data.rows
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const createAuthors = async (author) => {
    const { name, surname, email, image } = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(db_queries_authors.createAuthors,[name, surname, email, image])
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
const updateAuthors = async (author) => {
    const { name, surname, email, image, old_email } = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(db_queries_authors.updateAuthors,[
            name, 
            surname, 
            email, 
            image, 
            old_email
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
const deleteAuthors = async (email) =>{
    let client, result;
    try{
        client = await pool.connect();
        const data = await client.query(db_queries_authors.deleteAuthor, [email])
        result=data.fields;
    }catch(err){
        console.log(err)
        throw err;
    }finally{
        client.release();
    }
    return result
}


const authors = {
    getAllAuthors,
    getAuthorsByEmail,
    createAuthors,
    deleteAuthors,
    updateAuthors
}

module.exports = authors;


// Pruebas

/* getAllAuthors()
.then(data=>console.log(data)); 
getAuthorsByEmail("alejandru@thebridgeschool.es")
.then(data=>console.log(data));
getAuthorsByEmail("alejandru@thebridgeschool.es")
.then(data=>console.log(data));
*/

/*     getEntriesByEmail("birja@thebridgeschool.es")
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

createAuthors(newEntry)
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
 */
/* 

const author = {
        "name": "pachu",
        "surname": "lee",
        "email": "steph@thebridgeschool.es",
        "image": "esta image",
        "old_email": "bolitas@thebridgeschool.es"

        }

        updateAuthors(author)
        .then(data => console.log(data))  */
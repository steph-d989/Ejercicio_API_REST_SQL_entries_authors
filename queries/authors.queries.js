const db_queries_authors = {

    getAllAuthors: `SELECT id_author, name, surname, email, image
    FROM authors;`,
    getAuthorsByEmail: `SELECT id_author, name, surname, email, image
    FROM authors
    WHERE email=$1;`,
    createAuthors: `INSERT INTO authors(name, surname, email, image)
    VALUES ($1, $2, $3, $4);`,
    updateAuthors: `UPDATE public.authors
    SET 
    name=$1,
    surname=$2,
    email=$3,
    image=$4
    WHERE email=$5;`,
    deleteAuthor: `DELETE FROM authors
    WHERE email=$1;`
}


module.exports = db_queries_authors;
const db_queries_entries = {
        getEntriesByEmail: `
    SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author=a.id_author
    WHERE a.email=$1
    ORDER BY e.title;`,
getAllEntries: `
    SELECT e.title, e.content, e.date, e.category, a.name, a.surname, a.image
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author = a.id_author
    ORDER BY a.name;`,
    
        createEntry: `INSERT INTO entries(title,content,id_author,category) 
    VALUES ($1,$2,
    (SELECT id_author FROM authors WHERE email=$3),$4)`,

    updateAuthor: `UPDATE public.authors
    SET 
    name=$1,
    surname=$2,
    email=$3,
    image=$4
    WHERE email=$5;`,
    deleteAuthor: `DELETE FROM authors
    WHERE email=$1;`,
        modifyEntry:
        `ALTER TABLE entries
        ADD UNIQUE(title)`
}
module.exports = db_queries_entries;
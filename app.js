const express = require("express"); //llama al paquete express
const app = express(); //inicializa servidor
const port = 3000;
const pg = require("pg");
const config = require("dotenv")



// Importar Middlewares
const error404 = require("./middlewares/error404");
const morgan = require("./middlewares/morgan");

// Logger
app.use(morgan(':method :host :url :status :param[id] - :response-time ms :body'));

// Rutas
//const booksRoutes = require("./routes/books.routes")
//const productsRoutes = require("./routes/products.routes")
const entriesRoutes = require("./routes/entries.routes")
const authorsRoutes = require("./routes/authors.routes")

app.use(express.json()); // Habilito recepción de JSON en servidor

// sobre app se va a acrear dos rutas 
app.get("/", (req, res) => {   
  res.send("Hello World!");
});

// Rutas
//API
//app.use('/api/books',booksRoutes);
//app.use('/api/products',productsRoutes);
app.use('/api/authors',authorsRoutes)
app.use('/api/entries',entriesRoutes);
app.use(error404); //Middleware gestiona el 404



app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});



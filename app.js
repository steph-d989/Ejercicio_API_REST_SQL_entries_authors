const express = require("express"); //llama al paquete express
const app = express(); //inicializa servidor
const port = 3000;

// Importar Middlewares
const error404 = require("./middlewares/error404");
const morgan = require("./middlewares/morgan");

// Logger
app.use(morgan(':method :host :url :status :param[id] - :response-time ms :body'));

// Rutas
const entriesRoutes = require("./routes/entries.routes")
const authorsRoutes = require("./routes/authors.routes");
const checkApiKey = require("./middlewares/auth_api_key");

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Habilito recepción de JSON en servidor


// sobre app se va a acrear dos rutas 
app.get("/", (req, res) => {   
  res.send("Hello World!");
});

// Rutas
//API
app.use('/api/authors', checkApiKey ,authorsRoutes)
app.use('/api/entries', checkApiKey ,entriesRoutes);
app.use(error404); //Middleware gestiona el 404



app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});



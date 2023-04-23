const { Router } = require("express");

const dogsRouter = Router();
const { getDogsHandler, getDogByIdHandler } = require("../handlers/dogsHandlers");

//! Modularizo para sacar aparte los handlers "(req, res)=>{}"

//! Modularizaciones


// dogsRouter.get('/', (req, res) => {
//    // Llamar a una función que obtenga los datos de la DB
//    // Llamar a una función que obtenga los datos de la API
//    // Unificar los datos y responder con esa info
//    res.status(200).send("NIY: Ruta para obtener todos los perros");
// });

// dogsRouter.get('/:id', (req, res) => {
//    res.status(200).send("NIY: Ruta para obtener detalle de un perro");
// });

dogsRouter.get('/', getDogsHandler);
dogsRouter.get('/:id', getDogByIdHandler);

module.exports = dogsRouter;